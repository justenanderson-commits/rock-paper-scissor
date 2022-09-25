// Global variables -------------------------------------
// var fighterId;
var computerFighter = 'rock';
var classicFighterChoices = ['rock', 'paper', 'scissor'];
var spicyFighterChoices = ['rock', 'paper', 'scissor', 'ufo', 'cave'];
var playerArray = [];

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

function addPlayersToPlayersArray() {
  var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️'});
  var computerPlayer = new Player({ name: 'Computer', token: '💻', fighter: computerFighter})
  if (playerArray.length === 0) {
    // console.log(playerArray)
    playerArray.push(humanPlayer, computerPlayer);
  }
}

function randomFighter() {
  // console.log('classicFighterChoices.length: ', classicFighterChoices.length)
  var i = Math.floor(Math.random() * classicFighterChoices.length);
  playerArray[1].fighter = classicFighterChoices[i];
  // console.log('var i: ', i)
  
}

function assignFighterToPlayer() {
  playerArray[0].fighter = fighterId;
  randomFighter()
  console.log('Human fighter: ', playerArray[0].fighter)
  console.log('Computer fighter: ', playerArray[1].fighter)
}


// PLAYER FUNCTIONS ^^^^

function newGame() {
  addPlayersToPlayersArray()
  assignFighterToPlayer(fighterId)
  // console.log(playerArray)
  determineWinner()
}

function determineWinner() {
  // this function is a method on the game class.
  if (playerArray[0].fighter === 'rock' && playerArray[1].fighter === 'scissor') {
    headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
    playerArray[0].wins++

  } else if (playerArray[0].fighter === 'paper' && playerArray[1].fighter === 'rock') {
    headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
    playerArray[0].wins++

    // this line is updating the wins value in the human player object.
  } else if (playerArray[0].fighter === 'scissor' && playerArray[1].fighter === 'paper') {
    headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
    playerArray[0].wins++

  } else if (playerArray[1].fighter === 'rock' && playerArray[0].fighter === 'scissor') {
    headerInstructions.innerText = '💻 Computer won this round! 💻'
    playerArray[1].wins++

  } else if (playerArray[1].fighter === 'paper' && playerArray[0].fighter === 'rock') {
    headerInstructions.innerText = '💻 Computer won this round! 💻'
    playerArray[1].wins++
    // console.log(headerInstructions.innerText)

  } else if (playerArray[1].fighter === 'scissor' && playerArray[0].fighter === 'paper') {
    headerInstructions.innerText = '💻 Computer won this round! 💻'
    playerArray[1].wins++

  } else if (playerArray[1].fighter === playerArray[0].fighter) {
    headerInstructions.innerText = '✍️ It\'s a draw! ✍️';
    // console.log('It\s a draw sucka')
    }

    updateScoreBoard()
  }

  function updateScoreBoard() {
    var humanWins = playerArray[0].wins;
    console.log('humanWins: ', humanWins) 
    humanWinScore.innerText = `Wins: ${humanWins}`;
    var computerWins = playerArray[1].wins;
    console.log('computerWins: ', computerWins)
    computerWinScore.innerText = `Wins: ${computerWins}`;
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

// replace the computerPlayer hard coding with a function to randomly assign the fighter to the object at playerArray[1].
