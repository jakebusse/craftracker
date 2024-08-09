<?php
    $configs = include('../config.php');
    $main = include('../main.php');
    session_start();

    if($_SERVER['REQUEST_METHOD'] == "POST") {
        try {
            $conn = new PDO("mysql:host={$configs->mysql_host};dbname={$configs->mysql_db}", $configs->mysql_user, $configs->mysql_pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            $response['message'] = ("Connection Failed: " . $e->getMessage());
            echo json_encode($response);
            exit;
        }

        $dmc = -1;
        if($_POST['favDmc'] > 0) {
            $dmc = (int)$_POST['favDmc'];
        }

        $hashed_pw = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $sql = "INSERT INTO accounts (firstname, lastname, username, email, password, dmc) VALUES (:firstname, :lastname, :username, :email, :password, :dmc)";
        $stmt = $conn->prepare($sql);

        try {
            $stmt->execute([
                ':firstname' => htmlspecialchars($_POST['firstname']),
                ':lastname' => htmlspecialchars($_POST['lastname']),
                ':username' => htmlspecialchars($_POST['username']),
                ':email' => htmlspecialchars($_POST['email']),
                ':password' => $hashed_pw,
                ':dmc' => $dmc
            ]);

            session_regenerate_id();
            $_SESSION['loggedin'] = TRUE;
            $_SESSION['user'] = $_POST['username'];
            $_SESSION['id'] = $conn->lastInsertId();

            if($dmc > 0) {
                $_SESSION['color'] = $dmc * 10000;
            } else {
                $_SESSION['color'] = rand(0,485);
            }

            $response['status'] = 'success';
            $response['message'] = 'Registration successful!';
            $response['redirect'] = '../home';
        } catch (PDOException $e) {
            $response['status'] = 'failure';
            if($e->errorInfo[1] == 1062) {
                $response['message'] = 'Account with this username or email already exists.';
            } else {
                $response['message'] = "Error: " . $e->getMessage();
            }
        }

        $conn = null;
    }

    echo json_encode($response);