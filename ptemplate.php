<?php
    include 'main.php';

    session_start();
    if(!$_SESSION['loggedin']) {
        header('Location: ./auth/login');
    }
?>

<?=template_header('Home')?>

<p>hello world :)</p>

<?php
    template_footer('Home')
?>