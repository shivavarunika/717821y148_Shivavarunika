var text = document.getElementById('textField');
var score = document.getElementById('ResultField');
const headButton = document.getElementById('headButton');
var tailButton = document.getElementById('tailButton');
var tossButton = document.getElementById('tossButton');
var resetButton = document.getElementById('resetButton');
var image = document.getElementById('img');
var computerChoice = -1;
var userChoice = -1;

var dscore = localStorage.getItem("dscore") || 0;
localStorage.setItem("dscore", dscore);
// for 1 heads and for 0 tails
defaultValues();
score.textContent = "Score: " + localStorage.getItem("dscore");

function setComputerChoice() {
    return Math.random() < 0.5 ? 1 : 0;
}

tossButton.addEventListener("click", () => {
    if (userChoice === -1){
        text.textContent= "Select your choice";
        return;
    }
    computerChoice = setComputerChoice();
    image.classList.add('rotate');
    image.addEventListener('transitionend',()=> {
        image.classList.remove('rotate');
    })
    displayResult();
    defaultValues();
});

headButton.addEventListener("click", () => {
    userChoice = 1;
    headButton.style.backgroundColor = "blue";
    tailButton.style.backgroundColor = "skyblue";
});

tailButton.addEventListener("click", () => {
    userChoice = 0;
    tailButton.style.backgroundColor = "blue";
    headButton.style.backgroundColor = "skyblue";
});

function displayResult() {
    if(computerChoice === 1)
        image.src='head.jpeg';
    else    
        image.src='tail.jpg';
    if (computerChoice === userChoice) {
        localStorage.setItem("dscore", parseInt(localStorage.getItem("dscore")) + 1);
        text.textContent = "You Win";
    } else {
        text.textContent = "You Loose";
    }
    score.textContent = "Score: " + localStorage.getItem("dscore");
}

resetButton.addEventListener("click", () => {
    localStorage.setItem("dscore", 0);
    defaultValues();
    score.textContent = "Score: " + localStorage.getItem("dscore");
});
function defaultValues(){
    userChoice = -1;
    computerChoice = -1;
    headButton.style.backgroundColor = "skyblue";
    tailButton.style.backgroundColor = "skyblue";
}