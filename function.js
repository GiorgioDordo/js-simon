// todo function for 5 random numbers always differents
function getNewRandomNumbers (min, max) {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (!randomNumber);

    return randomNumber;
}

let randomNumber = [];

for (i = 1; i < 6; i++) {
    const randomNumber = getNewRandomNumbers(1, 100);
    console.log(randomNumber);
} 