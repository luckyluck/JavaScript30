const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
let countdown;

function timer(seconds) {
    // clear any existing interval
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    // Displaying time first time
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Check if we should stop it
        if (secondsLeft <= 0) {
            clearInterval(countdown);
        }
        // Updating timer
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = ('0' + (seconds % 60)).slice(-2);
    const display = `${minutes}:${remainderSeconds}`;

    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = ('0' + end.getMinutes()).slice(-2);

    endTime.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time, 10);
    timer(seconds);
}

buttons.forEach(button => {
    button.addEventListener('click', startTimer);
});
document.customForm.addEventListener('submit', function (event) {
    event.preventDefault();
    timer(this.minutes.value * 60);
    this.reset();
});