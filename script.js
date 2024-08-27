const timerDisplay = document.getElementById('timer');
const gameDisplay = document.getElementById('choose-nb');
const numbersRandom = document.getElementById('numbers-display');

let seconds = 5;
timerDisplay.innerText = 5;

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


//  function random number
function getNewRandomNumbers (min, max) {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

let newNumber = [0];

// create random numbers and print in the dom
for (i = 1; i < 6; i++) {
    newNumber = getNewRandomNumbers(1, 100);
    console.log(newNumber);
    const para = document.createElement('p');
    const node = document.createTextNode(newNumber);
    para.appendChild(node);
    numbersRandom.appendChild(para);
    para.classList.add('r-n', 'col-2', 'h1');
}

// get users inputs

const play = document.getElementById('play');
const reset = document.getElementById('reset');

const inputs = document.querySelector('input');

function getUserNumbers() {
    for (let i = 0; i < inputs.length; i++) {
        let value = parseInt(inputs[i].value); 
        userNumbers.push(value);
    }

    console.log('userNumbers: ', userNumbers); 
}

play.addEventListener('submit o click non mi ricordo', getUserNumbers);
let value = parseInt(inputs[i].value);
