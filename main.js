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
var headerInstructions = document.getElementById('text--instructions')
var fighterArea = document.getElementById('container--fighter-area')

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
  hide(classicGameCard)
  hide(spicyGameCard)
  hide(changeGameCard)
  console.log('Classic game loading...')
}

function loadSpicyGame() {
  headerInstructions.innerText = 'Choose your fighter!'
  hide(classicGameCard)
  hide(spicyGameCard)
  hide(changeGameCard)
  console.log('Let\'s get spicy!')
}

function showStartScreen() {
  show(classicGameCard)
  show(spicyGameCard)
// CHANGE to hide once the changeGameCard is fired by the game being run (and winner determined), wins++
  show(changeGameCard)
}

//  Add headerInstructions.innerText = '💻 Computer won this round! 💻'
//  Add headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
//  Add headerInstructions.innerText = '✍️ It's a draw! ✍️'


// Problem solving process --------------------------------
// console log everything
// Re-read spec
// talk it out loud
// draw a picture