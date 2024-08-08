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

<div class="tab-container">
    <div class="tab">
        <div class="tablinks" onclick="openTab(event, 'DMC')" id="defaultOpen">DMC</div>
        <div class="tablinks" onclick="openTab(event, 'Anchor')">Anchor</div>
        <div class="fillertab">&nbsp;</div>
    </div>

    <div id="DMC" class="tabcontent">
        <div class="inventory-actions">
            <div>
            <form>
                <label for="filter"><i class="fa-solid fa-filter"></i>
                <input type="text" class="text" id="filter" name="filter" />
                <input type="submit" id="submit" value="Search" />
            </form>
            </div>
            <div>
                <form>
                    <label for="quickadd"><i class="fa-solid fa-circle-plus"></i></label>
                    <input type="text" class="text" id="quickadd" name="quickadd" />
                    <input type="submit" id="submit" value="Add" />
                </form>
            </div>
            <button class="new"><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;Add New</button>
        </div>
    </div>

    <div id="Anchor" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p> 
    </div>
    <script src="./lib/js/inventory.js"></script>
</div>

<?php
    template_footer('Home');
    $conn = null;
?>