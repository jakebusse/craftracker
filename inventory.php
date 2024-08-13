<?php
    include './main.php';

    session_start();
    if(!$_SESSION['loggedin']) {
        header('Location: ./auth/login');
    }

    function getFlossInventory() {
        $configs = include('config.php');

        $dmc_colors_json = file_get_contents('./lib/js/dmc_colors.json');
        $dmc_colors = json_decode($dmc_colors_json, true); 
        try {
            $conn = new PDO("mysql:host={$configs->mysql_host};dbname={$configs->mysql_db}", $configs->mysql_user, $configs->mysql_pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Connection Failed: " . $e->getMessage());
        }

        $sql = "SELECT mfr, num, qty FROM inventory WHERE owner = :owner";
        $stmt = $conn->prepare($sql);

        try {
            $stmt->execute([
                ':owner' => $_SESSION['id']
            ]);

            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if(count($results) > 0) {
                foreach($results as $row) {
                    echo '
                    <tr>
                        <td class="td-check">
                            <label class="check-container">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>
                        </td>
                        <td class="td-mfr">'.$row['mfr'].'</td>
                        <td class="td-num">'.$row['num'].'</td>
                        <td class="td-qty">'.$row['qty'].'</td>
                        <td class="td-color-prev"><div class="color-prev" style="background-color:'.$dmc_colors[$row['num']]['hex'].';">&nbsp;</div></td>
                        <td class="td-ctrl">
                            <button class="btn-add" data-mfr="'.$row['mfr'].'" data-num="'.$row['num'].'" data-qty="'.$row['qty'].'" style="color:'.$dmc_colors['909']['hex'].';"><i class="bx bxs-plus-circle"></i></button>
                            <button class="btn-sub" data-mfr="'.$row['mfr'].'" data-num="'.$row['num'].'" data-qty="'.$row['qty'].'" style="color:'.$dmc_colors['3829']['hex'].';"><i class="bx bxs-minus-circle"></i></button>
                            <button class="btn-del" data-mfr="'.$row['mfr'].'" data-num="'.$row['num'].'" data-qty="'.$row['qty'].'" style="color:'.$dmc_colors['814']['hex'].';"><i class="bx bxs-trash"></i></button>
                        </td>
                    </tr>
                    ';
                }
            } else {
                echo '
                <tr>
                    <td></td>
                    <td>0 results</td>
                    <td></td>
                </tr>
                ';
            }
        } catch (PDOException $e) {
            echo '
            <tr>
                <td style="color:red;">'.$e->getMessage().'</td>
            </tr>
            ';
        }
    }

   

    if($_SERVER['REQUEST_METHOD']=="POST") {
        $sql = "INSERT INTO inventory (mfr, num, qty, owner) VALUES (:mfr, :num, :qty, :owner)";
        $stmt = $conn->prepare($sql);

        try {
            $stmt->execute([
                ':mfr' => $_POST['mfr'],
                ':num' => $_POST['num'],
                ':qty' => $_POST['qty'],
                ':owner' => $_SESSION['id']
            ]);
            echo "New record created successfully";
        } catch (PDOException $e) {
            if($e->errorInfo[1] == 1062) {
                $updateSql = "UPDATE inventory SET qty = qty + :qty WHERE mfr = :mfr AND num = :num AND owner = :owner";
                $updateStmt = $conn->prepare($updateSql);
                $updateStmt->execute([
                    ':qty' => $_POST['qty'],
                    ':mfr' => $_POST['mfr'],
                    ':num' => $_POST['num'],
                    ':owner' => $_SESSION['id']
                ]);
                $_SESSION['messageDisplay'] = 'block';
                $_SESSION['message'] = "Existing record updated with new quantity";
            } else {
                echo "Error: " . $e->getMessage();
            }
        }

        $_POST = array();
        header('Location: ./inventory');
    }

    function selectFilter($param, $id) {
        if(isset($_GET[$param]) && $_GET[$param] == $id) {
            echo 'selected';
        }
    }
?>


<?php
    template_header('Inventory');
?>
<link rel="stylesheet" type="text/css" href="./lib/css/inventory.css">

<div class="tab-container">
    <div class="tab">
        <div class="tablinks" onclick="openTab(event, 'embroidery-floss')" id="defaultOpen">Embroidery Floss</div>
        <!-- <div class="tablinks" onclick="openTab(event, 'yarn')">Yarn</div> -->
        <div class="fillertab">&nbsp;</div>
    </div>

    <div id="embroidery-floss" class="tabcontent">
        <p id="form-validation" style="padding-left: 25px;"></p>
        <div class="inventory-actions" id="inventory-actions">
                <button class="new ia-button" onclick="openMobileActionsMenu()"><i class="bx bx-play"></i>&nbsp;&nbsp;Actions</button>
                <button class="mobile-close" onclick="closeMobileActionsMenu()"><i class="bx bx-x"></i></button>
                <form>
                    <fieldset>
                        <label for="quickadd"><i class="bx bxs-filter-alt"></i></label>
                        <input type="text" id="formid" name="formid" value="filter" hidden />
                        <select name="filter" id="filter" required>
                            <option selected default disabled>-- SELECT --</option>
                            <option value='' style="display:<?php if(isset($_GET['filter']) && $_GET['filter'] != '') echo 'block'; else echo 'none'?>">None</option>
                            <option value="dmc" <?php selectFilter('filter', 'dmc')?>>DMC</option>
                            <option value="anchor" <?php selectFilter('filter', 'anchor'); ?>>Anchor</option>
                        </select>
                        <input type="submit" class="submit" id="filtersubmit" value="Filter" />
                    </fieldset>
                </form>

                <form id="search">
                    <fieldset>
                        <label for="search"><i class="bx bx-search"></i></label>
                        <input type="text" id="formid" name="formid" value="search" hidden />
                        <input type="text" class="text" id="search" name="search" <?php if(isset($_GET['quickadd'])) echo 'autofocus'; ?> />
                        <input type="submit" class="submit" id="searchsubmit" value="Search" />
                    </fieldset>
                </form>

                <form id="quickadd">
                    <fieldset>
                        <label for="quickadd"><i class="bx bxs-plus-circle"></i></label>
                        <input type="text" id="formid" name="formid" value="quickadd" hidden />
                        <input type="text" id="mfr" name="mfr" value="<?php echo isset($_GET['filter']) ? $_GET['filter'] : ''; ?>" hidden />
                        <input type="text" class="text" id="quickadd" name="quickadd" <?php if(isset($_GET['quickadd'])) echo 'autofocus'; ?> />
                        <input type="submit" class="submit" id="quickaddsubmit" value="Add" />
                    </fieldset>
                </form>

            <button class="new"><i class="bx bxs-plus-circle"></i>&nbsp;&nbsp;Add New</button>
        </div>

        <div class="inventory-table-container">
            <table class="inventory-table">
                <tr class="tableheader">
                    <th class="td-check">
                        <label class="check-container">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                    </th>
                    <th class="td-mfr">Manufacturer</th>
                    <th class="td-num">Number</th>
                    <th class="td-qty">Quantity</th>
                    <th class="td-color-prev"><div class="color-prev" style="background-color:rgba(255,255,255,0.25);border:1px solid rgba(255,255,255,0.75);">&nbsp;</div></th>
                    <th class="td-ctrl">
                        <button class="btn-add" data-mfr="" data-num="" data-qty="" style="color:rgba(var(--text-color),0.5);cursor:default;"><i class="bx bxs-plus-circle"></i></button>
                        <button class="btn-sub" data-mfr="" data-num="" data-qty="" style="color:rgba(var(--text-color),0.5);cursor:default;"><i class="bx bxs-minus-circle"></i></button>
                        <button class="btn-del" data-mfr="" data-num="" data-qty="" style="color:rgba(var(--text-color),0.5);cursor:default;"><i class="bx bxs-trash"></i></button>
                    </th>
                </tr>
                <?php echo getFlossInventory(); ?>
            </table>
        </div>
    </div>

    <!--
    <div id="yarn" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p> 
    </div>
-->
    <script src="./lib/js/inventory.js"></script>
</div>

<?php
    template_footer('Inventory');
    $conn = null;
?>