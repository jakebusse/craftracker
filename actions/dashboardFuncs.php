<?php
    $configs = include('../config.php');
    $main = include('../main.php');
    session_start();

    $dmc_colors_json = file_get_contents('../lib/js/dmc_colors.json');
    $dmc_colors = json_decode($dmc_colors_json, true);

    $response = ['status' => 'error', 'message' => ''];

    if($_SERVER['REQUEST_METHOD'] == "POST") {
        try {
            $conn = new PDO("mysql:host={$configs->mysql_host};dbname={$configs->mysql_db}", $configs->mysql_user, $configs->mysql_pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            $response['message'] = ("Connection Failed: " . $e->getMessage());
            echo json_encode($response);
            exit;
        }

        if($_POST['formid'] == 'dmcquickadd') {
            if(isset($dmc_colors[$_POST['num']])) {
                $sql = "INSERT INTO inventory (mfr, num, qty, owner) VALUES ('dmc', :num, 1, :id)";
                $stmt = $conn->prepare($sql);

                try {
                    $stmt->execute([
                        ':num' => htmlspecialchars($_POST['num']),
                        ':id' => $_SESSION['id']
                    ]);
                    $response['status'] = 'success';
                    $response['message'] = 'DMC '.htmlspecialchars($_POST['num']).' added to inventory.';
                } catch(PDOException $e) {
                    if($e->errorInfo[1] == 1062) {
                        $sql = "UPDATE inventory SET qty = qty + 1 WHERE mfr = 'dmc' and num = :num and owner = :id";
                        $stmt = $conn->prepare($sql);

                        try {
                            $stmt->execute([
                                ':num' => htmlspecialchars($_POST['num']),
                                ':id' => $_SESSION['id']
                            ]);
                            $response['status'] = 'warning';
                            $response['message'] = 'DMC '.htmlspecialchars($_POST['num']).' already existed. Added 1 to quantity';
                        } catch(PDOException $e) {
                            $response['status'] = 'failure';
                            $response['message'] = 'Internal Error: '.$e->getMessage();
                            echo json_encode($response);
                            exit;
                        }
                    } else {
                        $response['status'] = 'failure';
                        $response['message'] = 'Could not add DMC '.htmlspecialchars($_POST['num']).': '.$e->getMessage();
                        echo json_encode($response);
                        exit;
                    }
                }
            } else {
                $response['status'] = 'failure';
                $response['message'] = htmlspecialchars($_POST['num']).' is not a valid DMC number.';
                echo json_encode($response);
                exit;
            }
        } elseif ($_POST['formid'] == 'dmclookup') {
            if(isset($dmc_colors[$_POST['num']])) {
                $sql = "SELECT num, qty FROM inventory WHERE mfr = 'dmc' and num = :num and owner = :id";
                $stmt = $conn->prepare($sql);

                try {
                    $stmt->execute([
                        ':num' => htmlspecialchars($_POST['num']),
                        ':id' => $_SESSION['id']
                    ]);
                    $result = $stmt->fetch(PDO::FETCH_ASSOC);
                    // if(count($results) > 0) {
                    if(isset($result['qty'])) {
                        $response['status'] = 'success';
                        $response['num'] = $result['num'];
                        $response['message'] = 'You have quantity '.$result['qty'].' of DMC '.$result['num'];
                    } else {
                        $response['status'] = 'warning';
                        $response['message'] = 'You do not have DMC '.$_POST['num'].' in your inventory.';
                    }
                } catch(PDOException $e) {
                    $response['status'] = 'failure';
                    $response['message'] = 'Could not add DMC '.htmlspecialchars($_POST['num']).': '.$e->getMessage();
                    echo json_encode($response);
                    exit;
                }
            } else {
                $response['status'] = 'failure';
                $response['message'] = htmlspecialchars($_POST['num']).' is not a valid DMC number.';
                echo json_encode($response);
                exit;
            }
        }
    }
$conn = null;
echo json_encode($response);