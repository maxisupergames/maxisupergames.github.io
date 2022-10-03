const computerChoiceDisplay = document.getElementById('computer-wahl')
const userChoiceDisplay = document.getElementById('maxi-wahl')
const resultDisplay = document.getElementById('result')
const score_computer_display = document.getElementById('score-computer')
const score_user_display = document.getElementById('score-user')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let score_computer = 0
let score_user = 0




choices = document.querySelectorAll(".choice").forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }))


function selectChoice(){
    alert(e.targetId());
}

buti = document.getElementById("maxiknopf");
buti.addEventListener("click", neustarten);

function neustarten() {
  score_computer = 0;
  score_user = 0;

  score_computer_display.innerHTML = score_computer
  score_user_display.innerHTML = score_user
  computerChoiceDisplay.innerHTML = ""
  userChoiceDisplay.innerHTML = ""
  resultDisplay.innerHTML = ""

}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNumber === 1) {
      computerChoice = 'stein'
    }
    if (randomNumber === 2) {
      computerChoice = 'schere'
    }
    if (randomNumber === 3) {
      computerChoice = 'papier'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }
  
  function getResult() {
    if (computerChoice === userChoice) {
      result = 'unentschieden!'
      score_computer++;
      score_user++;

    }
    if (computerChoice === 'stein' && userChoice === "papier") {
      result = 'Du gewinnst!'
      score_user++;
    }
    if (computerChoice === 'stein' && userChoice === "schere") {
      result = 'Du verlierst!'
      score_computer++;
    }
    if (computerChoice === 'papier' && userChoice === "schere") {
      result = 'Du gewinnst!'
      score_user++;
    }
    if (computerChoice === 'papier' && userChoice === "stein") {
      result = 'Du verlierst!'
      score_computer++;
    }
    if (computerChoice === 'schere' && userChoice === "stein") {
      result = 'Du gewinnst!'
      score_user++;
    }
    if (computerChoice === 'schere' && userChoice === "papier") {
      result = 'Du verlierst!'
      score_computer++;
    }
    resultDisplay.innerHTML = result
    score_computer_display.innerHTML = score_computer
    score_user_display.innerHTML = score_user
}