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

function closeResponseText() {
    document.getElementById('message-box').style.display = 'none';
}