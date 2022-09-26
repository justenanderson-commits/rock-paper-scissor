class Game {
  constructor(game) {
    this.playerArray = [];
    // this.gameType = userSelectedGame;
    this.human = humanPlayer;
    this.computer = computerPlayer;
  }
  
  stagePlayers() {
    if (playerArray.length === 0) {
      playerArray.push(humanPlayer, computerPlayer);
    }
  }

  assignFighters() {
    var i = Math.floor(Math.random() * classicFighterChoices.length);
    computerPlayer.fighter = classicFighterChoices[i];
    humanPlayer.fighter = fighterId;
    console.log('Human fighter: ', humanPlayer)
    console.log('Computer fighter: ', computerPlayer)
  }

  resetGame() {
    humanPlayer.wins = 0;
    computerPlayer.wins = 0;
  }

  determineWinner() {
    // this function is a method on the game class.
    if (humanPlayer.fighter === 'rock' && computerPlayer.fighter === 'scissor') {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
      playerArray[0].wins++
  
    } else if (humanPlayer.fighter === 'paper' && computerPlayer.fighter === 'rock') {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
      playerArray[0].wins++
  
      // this line is updating the wins value in the human player object.
    } else if (humanPlayer.fighter === 'scissor' && computerPlayer.fighter === 'paper') {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️'
      playerArray[0].wins++
  
    } else if (computerPlayer.fighter === 'rock' && humanPlayer.fighter === 'scissor') {
      headerInstructions.innerText = '💻 Computer won this round! 💻'
      playerArray[1].wins++
  
    } else if (computerPlayer.fighter === 'paper' && humanPlayer.fighter === 'rock') {
      headerInstructions.innerText = '💻 Computer won this round! 💻'
      playerArray[1].wins++
      // console.log(headerInstructions.innerText)
  
    } else if (computerPlayer.fighter === 'scissor' && humanPlayer.fighter === 'paper') {
      headerInstructions.innerText = '💻 Computer won this round! 💻'
      playerArray[1].wins++
  
    } else if (computerPlayer.fighter === humanPlayer.fighter) {
      headerInstructions.innerText = '✍️ It\'s a draw! ✍️';
      // console.log('It\s a draw sucka')
      }
    }
  
    updateScoreBoard() {
      var humanWins = playerArray[0].wins;
      console.log('humanWins: ', humanWins) 
      humanWinScore.innerText = `Wins: ${humanWins}`;
      var computerWins = playerArray[1].wins;
      console.log('computerWins: ', computerWins)
      computerWinScore.innerText = `Wins: ${computerWins}`;
    }
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