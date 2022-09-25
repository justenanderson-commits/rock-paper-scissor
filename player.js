class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.token;
    this.fighter = player.fighter;
    this.score = 0;
    this.wins = 0;
    this.myTurn = false;
  }

  takeTurn() { }
}

// Delete these duplicate functions when you refactor:
function addPlayers() {
  var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️' });
  var computerPlayer = new Player({ name: 'Computer', token: '💻' })
  playerArray.push(humanPlayer, computerPlayer);
}

function selectFighter() {
  // var userSelectedFighter = a String, passed from the event listener assigned to the respective Image element by its ID.
  playerArray[0].fighter = userSelectedFighter;
  // eventListener will fire this function on-click
  // elementId will be assigned to player.fighter

function updateWins() {
  // humanPlayer.fighter and computerPlayer.fighter will then be compared and a winner determined.
}

// function determineWinner() {
//   // this function is a method on the game class.
//   if (humanPlayer.fighter === 'rock' && computerPlayer.fighter === 'scissor') {
//     headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
//     humanPlayer.wins++

//   } else if (humanPlayer.fighter === 'paper' && computerPlayer.fighter === 'rock') {
//     headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
//     humanPlayer.wins++

//   } else if (humanPlayer.fighter === 'scissors' && computerPlayer.fighter === 'paper') {
//     headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
//     humanPlayer.wins++

//   } else if (computerPlayer.fighter === 'rock' && humanPlayer.fighter === 'scissor') {
//     headerInstructions.innerText = '💻 Computer won this round! 💻'
//     computerPlayer.wins++

//   } else if (computerPlayer.fighter === 'paper' && humanPlayer.fighter === 'rock') {
//     headerInstructions.innerText = '💻 Computer won this round! 💻'
//     computerPlayer.wins++

//   } else if (computerPlayer.fighter === 'scissors' && humanPlayer.fighter === 'paper') {
//     headerInstructions.innerText = '💻 Computer won this round! 💻'
//     computerPlayer.wins++

//   } else {
//     headerInstructions.innerText === '✍️ It\'s a draw! ✍️';
//     }
//   }
}

// switch statement to refactor the multiple conditionals?

// //  takeTurn function triggered by an event listener. (need QS)
// //  Each fighter has a unique value that's returned on-click.
// // Values are compared, winning player determined
// // Win count is updated for winner
// // Player methods must include, but are not limited to:
// // constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// // takeTurn

// function randomFighter() {
//   // Use Math.floor(Math.random(fighterChoices.length)) etc to randomly select and index position and assign it to the variable computerFighter
// }