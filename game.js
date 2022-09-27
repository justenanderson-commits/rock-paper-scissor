class Game {
  constructor(game) {
    this.playerArray = [];
    this.gameType;
    this.human = humanPlayer;
    this.computer = computerPlayer;
  }

  addPlayers() {
    if (playerArray.length === 0) {
      playerArray.push(humanPlayer, computerPlayer);
    }
  }

  assignFighters() {
    if (this.gameType === 'classic') {
      var i = Math.floor(Math.random() * classicFighterChoices.length);
      computerPlayer.fighter = classicFighterChoices[i];
    } else {
      var i = Math.floor(Math.random() * spicyFighterChoices.length);
      computerPlayer.fighter = spicyFighterChoices[i];
    }
    humanPlayer.fighter = fighterId;
  }

  loadGame() {
    headerInstructions.innerText = 'Choose your fighter!'
    gameCardArea.remove()
    show(changeGameCard)
    show(resetScoreCard)
    if (this.gameType === 'spicy') {
      gamePlayArea.appendChild(spicyFighterArea)
      show(spicyFighterArea)
    } else {
      gamePlayArea.appendChild(classicFighterArea)
      show(classicFighterArea)
    }
  }
  
  determineWinner() {
    if (humanPlayer.fighter === 'rock' && (computerPlayer.fighter === 'scissor' || computerPlayer.fighter === 'ufo')) {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️';
      humanPlayer.wins++;
      
    } else if (humanPlayer.fighter === 'paper' && (computerPlayer.fighter === 'rock' || computerPlayer === 'cave')) {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️';
      humanPlayer.wins++;

    } else if (humanPlayer.fighter === 'scissor' && (computerPlayer.fighter === 'paper' || computerPlayer.fighter === 'ufo')) {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️';
      humanPlayer.wins++;

    } else if (humanPlayer.fighter === 'cave' && (computerPlayer.fighter === 'rock' || computerPlayer.fighter === 'scissor')) {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️';
      humanPlayer.wins++;

    } else if (humanPlayer.fighter === 'ufo' && (computerPlayer.fighter === 'paper' || computerPlayer.fighter === 'cave')) {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️';
      humanPlayer.wins++;

    } else if (computerPlayer.fighter === 'rock' && (humanPlayer.fighter === 'ufo' || humanPlayer.fighter === 'scissor')) {
      headerInstructions.innerText = '💻 Computer won this round! 💻';
      computerPlayer.wins++;
      
    } else if (computerPlayer.fighter === 'paper' && (humanPlayer.fighter === 'rock' || humanPlayer === 'cave')) {
      headerInstructions.innerText = '💻 Computer won this round! 💻';
      computerPlayer.wins++;
      
    } else if (computerPlayer.fighter === 'scissor' && (humanPlayer.fighter === 'paper' || humanPlayer.fighter === 'ufo')) {
      headerInstructions.innerText = '💻 Computer won this round! 💻';
      computerPlayer.wins++;

    } else if (computerPlayer.fighter === 'cave' && (humanPlayer.fighter === 'rock' || humanPlayer === 'scissor')) {
      headerInstructions.innerText = '💻 Computer won this round! 💻';
      computerPlayer.wins++;
      
    } else if (computerPlayer.fighter === 'ufo' && (humanPlayer.fighter === 'paper' || humanPlayer.fighter === 'cave')) {
      headerInstructions.innerText = '💻 Computer won this round! 💻';
      computerPlayer.wins++;
    
    } else {
      headerInstructions.innerText = '✍️ It\'s a draw! ✍️';
    }
  }
  
  updateScoreBoard() {
    var humanWins = humanPlayer.wins;
    humanWinScore.innerText = `Wins: ${humanWins}`;
    var computerWins = computerPlayer.wins;
    computerWinScore.innerText = `Wins: ${computerWins}`;
  }
  
  resetGame() {
    humanPlayer.wins = 0;
    humanWinScore.innerText = `Wins: ${humanPlayer.wins}`;
    computerPlayer.wins = 0;
    computerWinScore.innerText = `Wins: ${computerPlayer.wins}`;
  }
  
  timeout() {
    setTimeout(() => {
      headerInstructions.innerText = 'Choose your fighter!';
    }, "2000")
  }
}
