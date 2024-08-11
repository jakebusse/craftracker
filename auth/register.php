<?php
    $main = include('../main.php');
    $dmc_colors_json = file_get_contents('../lib/js/dmc_colors.json');
    $dmc_colors = json_decode($dmc_colors_json, true); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Craftracker - Register</title>
    <link rel="stylesheet" href="../lib/css/auth.css">
    <script src="../lib/js/dmc_colors.json"></script>
    <script src="../lib/js/dmc.js"></script>
</head>
<body onload="setRanAuthBg()">
    <div id="page">
        <div class="form-container">
            <h1>Welcome to Craftracker!</h1>
            <div id="form-validation"></div>
            <form id="registerForm">
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" placeholder="Betsy" id="firstname" required>
                
                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" placeholder="Devonshire" id="lastname" required>
                
                <label for="username">Username</label>
                <input type="text" name="username" placeholder="crewelworld" id="username" required>
                
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="betsy.devonshire@crewelworld.com" id="email" required>
                
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="••••••••••••••" id="password" required />
                
                <label for="favDmc">Favorite DMC Color</label>
                <select name="favDmc" id="favDmc">
                    <option selected value="-1"></option>
                    <?php
                        foreach($dmc_colors as $key => $value) {
                            echo '<option value="'.(string)$value['number'].'" style="background-color:'.$value['hex'].';color:'.dmcTextColor($value['hex'],0.75).';">'.$value['number'].'</option>';
                        }
                    ?>
                </select>

                <input type="submit" value="Register">
            </form>
            <h3>Already a member? <a href="./login" class="toggle">Login here</a></h3>
        </div>
        <p id="dmc"></p>
    </div>

    <script>
        document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    const formData = new FormData(this);
    console.log("Form data being sent:", formData); // Log form data for debugging
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../actions/register.php', true);
    
    xhr.onload = function() {
        console.log("AJAX request completed with status:", xhr.status);
        console.log("Response received:", xhr.responseText);

        if (xhr.status === 200) { // Check if the request was successful
            const response = JSON.parse(xhr.responseText);
            const validationDiv = document.getElementById('form-validation');

            if(response.status === 'success') {
                window.location.href = response.redirect; // Redirect on success
            } else {
                validationDiv.style.display = 'block';
                validationDiv.style.color = 'red';
                validationDiv.innerText = response.message;
            }
        } else {
            console.error("Request failed with status:", xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error("Request failed due to a network error.");
    };

    xhr.send(formData);
});
    </script>
</body>
</html>
