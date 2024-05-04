function checklist(checklistContainerId,processContainerId,stationContainerId) {
  const checkboxes = Array.from(document.getElementById(checklistContainerId).querySelectorAll('input[type="checkbox"]'));

  function getStationColor(stationContainerId) {
    let c1,c2,c3,c4;
    if (stationContainerId == 's1'){
      c1 = document.getElementById("d1p1"); c2 = document.getElementById("d1p2"); c3 = document.getElementById("d1p3"); c4 = document.getElementById("d1p4");
      if(c1.checked && c2.checked && c3.checked && c4.checked) { return 'green' }
      else if(c1.checked || c2.checked || c3.checked || c4.checked) { return 'orange' }
      else if(!(c1.checked && c2.checked && c3.checked && c4.checked)) { return 'red' }
    }
    if (stationContainerId == 's2'){
      c1 = document.getElementById("d2p1"); c2 = document.getElementById("d2p2"); c3 = document.getElementById("d2p3"); c4 = document.getElementById("d2p4");
      if(c1.checked && c2.checked && c3.checked && c4.checked) { return 'green' }
      else if(c1.checked || c2.checked || c3.checked || c4.checked) { return 'orange' }
      else if(!(c1.checked && c2.checked && c3.checked && c4.checked)) { return 'red' }
    }
    if (stationContainerId == 's3'){
      c1 = document.getElementById("d3p1"); c2 = document.getElementById("d3p2"); c3 = document.getElementById("d3p3"); c4 = document.getElementById("d3p4");
      if(c1.checked && c2.checked && c3.checked && c4.checked) { return 'green' }
      else if(c1.checked || c2.checked || c3.checked || c4.checked) { return 'orange' }
      else if(!(c1.checked && c2.checked && c3.checked && c4.checked)) { return 'red' }
    }
    if (stationContainerId == 's4'){
      c1 = document.getElementById("d4p1"); c2 = document.getElementById("d4p2"); c3 = document.getElementById("d4p3"); c4 = document.getElementById("d4p4");
      if(c1.checked && c2.checked && c3.checked && c4.checked) { return 'green' }
      else if(c1.checked || c2.checked || c3.checked || c4.checked) { return 'orange' }
      else if(!(c1.checked && c2.checked && c3.checked && c4.checked)) { return 'red' }
    }
    if (stationContainerId == 's5'){
      c1 = document.getElementById("d5p1"); c2 = document.getElementById("d5p2"); c3 = document.getElementById("d5p3"); c4 = document.getElementById("d5p4");
      if(c1.checked && c2.checked && c3.checked && c4.checked) { return 'green' }
      else if(c1.checked || c2.checked || c3.checked || c4.checked) { return 'orange' }
      else if(!(c1.checked && c2.checked && c3.checked && c4.checked)) { return 'red' }
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
      const stationColor = getStationColor(stationContainerId);
      station.style.backgroundColor = stationColor;
        
    });
  });

  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].disabled = true;
  }
}
