// Works in Chrome and Firefox
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// Creating new instance
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', event => {
    const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    // If you make a pause,
    // you should probably create a new container for the next portion of recognized content
    if (event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    p.textContent = transcript;
});

// We should start recognition after each pause
// Other way it will just stop recognizing forever (till the next page load)
recognition.addEventListener('end', recognition.start);

// Starting recognition first time
recognition.start();