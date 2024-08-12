// Account Info
document.getElementById('accountEdit').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    console.log("Form data being sent:", formData); // Log form data for debugging
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', './actions/editAccount.php', true);
    
    xhr.onload = function() {
        console.log("AJAX request completed with status:", xhr.status);
        console.log("Response received:", xhr.responseText);

        if (xhr.status === 200) { // Check if the request was successful
            const response = JSON.parse(xhr.responseText);
            const validationDiv = document.getElementById('account-form-validation');

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

// Change Password
document.getElementById('changePassword').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    console.log("Form data being sent:", formData); // Log form data for debugging
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', './actions/changePassword.php', true);
    
    xhr.onload = function() {
        console.log("AJAX request completed with status:", xhr.status);
        console.log("Response received:", xhr.responseText);

        if (xhr.status === 200) { // Check if the request was successful
            const response = JSON.parse(xhr.responseText);
            const validationDiv = document.getElementById('password-form-validation');

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

// Delete Account
document.getElementById('deleteAccount').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    console.log("Form data being sent:", formData); // Log form data for debugging
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', './actions/deleteAccount.php', true);
    
    xhr.onload = function() {
        console.log("AJAX request completed with status:", xhr.status);
        console.log("Response received:", xhr.responseText);

        if (xhr.status === 200) { // Check if the request was successful
            const response = JSON.parse(xhr.responseText);
            const validationDiv = document.getElementById('delete-form-validation');

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