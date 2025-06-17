let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let remaining = document.querySelector('.lastResult');
let guessSlot = document.querySelector('.guesses');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let playGames = true;
let numGuess = 1;
let preGuess = [];

if (playGames) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validGuess(guess);
    });
}

function validGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid Number');
    } else if (guess > 100) {
        alert('Please Enter a Number lower than 100');
    } else if (guess < 1) {
        alert('Please Enter a Number higher than 0');
    } else {
        preGuess.push(guess);
        if (numGuess === 11) {
            displayGuesses(guess);
            displayMessage(`Game Over. The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Win the Game. Number is ${randomNumber}`);
        endGame();
    } else if (guess > randomNumber) {
        displayMessage(`Your guess is too high`);
    } else {
        displayMessage(`Your guess is too low`);
    }
}

function displayGuesses(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} - `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function startGame() {
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        numGuess = 1;
        preGuess = [];
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGames = true;
    });
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.append(p);
    playGames = false;
    startGame();
}











// let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

// let submit = document.querySelector('#subt');
// let userInput = document.querySelector('#guessField');
// let remaning = document.querySelector('.lastResult');
// let guessSlot = document.querySelector('.guesses');
// let lowOrHi = document.querySelector('.lowOrHi');
// let starOver = document.querySelector('.resultParas');
// const p = document.createElement('p')

// let playGames = true;
// let numGuess = 1;
// let preGuess = [];

// if (playGames) {
//   submit.addEventListener('click', function (a) {
//     a.preventDefault();
//     let guesses = parseInt(userInput.value);
//     validGuess(guesses);
//   });
// }

// function validGuess(guesses) {
//   if (isNaN(guesses)){
//     alert('Please Enter a valid Number')
//   }else if( guesses > 100 ){
//     alert('Please Enter a  Number lower than 100')
//   }else if(guesses < 1) {
//     alert('Please Enter a  Number higher than 0')
//   }else{
//       preGuess.push(guesses);
//     if (numGuess == 11) {
//       dispalyGuesses(guesses);
//       displayMessage(`Game Over. The number was ${randomNumber}`);
//       endGame();
//     } else {
//       dispalyGuesses(guesses);
//       checkGuess(guesses);
//     }
//   }
// }


// function checkGuess(guesses) {
//   if (guesses == randomNumber) {
//     displayMessage(`You Win the Game`);
//   } else if (guesses > randomNumber) {
//     displayMessage(`Your number is high`);
//   } else if (guesses < randomNumber) {
//     displayMessage(`Your number is low`);
//   }
// }

// function dispalyGuesses(guesses) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guesses} - `;
//   numGuess++;
//   remaning.innerHTML = `${11 - numGuess}`;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function startGame(){
//   let newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function(a){
//     randomNumber = parseInt(Math.random() * 100 +1);
//     numGuess = 1;
//     preGuess = [];
//     guessSlot.innerHTML = '';
//     remaning.innerHTML = `${11 - numGuess}`;
//     userInput.removeAttribute('disabled');
//     starOver.removeChild(p);    
//     playGames = true;
//   })

// }
// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled','');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id = "newGame">Start New Game</h2>2`
//   starOver.append(p);
//   playGames =false;
//   startGame();
// }
