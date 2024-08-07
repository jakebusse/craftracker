<?php
    include '../main.php';
    $configs = include('../config.php');

    session_start();

    if($_SERVER['REQUEST_METHOD']=="POST") {
    
        $conn = new mysqli($configs->mysql_host, $configs->mysql_user, $configs->mysql_pass, $configs->mysql_db);
        if($conn->connect_error) {
            die("Connection Failed: " . $conn->connect_error);
        }

        $sql = "SELECT id,username,password,dmc FROM accounts WHERE username = '" . $_POST['username'] . "'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                if(password_verify($_POST["password"], $row["password"])) {
                    session_regenerate_id();
                    $_SESSION['loggedin'] = TRUE;
                    $_SESSION['user'] = $row['username'];
                    $_SESSION['id'] = $row['id'];
                    if($row["dmc"] > 0) {
                        $_SESSION['color'] = $row['dmc'] * 10000;
                    } else {
                        $_SESSION['color'] = rand(0, 485);
                    }
                    header('Location: ../home');
                }
            }
        } else {
            echo "0 results";
        }
          
        $conn->close();
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Craftracker - Login</title>
        <link rel="stylesheet" type="text/css" href="../lib/css/auth.css" />
        <script src="../lib/js/dmc_colors.js"></script>
        <script src="../lib/js/randomdmc.js"></script>
    </head>
    <body onload="ran_bg_col()">
        <div id="page">
            <div class="form-container">
                <h1>Welcome Back!</h1>
                <div class="message"><?php if(!empty($message)) { echo $message; } ?></div>
                <form method="post">
                    <label for="username">Username</label>
                    <input type="username" name="username" placeholder="betsy.devonshire" id="username" required>
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="••••••••••••••" id="password" required>
                    <input type="submit" value="Login">
                </form>
                <h3>New to Craftracker? <a href="./register.php" class="toggle">Register here</a></h3>
            </div>
            <p id="dmc"></p>
        </div>
    </body>
</html>