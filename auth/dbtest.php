<?php
    $configs = include('config.php');
    // $mysql_host = "localhost";
    // $mysql_user = "craftmaster";
    // $mysql_pass = "CrewelWorld20!";
    // $mysql_db = "craftracker";

    $conn = new mysqli($mysql_host, $mysql_user, $mysql_pass, $mysql_db);
    if($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    $sql = "SELECT username, password FROM accounts";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "Username: " . $row["username"]. " - Password: " . $row["password"]."<br>";
        }
    } else {
        echo "0 results";
    }
      
    $conn->close();
?>