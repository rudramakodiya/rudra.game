const words = ["code", "laser", "space", "alien", "rocket", "github"];
const wordDiv = document.getElementById("word");
const input = document.getElementById("input");
const scoreSpan = document.getElementById("score");

let currentWord = "";
let topPos = 0;
let score = 0;
let speed = 1;

function newWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordDiv.textContent = currentWord;
  topPos = 0;
  wordDiv.style.top = topPos + "px";
}

function gameLoop() {
  topPos += speed;
  wordDiv.style.top = topPos + "px";

  if (topPos > 270) {
    alert("💀 Game Over! Score: " + score);
    location.reload();
  }
}

input.addEventListener("input", () => {
  if (input.value === currentWord) {
    score++;
    scoreSpan.textContent = score;
    input.value = "";
    newWord();
  }
});

newWord();
setInterval(gameLoop, 50);
