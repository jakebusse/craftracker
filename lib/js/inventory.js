// Tab Functionality
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


  // QuickAdd Functionality
//   document.getElementById('quickadd').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent the default form submission

//     const formData = new FormData(this);
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '../actions/updateInventory.php', true);

//     xhr.onload = function() {
//         const response = JSON.parse(this.responseText);
//         const validationDiv = document.getElementById('form-validation');

//         if (response.status === 'success') {
//             window.location.href = response.redirect; // Redirect on success
//         } else {
//             validationDiv.style.display = 'block';
//             validationDiv.style.color = 'red';
//             validationDiv.innerText = response.message;
//         }
//     };

//     xhr.onerror = function() {
//         console.error("Request failed due to a network error.");
//     };

//     xhr.send(formData);
// });

// Row-Control Buttons
document.addEventListener('DOMContentLoaded', function() {
  const addButtons = document.querySelectorAll('.btn-add');
  const subButtons = document.querySelectorAll('.btn-sub');
  const delButtons = document.querySelectorAll('.btn-del');

  addButtons.forEach(button => {
      button.addEventListener('click', function() {
          // console.log('add ' + this.dataset.num);
          updateInventory(this.dataset.mfr, this.dataset.num, this.dataset.qty, 'add');
      });
  });

  subButtons.forEach(button => {
      button.addEventListener('click', function() {
          // console.log('subtract ' + this.dataset.num);
          updateInventory(this.dataset.mfr, this.dataset.num, this.dataset.qty, 'subtract');
      });
  });

  delButtons.forEach(button => {
      button.addEventListener('click', function() {
          // console.log('delete ' + this.dataset.num);
          updateInventory(this.dataset.mfr, this.dataset.num, this.dataset.qty, 'delete');
      })
  })

  function updateInventory(mfr, num, qty, action) {
      fetch('./actions/updateInventory.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `formid=rowctrl&mfr=${mfr}&num=${num}&qty=${qty}&action=${action}`,
      })
      .then(response => response.json())
      .then(data => {
          if(data.status === 'success') {
              window.location.reload();
          } else {
              alert('Error: ' + data.message);
          }
      })
      .catch(error => console.error('Error:', error));
  }
});

// Checkboxes
document.addEventListener('DOMContentLoaded', function() {
  const headerCheckbox = document.querySelector('.tableheader .td-check input[type="checkbox"]');
  const checkboxes = document.querySelectorAll('.td-check input[type="checkbox"]');
  const rows = document.querySelectorAll('.inventory-table tr:not(.tableheader)');

  // Handle individual row checkbox click
  checkboxes.forEach((checkbox, index) => {
      if (index === 0) return; // Skip the header checkbox

      checkbox.addEventListener('change', function() {
          if (this.checked) {
              rows[index - 1].classList.add('selected');
          } else {
              rows[index - 1].classList.remove('selected');
          }
          updateHeaderCheckboxState();
      });
  });

  // Handle header checkbox click
  headerCheckbox.addEventListener('change', function() {
      const isChecked = this.checked;
      checkboxes.forEach((checkbox, index) => {
          checkbox.checked = isChecked;
          if (index > 0) {
              if (isChecked) {
                  rows[index - 1].classList.add('selected');
              } else {
                  rows[index - 1].classList.remove('selected');
              }
          }
      });
      updateHeaderCheckboxState();
  });

  // Update header checkbox state (checked, unchecked, indeterminate)
  function updateHeaderCheckboxState() {
      const totalCheckboxes = checkboxes.length - 1; // Exclude header checkbox
      const checkedCheckboxes = document.querySelectorAll('.td-check input[type="checkbox"]:checked').length - 1; // Exclude header checkbox

      if (checkedCheckboxes === totalCheckboxes) {
          headerCheckbox.checked = true;
          headerCheckbox.indeterminate = false;
      } else if (checkedCheckboxes > 0) {
          headerCheckbox.checked = false;
          headerCheckbox.indeterminate = true;
      } else {
          headerCheckbox.checked = false;
          headerCheckbox.indeterminate = false;
      }
  }
});

function openMobileFiltersMenu() {
    if(document.getElementById('filters-container').classList.contains('mobile')) {
        document.getElementById('filters-container').classList.remove('mobile');
    } else {
        document.getElementById('filters-container').classList.add('mobile');
    }
}