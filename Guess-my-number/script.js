'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1);
console.log(secretNumber)
let score = 0;
let highScore;

const fetchHighScore = function () {
    highScore = localStorage.getItem('highScore');
    document.querySelector('.highscore').textContent = highScore;

}

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage('⛔️ No number!');
    }
    else if (guess === secretNumber) {
        score = score + 1;
        if (highScore < score) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            document.querySelector('.highscore').textContent = highScore;
        }
        //document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        setTimeout(function () {
            secretNumber = Math.trunc((Math.random() * 20) + 1);
            console.log(secretNumber)
        });
    }
    else if (guess !== secretNumber) {
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';

        if (score > 1) {
            score = score - 1;
            //document.querySelector('.message').textContent = '🎉 Correct Number!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        }
        else {
            score = 0;
            //document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
        }
    }

    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
    console.log("again");
    score = 0;
    highScore = 0;
    localStorage.setItem('highScore', highScore);
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');

    document.querySelector('.guess').value = '';
});
