<?php
    include 'main.php';
    $configs = include('config.php');

    session_start();
    if(!$_SESSION['loggedin']) {
        header('Location: ./auth/login');
    }



    $conn = new mysqli($configs->mysql_host, $configs->mysql_user, $configs->mysql_pass, $configs->mysql_db);
    if($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    if($_SERVER['REQUEST_METHOD']=="POST") {
        $sql = "INSERT INTO inventory (mfr, num, qty, owner) VALUES ('" . $_POST['mfr'] . "', '" . $_POST['num'] . "', '" . $_POST['qty'] . "', '" . $_SESSION['id'] . "')";
    
        $message;

        if ($conn->query($sql) === TRUE) {
            $message = "New record created successfully";
        } else {
            $message = "Error: " . $sql . "<br>" . $conn->error;
        }

        $_POST = array();
        header('Location: ./inventory');
    }

    $conn->close;
?>


<?php
    template_header('Home');
?>

<div class="inventory-form-container">
    <form name="inventoryAdd" onsubmit="return validateForm();" method="post">
        <label for="mfr">Brand</label>
        <select id="mfr" name="mfr" required>
            <option disable selected value>-- Select --</option>
            <option value="DMC">DMC</option>
        </select>
        <label for="num">Number</label>
        <input type="number" id="num" name="num" required />
        <label for="qty">Quantity</label>
        <input type="number" id="qty" name="qty" required />
        <input type="submit" value="Add" />
    </form>
    <p id="form-validation"></p>
</div>

<div class="inventory-table-container">
    <?php 
        $sql = "SELECT id,mfr,num,qty,owner FROM inventory WHERE owner = '" . $_SESSION['id'] . "'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
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
            while($row = $result->fetch_assoc()) {
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
        let post = document.forms["inventoryAdd"];
        const validText = document.getElementById('form-validation');
        if(post["mfr"].value == "DMC") {
            for(let i = 0; i < colors.length;  i++) {
                if(colors[i].Number == post["num"].value) {
                    validText.style.color = 'green';
                    validText.innerText = "Adding DMC " + post["num"].value + " to inventory"
                    return true;
                }
            }
            validText.style.display = 'block';
            validText.style.color = 'red';
            validText.innerText = "Not a valid DMC number"
            return false;
        }
    }
</script>

<?php
    template_footer('Home')
?>