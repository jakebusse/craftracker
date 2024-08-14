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

        if($_POST['formid'] == "dmcquickadd") {
            if(isset($dmc_colors[$_POST['quickadd']]) && $_POST['mfr'] == 'dmc') {
                    $sql = "INSERT INTO inventory (mfr, num, qty, owner) VALUES (:mfr, :num, :qty, :id)";
                    $stmt = $conn->prepare($sql);

                    try {
                        $stmt->execute([
                            ':mfr' => strtoupper($_POST['mfr']),
                            ':num' => htmlspecialchars($_POST['quickadd']),
                            ':qty' => 1,
                            ':id' => $_SESSION['id'],
                        ]);
                        $response['status'] = 'success';
                        $response['message'] = 'DMC '.htmlspecialchars($_POST['quickadd']).' added to inventory.';
                        $response['redirect'] = './inventory.php?filter='.$_POST['mfr'].'&quickadd';
                    } catch(PDOException $e) {
                        if($e->errorInfo[1] == 1062) {
                            $sql = "UPDATE inventory SET qty = qty + 1 WHERE mfr = :mfr and num = :num and owner = :id";
                            $stmt = $conn->prepare($sql);

                            try {
                                $stmt->execute([
                                    ':mfr' => strtoupper($_POST['mfr']),
                                    ':num' => htmlspecialchars($_POST['num']),
                                    ':id' => $_SESSION['id']
                                ]);
                                $response['status'] = 'warning';
                                $response['message'] = 'DMC '.htmlspecialchars($_POST['num']).' already existed. Added 1 to quantity.';
                                $response['redirect'] = './inventory.php?filter='.$_POST['mfr'].'&quickadd';
                            } catch(PDOException $e) {
                                $response['status'] = 'failure';
                                $response['message'] = 'Internal Error: '.$e->getMessage();
                                echo json_encode($response);
                                exit;
                            }
                        } else {
                            $response['status'] = 'failure';
                            $response['message'] = "Could not add DMC ".htmlspecialchars($_POST['num']).": ".$e->getMessage();
                            echo json_encode($response);
                            exit;
                        }
                    }
                } elseif ($_POST['mfr'] == 'anchor') {
                    $response['status'] = 'failure';
                    $response['message'] = 'Anchor not yet supported';
                    echo json_encode($response);
                    exit;
                } elseif ($_POST['mfr'] != 'dmc' && $_POST['mfr'] != 'anchor') {
                    $response['status'] = 'failure';
                    $response['message'] = 'Please filter by manufacturer before adding';
                    echo json_encode($response);
                    exit;
                } else {
                $response['status'] = 'failure';
                $response['message'] = 'Invalid DMC Number';
                echo json_encode($response);
                exit;
                }
        } elseif ($_POST['formid'] == "rowctrl") {
            if($_POST['action'] == 'add') {
                $sql = "UPDATE inventory SET qty = qty + 1 WHERE mfr = :mfr and num = :num and owner = :id";
                $stmt = $conn->prepare($sql);
                try {
                    $stmt->execute([
                        ':mfr' => strtoupper($_POST['mfr']),
                        ':num' => htmlspecialchars($_POST['num']),
                        ':id' => $_SESSION['id']
                    ]);

                    $response['status'] = 'success';
                    $response['message'] = 'Inventory added';
                } catch(PDOException $e) {
                    $response['status'] = 'failure';
                    $response['message'] = "Could not add inventory: " . $e->getMessage();
                }
            } elseif($_POST['action'] == 'subtract' && $_POST['qty'] > 1) {
                $sql = "UPDATE inventory SET qty = qty - 1 WHERE mfr = :mfr and num = :num and owner = :id";
                $stmt = $conn->prepare($sql);
                try {
                    $stmt->execute([
                        ':mfr' => strtoupper($_POST['mfr']),
                        ':num' => htmlspecialchars($_POST['num']),
                        ':id' => $_SESSION['id']
                    ]);

                    $response['status'] = 'success';
                    $response['message'] = "Inventory subtracted";
                } catch(PDOException $e) {
                    $response['status'] = 'failure';
                    $response['message'] = "Could not subtract inventory: " . $e->getMessage();
                }
            } elseif($_POST['action'] == 'delete' || ($_POST['action'] == 'subtract' && $_POST['qty'] <= 1)) {
                $sql = "DELETE FROM inventory WHERE mfr = :mfr and num = :num and owner = :id";
                $stmt = $conn->prepare($sql);
                try {
                    $stmt->execute([
                        ':mfr' => strtoupper($_POST['mfr']),
                        ':num' => htmlspecialchars($_POST['num']),
                        ':id' => $_SESSION['id']
                    ]);

                    $response['status'] = 'success';
                    $response['message'] = "Inventory deleted";
                } catch(PDOException $e) {
                    $response['status'] = 'failure';
                    $response['message'] = "Could not delete inventory: " . $e->getMessage();
                }
            } else {
                $response['status'] = 'failure';
                $response['message'] = "Invalid action";
            }
        }
    }
    $conn = null;
    echo json_encode($response);