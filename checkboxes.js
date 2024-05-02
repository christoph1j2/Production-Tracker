const checkboxes = document.getElementById('cb');

let prev = false;

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('click', () => {
      // Update flag based on current checkbox
      previousChecked = checkbox.checked;
  
      // Enable next checkbox only if current one is checked
      if (index < checkboxes.length - 1) {
        checkboxes[index + 1].disabled = !previousChecked;
      }
    });
  });
  
  // Initially disable all checkboxes except the first one
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].disabled = true;
  }