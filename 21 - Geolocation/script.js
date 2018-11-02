const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    speed.textContent = data.coords.speed || 0;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, error => {
    console.log(error);
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
});