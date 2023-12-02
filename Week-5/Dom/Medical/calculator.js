function updateScore() {
    const selectedValues = {
      'property1': getSelectedValue('property1'),
      'property2': getSelectedValue('property2'),
      'property3': getSelectedValue('property3')
    };
  
    // Check if one button from each property is selected
    if (selectedValues.property1 && selectedValues.property2 && selectedValues.property3) {
      // Hide the warning label
      document.getElementById('warning').style.display = 'none';
  
      // Calculate the vulnerability score
      const sum = selectedValues.property1 + selectedValues.property2 + selectedValues.property3;
      const score = Math.min(10, sum);
      
      // Display the score rounded to the tenths decimal place
      const roundedScore = Math.round(score * 10) / 10;
      document.getElementById('score').textContent = roundedScore.toFixed(1);
    } else {
      // Show the warning label
      document.getElementById('warning').style.display = 'block';
      document.getElementById('score').textContent = ''; // Clear the score
    }
  }
  
  function getSelectedValue(property) {
    const radios = document.getElementsByName(property);
    for (const radio of radios) {
      if (radio.checked) {
        return parseFloat(radio.value);
      }
    }
    return 0;
  }
  
  // Add event listeners to the radio buttons for the properties
  const propertyRadios = document.querySelectorAll('input[type="radio"]');
  propertyRadios.forEach(radio => {
    radio.addEventListener('change', updateScore);
  });
  