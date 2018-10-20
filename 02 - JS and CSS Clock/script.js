function setDate(hour, min, second) {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = seconds / 60 * 360 + 90;

    second.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minDegrees = minutes / 60 * 360 + 90;
    min.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegree = hours / 12 * 360 + 90;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

window.onload = () => {
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    // setDate(secondHand);
    setInterval(() => {
        setDate(hourHand, minHand, secondHand);
    }, 1000);
};