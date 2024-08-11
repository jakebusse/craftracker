<?php
    include 'main.php';
    $configs = include('config.php');


    session_start();
    if(!$_SESSION['loggedin']) {
        header('Location: ./auth/login');
    }

    try {
        $conn = new PDO("mysql:host={$configs->mysql_host};dbname={$configs->mysql_db}", $configs->mysql_user, $configs->mysql_pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Connection Failed: " . $e->getMessage());
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
?>


<?php
    template_header('Home');
?>

<link rel="stylesheet" type="text/css" href="./lib/css/inventory.css">
<div class="tab-container">
    <div class="tab">
        <div class="tablinks" onclick="openTab(event, 'embroidery-floss')" id="defaultOpen">Embroidery Floss</div>
        <!-- <div class="tablinks" onclick="openTab(event, 'yarn')">Yarn</div> -->
        <div class="fillertab">&nbsp;</div>
    </div>

    <div id="embroidery-floss" class="tabcontent">
        <div class="inventory-actions">
            <div>
            <form>
                <label for="filter"><i class="bx bxs-filter-alt"></i></label>
                <select name="filter" id="filter">
                    <option value="" disabled default selected>-- SELECT --</option>
                    <option value="" style="display:<?php if(isset($_GET['filter']) && $_GET['filter'] != '') echo 'block'; else echo 'none'; ?>;">None</option>
                    <option value="dmc" <?php if(isset($_GET['filter']) && $_GET['filter'] == 'dmc') echo 'selected'; ?>>DMC</option>
                    <option value="anchor" <?php if(isset($_GET['filter']) && $_GET['filter'] == 'anchor') echo 'selected'; ?>>Anchor</option>
                </select>
                <input type="submit" id="submit" value="Filter" />
            </form>
            </div>
            <div>
            <form>
                <label for="search"><i class="bx bx-search"></i></label>
                <input type="text" class="text" id="search" name="search" value="<?php echo isset($_GET['search']) ? $_GET['search'] : ''; ?>" />
                <input type="submit" id="submit" value="Search" />
            </form>
            </div>
            <div>
                <form>
                    <label for="quickadd"><i class="bx bxs-plus-circle"></i></label>
                    <input type="text" class="text" id="quickadd" name="quickadd" <?php if(isset($_GET['quickadd'])) echo 'autofocus' ?> />
                    <input type="submit" id="submit" value="Add" />
                </form>
            </div>
            <button class="new"><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;Add New</button>
        </div>
        <div class="inventory-table">

        </div>
    </div>

    <!--- 
    <div id="yarn" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p> 
    </div>
    -->
    <script src="./lib/js/inventory.js"></script>
</div>

<?php
    template_footer('Home');
    $conn = null;
?>