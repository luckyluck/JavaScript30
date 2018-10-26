const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(event) {
    // Check if they had the Shift key down
    // And check that they are checking it
    let inBetween = false;
    if (event.shiftKey) {
        // Loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            // We'll check/uncheck all checkboxes between
            if (inBetween) {
                checkbox.checked = this.checked;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
});