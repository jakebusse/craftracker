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

        $sql = "SELECT username, password FROM accounts WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':id' => $_SESSION['id']]);
        $userData = $stmt->fetch(PDO::FETCH_ASSOC);

        if(strcmp($userData['username'], $_SESSION['user']) != 0 || strcmp($userData['username'], $_POST['delusername']) != 0) {
            $response['status'] = 'failure';
            $response['message'] = "Username is Incorrect";
            echo json_encode($response);
            exit;
        }

        if(!password_verify($_POST['delpassword'], $userData['password'])) {
            $response['status'] = 'failure';
            $response['message'] = "Password is Incorrect";
            echo json_encode($response);
            exit;
        }


        try {
            $conn->prepare("DELETE FROM inventory WHERE owner = :id")->execute([':id' => $_SESSION['id']]);
            $conn->prepare("DELETE FROM accounts WHERE id = :id")->execute([':id' => $_SESSION['id']]);

            $response['status'] = 'success';
            $response['message'] = 'Account Deleted';
            $response['redirect'] = './auth/logout';
        } catch (PDOException $e) {
            $response['status'] = 'failure';
            $response['message'] = "Error: " . $e->getMessage();
        }

        $conn = null;
    }

    echo json_encode($response);