class Game {
  constructor() {

  }

  stageFighters() {
    var humanPlayer = new Player({ name: 'Human', token: '🧟‍♂️' });
    var computerPlayer = new Player({ name: 'Computer', token: '💻' })
    playerArray.push(humanPlayer, computerPlayer);
  }

  // Classic Game Rules:
  // Refactor these. I probably only need 4 rules to meet all possible conditions.
  // determineWinner() {
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
  //   }
  // }
}

// // Game should include:
// // Two Player instances
// // A way to keep track of the data for the game board
// // A way to keep track of the selected game type
// // A way to check the Game’s board data for win conditions
// // A way to detect when a game is a draw (no one has won)
// // A way to reset the Game’s board to begin a new game




// this is dumb:
// function compareScores(humanPlayer, computerPlayer) {
//   if (humanPlayer.score > computerPlayer.score) {
//     humanPlayer.wins++
//   } else {
//     computerPlayer.wins++
//   }              
// }