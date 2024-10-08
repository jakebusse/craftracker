<?php
    include './main.php';
    $configs = include('./config.php');

    $dmc_colors_json = file_get_contents('./lib/js/dmc_colors.json');
    $dmc_colors = json_decode($dmc_colors_json, true); 

    session_start();
    if(!$_SESSION['loggedin']) {
        header('Location: ./auth/login');
    }

    $response = ['status' => 'error', 'message' => ''];

    try {
        $conn = new PDO("mysql:host={$configs->mysql_host};dbname={$configs->mysql_db}", $configs->mysql_user, $configs->mysql_pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        $response['message'] = "Connection Failed: " . $e->getMessage();
        echo json_encode($response);
        exit;
    }

    $sql = "SELECT id, firstname, lastname, username, email, password, dmc FROM accounts WHERE id = :id LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':id' => $_SESSION['id']]);
    $userData = $stmt->fetch(PDO::FETCH_ASSOC);

    $conn = null;
?>

<?php
    template_header('MyAccount');
?>
    <link rel="stylesheet" type="text/css" href="./lib/css/auth.css">
    <link rel="stylesheet" type="text/css" href="./lib/css/account.css">

    <h1>My Account</h1>

    <div class="account-block">
        <h3>Edit Account Details</h3>
        <div id="account-form-validation"></div>
        <form id="accountEdit">
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" value="<?=$userData['firstname']?>" id="firstname" required />

            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" value="<?=$userData['lastname']?>" id="lastname" required />

            <label for="username">Username</label>
            <input type="text" name="username" value="<?=$userData['username']?>" id="username" required />

            <label for="email">Email</label>
            <input type="email" name="email" value="<?=$userData['email']?>" id="email" required />

            <label for="favDmc">Favorite DMC Color</label>
            <select name="favDmc" id="favDmc">
                <?php
                    foreach($dmc_colors as $key => $value) {
                        echo '<option value="'.(string)$value['number'].'" style="background-color:'.$value['hex'].';color:'.dmcTextColor($value['hex'],0.75).';"'. ((string)$value['number'] == $userData['dmc'] ? 'selected' : '') .'>'.$value['number'].'</option>';
                    }
                ?>
            </select>

            <input type="submit" value="Save">
        </form>
    </div>
    
    <div class="account-block">
        <h3>Change Password</h3>
        <div id="password-form-validation"></div>
        <form id="changePassword">
            <label for="cpassword">Current Password</label>
            <input type="password" name="cpassword" id="cpassword" required />
            
            <label for="nPassword1">New Password</label>
            <input type="password" name="npassword1" id="npassword1" required />

            <label for="npassword2">Confirm New Password</label>
            <input type="password" name="npassword2" id="npassword2" required />

            <input type="submit" value="Change Password" />
        </form>
    </div>

    <div class="account-block">
        <h3>Delete Account</h3>
        <div id="delete-form-validation"></div>
        <form id="deleteAccount">
            <label for="delusername">Username</label>
            <input type="text" name="delusername" id="delusername" required />
            
            <label for="delpassword">Password</label>
            <input type="password" name="delpassword" id="delpassword" required />

            <label for="delcheck"><input type="checkbox" id="delcheck" name="delcheck" value="confirmed" required /> I confirm that I would like to delete my account and understand the consequences of this action.</label>

            <input type="submit" value="Delete Account" />
        </form>
    </div>
    <script src='./lib/js/account.js'></script>

<?php
    template_footer('MyAccount')
?>