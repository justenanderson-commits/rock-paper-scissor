// Global variables -------------------------------------
var personWinCount;
var computerWinCount;
var rockPower;
var paperPower;
var scissorPower;
var itWorked = 'It worked!';

var fighterArray = [] // links to svgs, probably have to make an array of objects here.// ]

//  Query Selectors ---------------------------------------
var playClassicGame = document.getElementById('card--game-classic');
var playSpicyGame = document.getElementById('card--game-spicy');




// Event listeners ----------------------------------------
playClassicGame.addEventListener('click', loadClassicGame);
playSpicyGame.addEventListener('click', loadSpicyGame);

// Functions (Single Responsibility Protocol)--------------
function loadClassicGame() {
  console.log('It worked!')
}

function loadSpicyGame() {
  console.log('It worked!')
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')
}

// Problem solving process --------------------------------
// console log everything
// Re-read spec
// talk it out loud
// draw a picture