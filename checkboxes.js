function checklist(checklistContainerId,processContainerId,stationContainerId) {
  const checkboxes = Array.from(document.getElementById(checklistContainerId).querySelectorAll('input[type="checkbox"]'));

  function getStationColor(allCheckboxes) {
    const allChecked = allCheckboxes.every(checkbox => checkbox.checked && checkbox.disabled !== true);
    const allUnchecked = allCheckboxes.every(checkbox => !checkbox.checked);
    
    if (allUnchecked) {
      console.log("red");
      return "red"; // All checkboxes unchecked
    } else if (allChecked) {
      console.log("green");
      return "green"; // All enabled checkboxes are checked
    } else {
      console.log("orange");
      return "orange"; // Some checkboxes checked, but not all or some are disabled
    }

  }


  
  let previous = false;
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      // In order
      previous = checkbox.checked;

      if (index < checkboxes.length - 1) {
        checkboxes[index + 1].disabled = false;
      }

      // Checkmark
      const processLabel = document.getElementById(processContainerId).querySelector(`#p${index + 1}`);

      const checkmark = processLabel.querySelector('.checkmark');
      checkmark.style.display = checkbox.checked ? 'inline' : 'none';

      // Station Color
      const station = document.getElementById(stationContainerId)
      const allCheckboxes = stationContainer.querySelectorAll('input[type="checkbox"]');
      const stationColor = getStationColor(allCheckboxes);
      station.style.backgroundColor = stationColor;
        
    });
  });

  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].disabled = true;
  }
}
