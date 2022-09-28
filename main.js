// Global variables -------------------------------------
var classicFighterChoices = ['rock', 'paper', 'scissor'];
var spicyFighterChoices = ['rock', 'paper', 'scissor', 'ufo', 'cave'];


//data model variables
var playerArray = [];
var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️' });
var computerPlayer = new Player({ name: 'Computer', token: '💻' });
var newGame = new Game({ playerArray: [], human: 'John', computer: 'MacBook' });


//  Query Selectors ---------------------------------------
var classicGameCard = document.getElementById('card--game-classic');
var spicyGameCard = document.getElementById('card--game-spicy');
var changeGameCard = document.getElementById('change-game-selector');
var resetScoreCard = document.getElementById('reset-game-selector');
var headerInstructions = document.getElementById('text--instructions');
var classicFighterArea = document.getElementById('container--classic-fighter-area');
var spicyFighterArea = document.getElementById('container--spicy-fighter-area');
var gameCardArea = document.getElementById('container--game-cards');
var gamePlayArea = document.getElementById('container--game-play-area');
var rock = document.getElementById('image--rock');
var paper = document.getElementById('image--paper');
var scissor = document.getElementById('image--scissor');
var spicyRock = document.getElementById('image--spicy-rock');
var spicyPaper = document.getElementById('image--spicy-paper');
var spicyScissor = document.getElementById('image--spicy-scissor');
var spicyCave = document.getElementById('image--spicy-cave');
var spicyUfo = document.getElementById('image--spicy-ufo');
var humanWinScore = document.getElementById('text--human-wins');
var computerWinScore = document.getElementById('text--computer-wins');


// Event listeners ----------------------------------------
window.addEventListener('load', showStartScreen);
changeGameCard.addEventListener('click', showStartScreen);
resetScoreCard.addEventListener('click', newGame.resetGame);
classicGameCard.addEventListener('click', function () {
  newGame.gameType = 'classic';
  newGame.loadGame();
});
spicyGameCard.addEventListener('click', function () {
  newGame.gameType = 'spicy';
  newGame.loadGame();
});
rock.addEventListener('click', function () {
  fighterId = 'rock';
  createNewGame();
  playGame()
});
paper.addEventListener('click', function () {
  fighterId = 'paper';
  createNewGame();
  playGame()
});
scissor.addEventListener('click', function () {
  fighterId = 'scissor';
  createNewGame();
  playGame()
});
spicyRock.addEventListener('click', function () {
  fighterId = 'rock';
  createNewGame();
  playGame()
});
spicyPaper.addEventListener('click', function () {
  fighterId = 'paper';
  createNewGame();
  playGame()
});
spicyScissor.addEventListener('click', function () {
  fighterId = 'scissor';
  createNewGame();
  playGame()
});
spicyCave.addEventListener('click', function () {
  fighterId = 'cave';
  createNewGame();
  playGame()
});
spicyUfo.addEventListener('click', function () {
  fighterId = 'ufo';
  createNewGame();
  playGame()
});


// Functions-------------------------------------------
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
  hide(resetScoreCard)
  gamePlayArea.appendChild(gameCardArea)
  headerInstructions.innerText = 'Choose your game!';
}  

function createNewGame() {
  newGame.loadGame()
  newGame.addPlayers()
  newGame.assignFighters(fighterId)
}  

function playGame() {
  newGame.determineWinner()
  newGame.timeout()
  newGame.updateScoreBoard()
}  
