<?php
    if($_SESSION['loggedin'] === FALSE) {
        header('Location: ./auth/login');
    } else {
        header('Location: ../home');
    }