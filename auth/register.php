<?php
    $configs = include('config.php');
    session_start();

    if($_SERVER['REQUEST_METHOD']=="POST") {
    
        $conn = new mysqli($configs->mysql_host, $configs->mysql_user, $configs->mysql_pass, $configs->mysql_db);
        if($conn->connect_error) {
            die("Connection Failed: " . $conn->connect_error);
        }

        $dmc = -1;
        if($_POST['favDmc'] > 0) {
            $dmc = $_POST['favDmc'];
        }
    
        $hashed_pw = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $sql = "INSERT INTO accounts (firstname, lastname, username, email, password, dmc) VALUES ('" . $_POST['firstname'] . "', '" . $_POST['lastname'] . "', '" . $_POST['username'] . "', '" . $_POST['email'] . "', '" . $hashed_pw . "', '" . $dmc . "')";
    
        $message;

        if ($conn->query($sql) === TRUE) {
            $message = "New record created successfully";
        } else {
            $message = "Error: " . $sql . "<br>" . $conn->error;
        }
          
        $conn->close();

        session_regenerate_id();
        $_SESSION['loggedin'] = TRUE;
        $_SESSION['user'] = $_POST['username'];
        $_SESSION['id'] = $row['id'];
        if($dmc > 0) {
            $_SESSION['color'] = $dmc * 10000;
        } else {
            $_SESSION['color'] = rand(0, 485);
        }

        header("Location: ../home");
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Craftracker - Login</title>
        <link rel="stylesheet" type="text/css" href="../lib/css/auth.css" />
        <script src="../lib/js/dmc_colors.js"></script>
        <script src="../lib/js/dmc_paint.js"></script>
    </head>
    <body  onload="setRanAuthBg()">
        <div id="page">
            <div class="form-container">
                <h1>Welcome to Craftracker!</h1>
                <div class="message"><?php if(!empty($message)) { echo $message; } ?></div>
                <form method="post">
                    <label for="firstname">First Name</label>
                    <input type="text" name="firstname" placeholder="Betsy" id="firstname" requried>
                    
                    <label for="lastname">Last Name</label>
                    <input type="text" name="lastname" placeholder="Devonshire" id="lastname" required>
                    
                    <label for="username">Username</label>
                    <input type="text" name="username" placeholder="crewelworld" id="username" required>
                    
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="betsy.devonshire@crewelworld.com" id="email" required>
                    
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="••••••••••••••" id="password" required />
                    
                    <label for="favDmc">Favorite DMC Color</label>
                    <input type="number" name="favDmc" id="favDmc" />

                    <input type="submit" value="Register">
                </form>
                <h3>Already a member? <a href="./login.php" class="toggle">Login here</a></h3>
            </div>
            <p id="dmc"></p>
        </div>
    </body>
</html>