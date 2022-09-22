// Global variables -------------------------------------
var personWinCount;
var computerWinCount;
var rockPower;
var paperPower;
var scissorPower;

var fighterArray = [] // links to svgs, probably have to make an array of objects here.// ]

//  Query Selectors ---------------------------------------
var classicGameCard = document.getElementById('card--game-classic');
var spicyGameCard = document.getElementById('card--game-spicy');




// Event listeners ----------------------------------------
classicGameCard.addEventListener('click', loadClassicGame);
spicyGameCard.addEventListener('click', loadSpicyGame);

// Functions (Single Responsibility Protocol)--------------
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden')

}function loadClassicGame() {
  hide(classicGameCard)
  hide(spicyGameCard)
  console.log('Classic game loading...')
}

function loadSpicyGame() {
  hide(classicGameCard)
  hide(spicyGameCard)
  console.log('Let\'s get spicy!')
}



// Problem solving process --------------------------------
// console log everything
// Re-read spec
// talk it out loud
// draw a picture