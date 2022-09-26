// Global variables -------------------------------------
var classicFighterChoices = ['rock', 'paper', 'scissor'];
var spicyFighterChoices = ['rock', 'paper', 'scissor', 'ufo', 'cave'];


//data model variables
var playerArray = [];
var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️' });
var computerPlayer = new Player({ name: 'Computer', token: '💻' })
var newGame = new Game({ playerArray: [], human: 'John', computer: 'MacBook' })


//  Query Selectors ---------------------------------------
var classicGameCard = document.getElementById('card--game-classic');
var spicyGameCard = document.getElementById('card--game-spicy');
var changeGameCard = document.getElementById('change-game-selector');
var headerInstructions = document.getElementById('text--instructions');
var classicFighterArea = document.getElementById('container--classic-fighter-area');
var spicyFighterArea = document.getElementById('container--spicy-fighter-area');
var gameCardArea = document.getElementById('container--game-cards');
var gamePlayArea = document.getElementById('container--game-play-area');
var rock = document.getElementById('image--rock');
var paper = document.getElementById('image--paper');
var scissor = document.getElementById('image--scissor');
var cave = document.getElementById('image--cave');
var ufo = document.getElementById('image--ufo');
var humanWinScore = document.getElementById('text--human-wins');
var computerWinScore = document.getElementById('text--computer-wins');


// Event listeners ----------------------------------------
window.addEventListener('load', showStartScreen);
changeGameCard.addEventListener('click', showStartScreen);
classicGameCard.addEventListener('click', function () {
  newGame.gameType = 'classic';
  newGame.loadGame()
});
spicyGameCard.addEventListener('click', function () {
  newGame.gameType = 'spicy';
  newGame.loadGame()
});
rock.addEventListener('click', function () {
  fighterId = 'rock';
  createNewGame();
});
paper.addEventListener('click', function () {
  fighterId = 'paper';
  createNewGame();
});
scissor.addEventListener('click', function () {
  fighterId = 'scissor';
  createNewGame();
});
cave.addEventListener('click', function () {
  fighterId = 'cave';
  createNewGame();
});
ufo.addEventListener('click', function () {
  fighterId = 'ufo';
  createNewGame();
});


// Functions (Single Responsibility Protocol)--------------
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}

function showStartScreen() {
  classicFighterArea.remove()
  spicyFighterArea.remove()
  hide(classicFighterArea)
  hide(spicyFighterArea)
  hide(changeGameCard)
  gamePlayArea.appendChild(gameCardArea)
  headerInstructions.innerText = 'Choose your game!';
}  

function createNewGame() {
  newGame.loadGame()
  newGame.addPlayers()
  newGame.assignFighters(fighterId)
  newGame.determineWinner()
  newGame.updateScoreBoard()
}  


// Rock, paper, scissor, cave, ufo: 
// 1. paper, ufo > Cave > stone, scissors fall into the cave and get lost
//  cave. 
// 2. Scissor, rock > ufo > cave, paper, but gets stabbed by the scissors, and is crushed by the rock.