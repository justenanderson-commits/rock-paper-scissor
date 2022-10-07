//Logic idea to refactor event handlers:
//  if (rock.beats === computerPlayer.fighter) {
  //   // humanPlayer.fighter.beats === computerPlayer.fighter
  // } or something like that! :)

// Global variables -------------------------------------
var rock = {
    name: 'rock',
    img: '<img id="image--rock" src="assets/rock.png" alt="Rock clip art">',
    beats: ['scissor', 'ufo'],
    // These arrays could be refereced to refactor the newGame.determineWinner method //
    losesTo: ['paper', 'cave']
  }

  var paper = {
    name: 'paper',
    img: '<img id="image--paper" src="assets/lines-paper.png" alt="Lined paper clip art">',
    beats: 'rock',
    losesTo: 'scissor'
  }

  var scissor = {
    name: 'scissor',
    img: '<img id="image--scissor" src="assets/lines-scissors.png" alt="Scissor clip art">',
    beats: 'paper',
    losesTo: 'rock'
  }
    
  var spicyCave = {
    name: 'cave',
    img: '<img id="image--spicy-cave" src="assets/cave.png" alt="Cave clip art">',
    beats: 'add opponent here',
    losesTo: 'rock'
  }
  
  var spicyUfoObject = {
    name: 'ufo',
    img: '<img id="image--spicy-ufo" src="assets/ufo.png" alt="Ufo clip art">',
    beats: 'cave',
    losesTo: 'rock'
  }
  
var classicFighterChoices = [rock, paper, scissor]; 
var spicyFighterChoices = [rock, paper, scissor, spicyCave, spicyUfoObject]; 


//data model variables
var players = [];
var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️' });
var computerPlayer = new Player({ name: 'Computer', token: '💻' });
var newGame = new Game({ players: [], human: 'John', computer: 'MacBook' });


//  Query Selectors ---------------------------------------
var classicGameCard = document.getElementById('card--game-classic');
var spicyGameCard = document.getElementById('card--game-spicy');
var changeGameCard = document.getElementById('change-game-selector');
var resetScoreCard = document.getElementById('reset-game-selector');
var headerInstructions = document.getElementById('text--instructions');
var humanWinScore = document.getElementById('text--human-wins');
var computerWinScore = document.getElementById('text--computer-wins');
var classicFighterArea = document.getElementById('container--classic-fighter-area');
var spicyFighterArea = document.getElementById('container--spicy-fighter-area');
var gameCardArea = document.getElementById('container--game-cards');
var gamePlayArea = document.getElementById('container--game-play-area');

var images = gamePlayArea.getElementsByTagName('img');
var rockImg = images[0];
var paperImg = images[1];
var scissorImg = images[2];
var spicyRockImg = images[3];
var spicyPaperImg = images[4];
var spicyScissorImg = images[5];
var spicyCaveImg = images[6];
var spicyUfoImg = images[7];


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


rockImg.addEventListener('click', function () {
  // Add a for (or forEach) loop here {
  fighterId = rock;
  createNewGame();
  playGame()
  // }
});
paperImg.addEventListener('click', function () {
  fighterId = paper;
  createNewGame();
  playGame()
});
scissorImg.addEventListener('click', function () {
  fighterId = scissor;
  createNewGame();
  playGame()
});
spicyRockImg.addEventListener('click', function () {
  fighterId = rock;
  createNewGame();
  playGame()
});
spicyPaperImg.addEventListener('click', function () {
  fighterId = paper;
  createNewGame();
  playGame()
});
spicyScissorImg.addEventListener('click', function () {
  fighterId = scissor;
  createNewGame();
  playGame()
});
spicyCaveImg.addEventListener('click', function () {
  fighterId = spicyCave;
  createNewGame();
  playGame()
});
spicyUfoImg.addEventListener('click', function () {
  fighterId = spicyUfoObject;
  createNewGame();
  playGame()
});


// Functions-------------------------------------------
const show = (element => element.classList.remove('hidden'))
const hide = (element =>  element.classList.add('hidden'))

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
