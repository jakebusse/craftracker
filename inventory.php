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

<div class="inventory-form-container">
    <fieldset>
        <legend>Individual Add</legend>
        <form name="inventoryAdd" onsubmit="return validateForm();" method="post">
            <select id="mfr" name="mfr" required>
                <option disable selected value>Brand</option>
                <option value="DMC">DMC</option>
            </select>
            <input type="number" id="num" name="num" placeholder="Number" required />
            <input type="number" id="qty" name="qty" placeholder="Quantity" required />
            <input type="submit" id="submit" value="Add" />
        </form>
        <p id="form-validation" style="display: <?php echo $_SESSION['messageDisplay']; ?>;color: <?php echo $_SESSION['messageColor']; ?>;"><?php echo $_SESSION['message']; ?></p>
    </fieldset>
    <fieldset>
        <legend>Bulk Add</legend>
    </fieldset>
</div>

<div class="inventory-table-container">
    <?php 
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT id, mfr, num, qty, owner FROM inventory WHERE owner = :owner";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':owner' => $_SESSION['id']]);

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (count($results) > 0) {
            // output data of each row
            echo '<script>let color;let elem;</script>';
            echo '<table class="inventory-table" cellspacing="0"';
            echo '
                    <tr>
                        <th class="color-prev"></th>
                        <th>Manufacturer</th>
                        <th>Number</th>
                        <th>Quantity</th>
                    </tr>';
            $count = 0;
            foreach ($results as $row) {
                if($row['qty'] <= 0) {
                    $deleteSql = "DELETE FROM inventory WHERE id = :id";
                    $deleteStmt = $conn->prepare($deleteSql);
                    $deleteStmt->execute([':id' => $row['id']]);
                    continue;
                }

                echo '
                    <tr>
                        <td class="color-prev" id="cp'.$count.'"></td>
                        <td>' . $row['mfr'] . '</td>
                        <td>' . $row['num'] . '</td>
                        <td>' . $row['qty'] . '</td>
                        <td class="control"><i style="color:#8B8000;" class="fa-solid fa-pencil" /></td>
                        <td class="control"><i style="color:darkred;" class="fa-solid fa-trash" /></td>
                    </tr>
                    <script>setElemBg(\'cp'.(string)$count.'\','.($row['num']*10000).');</script>';
                $count++;
            }
            echo '</table>';
        } else {
            echo "<p>0 results</p>";
        }
    ?>
</div>

<script>
    function validateForm() {
        let colorNum = document.forms["inventoryAdd"]["num"].value;
        const validText = document.getElementById('form-validation');
        if(!validateDmcColor(colorNum)) {
            // validText.style.display = 'block';
            // validText.style.color = 'red';
            // validText.innerText = "Not a valid DMC number"
            validText.innerHTML = "<?php $_STATUS['messageDisplay']='block';$_STATUS['messageColor']='red';$_STATUS['message']='Invalid DMC Number';echo $_STATUS['message']; ?>";
            return false;
        }
        return true;
    }
</script>

<?php
    template_footer('Home');
    $conn = null;
?>