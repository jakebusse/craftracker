<?php
    include 'main.php';

    session_start();
    if(!$_SESSION['loggedin']) {
        header('Location: ./auth/login');
    }
?>

<?=template_header('Home')?>
<link rel="stylesheet" type="text/css" href="./lib/css/dashboard.css">

<div class="dashboard-content">
    <h1>Welcome Back, <?php echo $_SESSION['fname'] ?></h1>
    <div id="message-box" class="response-text warning">
        <p id="form-validation"></p>
        <button class="response-text-close" id="response-text-close" onclick="closeResponseText()"><i class="bx bx-x-circle"></i></button>
    </div>
    <div class="widgets">
        <div class="widget" id="quickadd">
            <div class="title">DMC QuickAdd</div>
            <form id="dmcquickadd">
                <fieldset>
                    <input type="text" id="formid" name="formid" value="dmcquickadd" hidden />
                    <label for="num"><i class="bx bxs-plus-circle"></i></label>
                    <input type="text" class="text" id="quickaddnum" name="num" <?php if(isset($_GET['quickadd'])) echo 'autofocus'; ?> />
                    <input type="submit" class="submit" id="quickaddsubmit" value="Add" />
                </fieldset>
            </form>
        </div>
    </div>
</div>

<script src="./lib/js/dashboard.js"></script>

<?php
    template_footer('Home')
?>