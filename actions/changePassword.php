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

        $sql = "SELECT password FROM accounts WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':id' => $_SESSION['id']]);
        $userData = $stmt->fetch(PDO::FETCH_ASSOC);

        if(!password_verify($_POST['cpassword'], $userData['password'])) {
            $response['status'] = 'failure';
            $response['message'] = "Current Password is Incorrect";
            echo json_encode($response);
            exit;
        }

        if(strcmp($_POST['npassword1'], $_POST['npassword2']) != 0) {
            $response['status'] = 'failure';
            $response['message'] = "New passwords do not match";
            echo json_encode($response);
            exit;
        }

        $sql = "UPDATE accounts SET password = :password WHERE id = :id";
        $stmt = $conn->prepare($sql);

        try {
            $stmt->execute([
                ':password' => password_hash($_POST['npassword1'], PASSWORD_DEFAULT),
                ':id' => $_SESSION['id'],
            ]);

            $response['status'] = 'success';
            $response['message'] = 'Password Successfully Updated';
            $response['redirect'] = './auth/logout';
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