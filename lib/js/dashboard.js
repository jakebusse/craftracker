function closeResponseText() {
    document.getElementById('message-box').style.display = 'none';
}
  
  // QuickAdd Functionality
  document.getElementById('dmcquickadd').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('POST', './actions/dashboardFuncs.php', true);

    xhr.onload = function() {
        const response = JSON.parse(this.responseText);
        const validationDiv = document.getElementById('message-box');
        const validationText = document.getElementById('form-validation');

        if (response.status === 'success') {
            validationDiv.classList.remove('fail');
            validationDiv.classList.remove('warning');
            validationDiv.classList.add('success');
            document.getElementById('quickaddnum').value = '';
        } else if (response.status === 'failure') {
            validationDiv.classList.remove('success');
            validationDiv.classList.remove('warning');
            validationDiv.classList.add('fail');
        } else {
            validationDiv.classList.remove('fail');
            validationDiv.classList.remove('success');
            validationDiv.classList.add('warning');
            document.getElementById('quickaddnum').value = '';
        }
        validationText.innerText = response.message;
        validationDiv.style.display = 'flex';
    };

    xhr.onerror = function() {
        console.error("Request failed due to a network error.");
    };

    xhr.send(formData);
});

// Lookup Functionality
document.getElementById('dmclookup').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('POST', './actions/dashboardFuncs.php', true);

    xhr.onload = function() {
        const response = JSON.parse(this.responseText);
        const validationDiv = document.getElementById('message-box');
        const validationText = document.getElementById('form-validation');

        if (response.status === 'success') {
            validationDiv.classList.remove('fail');
            validationDiv.classList.remove('warning');
            validationDiv.classList.remove('success');
            validationDiv.style.backgroundColor = colors[response.num].hex;
            validationDiv.style.color = getTextColor(colors[response.num], 0.5);
            document.getElementById('quickaddnum').value = '';
        } else if (response.status === 'failure') {
            validationDiv.classList.remove('success');
            validationDiv.classList.remove('warning');
            validationDiv.classList.add('fail');
        } else {
            validationDiv.classList.remove('fail');
            validationDiv.classList.remove('success');
            validationDiv.classList.add('warning');
            document.getElementById('quickaddnum').value = '';
        }
        validationText.innerText = response.message;
        validationDiv.style.display = 'flex';
    };

    xhr.onerror = function() {
        console.error("Request failed due to a network error.");
    };

    xhr.send(formData);
});

// Lookup Functionality
document.getElementById('dmcpreview').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const form = document.forms['dmcpreview'];
    const num = form['num'].value;
    const validationDiv = document.getElementById('message-box');
    const validationText = document.getElementById('form-validation');

    validationDiv.classList.remove('success');
    validationDiv.classList.remove('warning');

    if(validateDmcColor(num)) {
        validationDiv.style.backgroundColor = colors[num].hex;
        validationDiv.style.color = getTextColor(colors[num], 0.5)
        validationText.innerText = 'This is a preview of DMC ' + num;
    } else {
        validationDiv.classList.add('fail');
        validationText.innerText = num + ' is not a valid DMC number';
    }

    validationDiv.style.display = 'flex';
});