import { startConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const playerLizard = document.getElementById('player-lizard');
const playerSpock = document.getElementById('player-spock');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const computerLizard = document.getElementById('computer-lizard');
const computerSpock = document.getElementById('computer-spock');

const resetIcon = document.querySelector('.reset-icon');
const allGameIcons = document.querySelectorAll('.game-icon');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScore = 0;
let computerScore = 0;

function resetSelectedIcons() {
  allGameIcons.forEach(icon => {
    icon.classList.replace('fas', 'far');
  });
  removeConfetti();
}

function getComputerChoice() {
  let computerChoice = '';
  const choiceNum = Math.floor(Math.random() * 5);
  switch (choiceNum) {
    case 0:
      computerChoice = 'rock';
      computerRock.classList.replace('far', 'fas');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 1:
      computerChoice = 'paper';
      computerPaper.classList.replace('far', 'fas');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 2:
      computerChoice = 'scissors';
      computerScissors.classList.replace('far', 'fas');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 3:
      computerChoice = 'lizard';
      computerLizard.classList.replace('far', 'fas');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 4:
      computerChoice = 'spock';
      computerSpock.classList.replace('far', 'fas');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
  return computerChoice;
}

// Updates score and updates result text
function updateScore(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a Tie!";
    resultText.style.color = 'teal';
  } else {
    if (choices[playerChoice].defeats.includes(computerChoice)) {  // Player won
      playerScore++;
      playerScoreEl.textContent = playerScore;
      resultText.textContent = "You Won!";
      resultText.style.color = 'cornflowerblue';
      startConfetti();
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      resultText.textContent = "You Lost.";
      resultText.style.color = 'crimson';
    }
  }
}

function checkResult(playerChoice) {
  resetSelectedIcons();
  const computerChoice = getComputerChoice();
  updateScore(playerChoice, computerChoice);
}

function select(event) {
  const playerChoice = event.srcElement.id.substring(7);
  checkResult(playerChoice);
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.replace('far', 'fas');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.replace('far', 'fas');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.replace('far', 'fas');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.replace('far', 'fas');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.replace('far', 'fas');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

function resetAll() {
  playerScore = 0;
  playerScoreEl.textContent = playerScore;
  playerChoiceEl.textContent = '';

  computerScore = 0;
  computerScoreEl.textContent = computerScore;
  computerChoiceEl.textContent = '';

  resultText.textContent = 'Click on any choice.';
  resultText.style.color = 'teal';
  resetSelectedIcons();
}

// Event Listeners
playerRock.addEventListener('click', select);
playerPaper.addEventListener('click', select);
playerScissors.addEventListener('click', select);
playerLizard.addEventListener('click', select);
playerSpock.addEventListener('click', select);
resetIcon.addEventListener('click', resetAll);