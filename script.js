const timerDisplay = document.getElementById('timer');
const gameDisplay = document.getElementById('choose-nb');
const numbersRandom = document.getElementById('numbers-display');

let seconds = 30;
timerDisplay.innerText = 30;

const countdown = setInterval(() => {
    --seconds;
    if (seconds === 0) {
        clearInterval(countdown)
        gameDisplay.classList.toggle('d-none');
        timerDisplay.classList.add('d-none');
        numbersRandom.classList.add('d-none');
    } else {
        timerDisplay.innerText = seconds;
    }
}, 1000);

// setTimeout(() => {
//     clearInterval(countdown);
// }, 30000)