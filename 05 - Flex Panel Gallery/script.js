const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    const openedPanel = document.querySelector('.panel.open');
    if (openedPanel) {
        openedPanel.classList.remove('open', 'open-active');
    }
    if (openedPanel !== this) {
        this.classList.toggle('open');
    }
}

function toggleActive(event) {
    if (event.propertyName.includes('flex') && this.classList.contains('open')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
});