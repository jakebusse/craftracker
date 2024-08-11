function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

  document.getElementById('quickadd').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../actions/updateInventory.php', true);

    xhr.onload = function() {
        const response = JSON.parse(this.responseText);
        const validationDiv = document.getElementById('form-validation');

        if (response.status === 'success') {
            window.location.href = response.redirect; // Redirect on success
        } else {
            validationDiv.style.display = 'block';
            validationDiv.style.color = 'red';
            validationDiv.innerText = response.message;
        }
    };

    xhr.onerror = function() {
        console.error("Request failed due to a network error.");
    };

    xhr.send(formData);
});