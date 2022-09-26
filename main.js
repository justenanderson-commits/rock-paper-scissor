// Global variables -------------------------------------
var classicFighterChoices = ['rock', 'paper', 'scissor'];
var spicyFighterChoices = ['rock', 'paper', 'scissor', 'ufo', 'cave'];


//data model variables
var playerArray = [];
var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️'});
var computerPlayer = new Player({ name: 'Computer', token: '💻'})
var newGame = new Game({playerArray: [], human: 'John', computer: 'MacBook'})


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
classicGameCard.addEventListener('click', loadClassicGame);
spicyGameCard.addEventListener('click', loadSpicyGame);
changeGameCard.addEventListener('click', showStartScreen);
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

function createNewGame() {
  newGame.stagePlayers()
  newGame.assignFighters(fighterId)
  newGame.determineWinner()
  newGame.updateScoreBoard()
}

// Functions (Single Responsibility Protocol)--------------
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')

} function loadClassicGame() {
  headerInstructions.innerText = 'Choose your fighter!'
  gameCardArea.remove()
  show(changeGameCard)
  gamePlayArea.appendChild(classicFighterArea)
  show(classicFighterArea)
  // console.log('Classic game loading...')
}

function loadSpicyGame() {
  headerInstructions.innerText = 'Choose your fighter!'
  gameCardArea.remove()
  show(changeGameCard)
  gamePlayArea.appendChild(spicyFighterArea)
  show(spicyFighterArea)
  // console.log('Let\'s get spicy!')
}

function showStartScreen() {
  classicFighterArea.remove()
  spicyFighterArea.remove()
  hide(classicFighterArea)
  hide(spicyFighterArea)
  gamePlayArea.appendChild(gameCardArea)
  hide(changeGameCard)
  headerInstructions.innerText = 'Choose your game!';
}
