const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

const handleChange = e => {
  //check if the shift key is down and if there is a checkbox being checked
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    //looping over each checkbox

    checkboxes.forEach(checkbox => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween === true) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = e.target;
};

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", handleChange);
});
