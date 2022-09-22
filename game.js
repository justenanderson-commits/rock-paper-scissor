class Game {
  constructor() {

  }

  stageFighters() {
    var humanPlayer = new Player({ name: 'John', token: '🤪' });
    var computerPlayer = new Player({ name: 'Agent Smith', token: '😎' })
    fighterArray.push(humanPlayer, computerPlayer);
  }
}

// 


// if (human.fighter === 'rock' && computer.fighter === 'scissor') {
//   headerInstructions.innerText = '💻 Computer won this round! 💻'
//   computer.wins++
// } else if (human.fighter === 'rock' && computer.fighter === 'paper') {
//   headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
//   human.wins++
// }


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