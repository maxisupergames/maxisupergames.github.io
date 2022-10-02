const computerChoiceDisplay = document.getElementById('computer-wahl')
const userChoiceDisplay = document.getElementById('maxi-wahl')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result



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
buti.addEventListener("click", myFunction);

function myFunction() {
    alert("Hallo")
  document.getElementById("hallo").innerHTML = "Hello Max";
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
    }
    if (computerChoice === 'stein' && userChoice === "papier") {
      result = 'Du gewinnst!'
    }
    if (computerChoice === 'stein' && userChoice === "schere") {
      result = 'Du verlierst!'
    }
    if (computerChoice === 'papier' && userChoice === "schere") {
      result = 'Du gewinnst!'
    }
    if (computerChoice === 'papier' && userChoice === "stein") {
      result = 'Du verlierst!'
    }
    if (computerChoice === 'schere' && userChoice === "stein") {
      result = 'du gewinnst!'
    }
    if (computerChoice === 'schere' && userChoice === "papier") {
      result = 'Du verlierst!'
    }
    resultDisplay.innerHTML = result
}