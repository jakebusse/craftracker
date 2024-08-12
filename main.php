<?php
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);

    function hex2rgb($hex) {
        $hex = str_replace("#", "", $hex);
    
        if(strlen($hex) == 3) {
            $r = hexdec(substr($hex,0,1).substr($hex,0,1));
            $g = hexdec(substr($hex,1,1).substr($hex,1,1));
            $b = hexdec(substr($hex,2,1).substr($hex,2,1));
        } else {
            $r = hexdec(substr($hex,0,2));
            $g = hexdec(substr($hex,2,2));
            $b = hexdec(substr($hex,4,2));
        }
        $rgb = array($r, $g, $b);
        //return implode(",", $rgb); // returns the rgb values separated by commas
        return $rgb; // returns an array with the rgb values
    }

    function dmcTextColor($hex, $opacity) {
        $rgb = hex2rgb($hex);
        $brightness = (0.2126 * $rgb[0]) + (0.7152 * $rgb[1]) + (0.0722 * $rgb[2]);
        if($brightness >= 128) {
            return 'rgba(0,0,0,' . (string)$opacity . ')';
        } else {
            return 'rgba(255,255,255,' . (string)$opacity . ')';
        }
    }

    function template_header($title) {
        $current_file_name = basename($_SERVER['PHP_SELF']);
        echo '<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,minimum-scale=1">
        <title>Craftracker - ' . $title . '</title>
        <link href="./lib/css/main.css" rel="stylesheet" type="text/css">
        <link href="./lib/css/header.css" rel="stylesheet" type="text/css">
         <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
         <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
        <script src="../lib/js/dmc.js"></script>
        <script src="../lib/js/main.js"></script>
    </head>
    <body onload="setAccentColor([\'header\',\'footer\'],' . $_SESSION['color'] . ')">
        <header class="header" id="header">
            <div class="navlinks" id="navlinks">
                <button class="hamburger" onclick="openMobileMenu()"><i class="bx bx-menu"></i></button>
                <button class="close" onclick="closeMobileMenu()"><i class="bx bx-x"></i></button>
                <div class="header-left">
                    <a href="./app" id="' . ($current_file_name == 'app.php' ? 'active' : '') . '"><i class="bx bx-home"></i>Home</a>
                    <a href="./inventory" id="' . ($current_file_name == 'inventory.php' ? 'active' : '') . '"><i class="bx bx-box"></i>Inventory</a>
                </div>

                <div class="header-right">
                    <div class="dropdown">
                        <button onclick="showDropdown()" class="icon profilebtn' . ($current_file_name == 'account.php' ? ' active' : '').'"><i class="bx bxs-user"></i>'.$_SESSION['user'].'</button>
                        <div id="profileMenu" class="dropdown-menu">
                            <!--- <a href="#home"><i class="bx bx-window-alt"></i>My Page <i>(beta)</i></a> -->
                            <a href="./account"><i class="bx bxs-user-account"></i>My Account</a>
                            <a href="./auth/logout"><i class="bx bx-log-out"></i>Logout</a>
                        </div>
                    </div>
                    <!--- <a href="./auth/logout" class="icon" title="Logout"><i class="fa-solid fa-right-from-bracket"></i></a> -->
                </div>
            </div>
        </header>

        <div class="content">
                ';
    }

    function template_footer($title) {
        echo '        </div>
        <div class="footer" id="footer">
                <p>&copy; 2024 - Jake Busse</p>
                <p></p>
                <p></p>
        </div>
    </body>
</html>';
    }

?>