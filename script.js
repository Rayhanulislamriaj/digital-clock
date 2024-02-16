let hours = document.getElementById('hours');
let mintues = document.getElementById('mintues');
let seconds = document.getElementById('seconds');

setInterval(() => {
    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours() <10?"0":"") + currentTime.getHours();
    mintues.innerHTML = (currentTime.getMinutes() <10? "0":"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds() <10? "0":"") + currentTime.getSeconds();
}, 1000);

