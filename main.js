// Global variables -------------------------------------
var personWinCount;
var computerWinCount;
var rockPower;
var paperPower;
var scissorPower;

var fighterArray = [// links to svgs, probably have to make an array of objects here.// ]

//  Query Selectors ---------------------------------------
var playClassicGame = document.querySelector('classic-id-here');
var playSpicyGame = document.querySelector('spicy-id-here');




// Event listeners ----------------------------------------


// Functions (Single Responsibility Protocol)--------------
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