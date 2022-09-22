// Global variables -------------------------------------
// var personWinCount = humanPlayer.wins;
// var computerWinCount = computerPlayer.wins;
var rockPower;
var paperPower;
var scissorPower;


// winCounter = [personWinCount, computerWinCount]
var fighterArray = [] // links to svgs, probably have to make an array of objects here.// ]

//  Query Selectors ---------------------------------------
var classicGameCard = document.getElementById('card--game-classic');
var spicyGameCard = document.getElementById('card--game-spicy');
var changeGameCard = document.getElementById('change-game-selector');
var headerInstructions = document.getElementById('text--instructions');
var classicFighterArea = document.getElementById('container--classic-fighter-area');
var spicyFighterArea = document.getElementById('container--spicy-fighter-area');
var gameCardArea = document.getElementById('container--game-cards');
var gamePlayArea = document.getElementById('container--game-play-area');

// Event listeners ----------------------------------------
window.addEventListener('load', showStartScreen);
classicGameCard.addEventListener('click', loadClassicGame);
spicyGameCard.addEventListener('click', loadSpicyGame);
changeGameCard.addEventListener('click', showStartScreen);

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
  show(classicGameCard)
  show(spicyGameCard)
  hide(changeGameCard)
}

// function toggleGamePlayArea() {
//   hide(gamePlayArea)
//   show(classicFighterArea)
// }

//  Add headerInstructions.innerText = '💻 Computer won this round! 💻'
//  Add headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
//  Add headerInstructions.innerText = '✍️ It's a draw! ✍️'


// Problem solving process --------------------------------
// console log everything
// Re-read spec
// talk it out loud
// draw a picture