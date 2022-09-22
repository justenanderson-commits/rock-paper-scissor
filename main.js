// Global variables -------------------------------------
var fighterId;
var playerArray = []

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

// Event listeners ----------------------------------------
window.addEventListener('load', showStartScreen);
classicGameCard.addEventListener('click', loadClassicGame);
spicyGameCard.addEventListener('click', loadSpicyGame);
changeGameCard.addEventListener('click', showStartScreen);
rock.addEventListener('click', function () {
  fighterId = 'rock';
  newGame();
});
paper.addEventListener('click', function () {
  fighterId = 'paper';
  newGame();
});
scissor.addEventListener('click', function () {
  fighterId = 'scissor';
  newGame();
});
cave.addEventListener('click', function () {
  fighterId = 'cave';
  newGame();
});
ufo.addEventListener('click', function () {
  fighterId = 'ufo';
  newGame();
});



// Put these functions on the correct js document and then delete between these lines:

function addPlayers() {
  var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️' });
  var computerPlayer = new Player({ name: 'Computer', token: '💻' })
  playerArray.push(humanPlayer, computerPlayer);
}

function assignFighters(fighterId) {
  playerArray[0].fighter = fighterId;
}

function newGame() {
  addPlayers();
  assignFighters(fighterId);
  console.log(playerArray)
}

// Put these functions on the correct js document and then delete between these lines:




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
  console.log('Classic game loading...')
}

function loadSpicyGame() {
  headerInstructions.innerText = 'Choose your fighter!'
  gameCardArea.remove()
  show(changeGameCard)
  gamePlayArea.appendChild(spicyFighterArea)
  show(spicyFighterArea)
  console.log('Let\'s get spicy!')
}

function showStartScreen() {
  classicFighterArea.remove()
  spicyFighterArea.remove()
  hide(classicFighterArea)
  hide(spicyFighterArea)
  gamePlayArea.appendChild(gameCardArea)
  hide(changeGameCard)
}
