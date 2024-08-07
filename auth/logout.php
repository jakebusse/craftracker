<?php
    session_start();
    session_regenerate_id();
    $_SESSION['loggedin'] = FALSE;
    $_SESSION['user'] = "";
    $_SESSION['id'] = -1;
    $_SESSION['color'] = -1;
    header('Location: ./login');