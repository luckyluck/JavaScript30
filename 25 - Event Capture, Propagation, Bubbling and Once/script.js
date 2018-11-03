const divs = document.querySelectorAll('div');

function logText(event) {
    // event.stopPropagation(); // stopping bubbling up
    console.log(this.classList.value);
}

// capture:
// --- false - run from child up to parents (default value)
// --- true - run from parent down to children
// once:
// --- false - default value
// --- true - will unbind listener after first invocation
divs.forEach(
    div => div.addEventListener('click', logText, { capture: false, once: false })
);