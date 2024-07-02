
let computerNumber = 0;
let attempts;
let guessList;

let guessInput = document.getElementById('guessInput');
let guessButton = document.getElementById('guessButton');
let resetButton = document.getElementById('resetButton');
let message = document.getElementById('message');
let attemptsLeft = document.getElementById('attemptsLeft');
let guessListElem = document.getElementById('guessList');
let gameOverMessage = document.getElementById('gameOverMessage');
let computerNumberElem = document.getElementById('computerNumber');

resetGame();


function resetGame() {
  computerNumber = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNumber)
    attempts = 3;
    guessList = [];


    message.textContent = '숫자를 맞춰라! 기회는 단 3번!';
    attemptsLeft.textContent = attempts;
    guessListElem.innerHTML = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = '';
    guessInput.focus();
}


function checkGuess() {
    if (attempts > 0) {
    const userGuess = parseInt(guessInput.value);
    
    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 100) {
        if (guessList.includes(userGuess)) {
        alert('이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.');
        } else {
        guessList.push(userGuess);
        displayGuesses();

        if (userGuess === computerNumber) {
            gameOver(true);
        } else {
            attempts--;
            attemptsLeft.textContent = attempts;
            if (attempts === 0) {
            gameOver(false);
            } else {
            if (userGuess < computerNumber) {
                message.textContent = `업!! 남은 기회는 ${attempts}번!`;
            } else {
                message.textContent = `다운!! 남은 기회는 ${attempts}번!`;
            }
            }
        }
        }
    } else {
        alert('1부터 100 사이의 숫자를 입력해주세요.');
    }
    } else {
    alert('기회가 모두 소진되었습니다. 리셋 버튼을 눌러주세요.');
    }
    
    guessInput.value = '';
    guessInput.focus();
}


function displayGuesses() {
    guessListElem.innerHTML = '';
    for (let guess of guessList) {
    const li = document.createElement('li');
    li.textContent = guess;
    guessListElem.appendChild(li);
    }
}


function gameOver(win) {
    if (win) {
    message.innerHTML = `축하합니다! 숫자 <span style="color: red;"><strong>${computerNumber}</strong></span>를 맞추셨습니다!<br><br>다시 시작하려면 <strong style="color: red;">리셋버튼</strong>을 눌러주세요!`;
    guessInput.disabled = true;
    guessButton.disabled = true;
    } else {
    message.innerHTML = `게임 오버! 정답은 <span style="color: red;"><strong>${computerNumber}</strong></span>입니다!`;
    guessInput.disabled = true;
    guessButton.disabled = true;
    }
}

