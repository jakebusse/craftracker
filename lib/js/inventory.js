function openTab(evt, cityName) {
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
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

  function validateForm() {
    let colorNum = document.forms["inventoryAdd"]["num"].value;
    const validText = document.getElementById('form-validation');
    if(!validateDmcColor(colorNum)) {
        // validText.style.display = 'block';
        // validText.style.color = 'red';
        // validText.innerText = "Not a valid DMC number"
        validText.innerHTML = "<?php $_STATUS['messageDisplay']='block';$_STATUS['messageColor']='red';$_STATUS['message']='Invalid DMC Number';echo $_STATUS['message']; ?>";
        return false;
    }
    return true;
}