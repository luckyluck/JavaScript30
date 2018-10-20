function playSound(event) {
    const code = event.which || event.keyCode || 0;
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') {
        return;
    }

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

// Adding keydown listener
window.addEventListener('keydown', playSound);

// function getCode(event) {
//     return event.key || event.keyIdentifier || event.keyCode;
// }