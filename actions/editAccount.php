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

        $sql = "UPDATE accounts SET firstname = :firstname, lastname = :lastname, username = :username, email = :email, dmc = :dmc WHERE id = :id";
        $stmt = $conn->prepare($sql);

        try {
            $stmt->execute([
                ':firstname' => htmlspecialchars($_POST['firstname']),
                ':lastname' => htmlspecialchars($_POST['lastname']),
                ':username' => htmlspecialchars($_POST['username']),
                ':email' => htmlspecialchars($_POST['email']),
                ':dmc' => htmlspecialchars($_POST['favDmc']),
                ':id' => $_SESSION['id'],
            ]);

            $_SESSION['user'] = $_POST['username'];
            $_SESSION['color'] = $_POST['favDmc'];

            $response['status'] = 'success';
            $response['message'] = 'Account Successfully Updated';
            $response['redirect'] = './account';
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