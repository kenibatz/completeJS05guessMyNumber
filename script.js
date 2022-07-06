'use strict';
/*
create a random secret number
the user enters a number in the input field and presses check
if the number is higher or lower than the secret number a point is subtracted from score
*/

let score = 20;
let highscore = 0;
let secretNumber;
let checkDisabled = false;

document.querySelector('.again').addEventListener('click', function () {
  console.log('you clicked Again');
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.check').disabled = false;
  checkDisabled = false;
});

document.querySelector('.check').addEventListener('click', function () {
  if (score > 1) {
    console.log('you clicked Check');
    // if (checkDisabled) {
    //   document.querySelector('.message').textContent = 'press Again.';
    // } else {
    const guessNumber = Number(document.querySelector('.guess').value);
    if (guessNumber) {
      console.log(`guessNumber: ${guessNumber}`);

      if (guessNumber === secretNumber) {
        document.querySelector('.message').textContent =
          'Correct! Press Again to play again.';
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.check').disabled = true;
        checkDisabled = true;
      } else {
        const hint = guessNumber > secretNumber ? 'Lower' : 'Higher';
        document.querySelector('.message').textContent = hint;
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent =
        'enter a number between 1 to 20';
    }
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent =
      'You lose! Press Again to play again';
    document.querySelector('.check').disabled = true;
    checkDisabled = true;
  }
});
