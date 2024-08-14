<?php
include '../main.php';
$configs = include('../config.php');

session_start();

$response = ['status' => 'error', 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    try {
        $conn = new PDO("mysql:host={$configs->mysql_host};dbname={$configs->mysql_db}", $configs->mysql_user, $configs->mysql_pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        $response['message'] = "Connection Failed: " . $e->getMessage();
        echo json_encode($response);
        exit;
    }

    $sql = "SELECT id, firstname, username, password, dmc FROM accounts WHERE username = :username";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':username' => htmlspecialchars($_POST['username'])]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($results) > 0) {
        foreach ($results as $row) {
            if (password_verify($_POST['password'], $row['password'])) {
                session_regenerate_id();
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['user'] = $row['username'];
                $_SESSION['fname'] = $row['firstname'];
                $_SESSION['id'] = $row['id'];
                $_SESSION['color'] = $row['dmc'];
                $response['status'] = 'success';
                $response['message'] = 'authenticated';
                $response['redirect'] = '../app';
            } else {
                $response['message'] = "Invalid username or password";
            }
        }
    } else {
        $response['message'] = "Invalid username or password";
    }

    $conn = null;
}

echo json_encode($response);