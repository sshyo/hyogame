let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []

chanceArea.innerHTML = `남은 기회는: ${chances}`;
playButton.addEventListener("click", play);
resetButton.addEvenListener("click", reset);
userInput.addEventListener("focus", function () {
    userInput.value = "";
});


function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}
function play() {
    let userValue = parseInt(userInput.value);

    if (isNaN(userValue) || userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
        return;
    }

    chances--;
    console.log("남은 기회:", chances); // 확인용
    chanceArea.textContent = `남은 기회는: ${chances}번`;
    console.log("chance", chances);

    if (userValue > computerNum) {
        resultArea.textContent = "UP!!!";
    } else if (userValue < computerNum) {
        console.log("DOWN!!!");
        resultArea.textContent = "DOWN!!!";
    } else {
        resultArea.textContent = "★정답★";
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if (chances < 1) {
        gameOver = true;
    }
    if (gameOver == true) {
        playButton.disabled = true;
    }
}
function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과가 나온다";
    gameOver = false;
    chances = 5;
    playButton.disabled = false;
    chanceArea.textContent = "남은 기회는: 5번";
}

pickRandomNum();