<?php
    session_start();

    function template_header($title) {
        $current_file_name = basename($_SERVER['PHP_SELF']);
        echo '<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,minimum-scale=1">
        <title>Craftracker - ' . $title . '</title>
        <link href="./lib/css/app.css" rel="stylesheet" type="text/css">
        <script src="https://kit.fontawesome.com/99974eb84c.js" crossorigin="anonymous"></script>
        <script src="../lib/js/dmc_colors.js"></script>
        <script src="../lib/js/dmc_paint.js"></script>
    </head>
    <body onload="ran_elem_col([\'header\',\'footer\'],' . $_SESSION['color'] . ')">
        <header class="header" id="header">
            <div class="header-left">
                <a href="./home" class="' . ($current_file_name == 'home.php' ? 'active' : '') . '">Home</a>
                <a href="./inventory" class="' . ($current_file_name == 'inventory.php' ? 'active' : '') . '">Inventory</a>
            </div>

            <div class="header-right">
                <a href="" class="icon"><i class="fa-solid fa-user"></i>&nbsp;&nbsp;' . $_SESSION['user'] . '</a>
                <a href="./auth/logout" class="icon" title="Logout"><i class="fa-solid fa-right-from-bracket"></i></a>
            </div>
        </header>

        <div class="content">
                ';
    }

    function template_footer($title) {
        echo '        </div>
        <div class="footer" id="footer">
                <p>(c) 2024</p>
                <p>1</p>
                <p>2</p>
        </div>
    </body>
</html>';
    }

?>