class Game {
  constructor(game) {
    this.players = [];
    this.gameType;
    this.human = humanPlayer;
    // Replace these variables with new instatiations of the player class
    this.computer = computerPlayer;
    // Replace these variables with new instatiations of the player class
  }

  addPlayers() {
    if (players.length === 0) {
      players.push(humanPlayer, computerPlayer);
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
    var humanFighter = fighterId.name;
    var compFighter = computerPlayer.fighter.name;

    if (humanFighter === 'rock' && (compFighter === 'scissor' || compFighter === 'ufo')) {
      newGame.displayFighters()
      newGame.humanWinner()

    } else if (humanFighter === 'paper' && (compFighter === 'rock' || computerPlayer === 'cave')) {
      newGame.displayFighters()
      newGame.humanWinner()

    } else if (humanFighter === 'scissor' && (compFighter === 'paper' || compFighter === 'ufo')) {
      newGame.displayFighters()
      newGame.humanWinner()

    } else if (humanFighter === 'cave' && (compFighter === 'rock' || compFighter === 'scissor')) {
      newGame.displayFighters()
      newGame.humanWinner()

    } else if (humanFighter === 'ufo' && (compFighter === 'paper' || compFighter === 'cave')) {
      newGame.displayFighters()
      newGame.humanWinner()

    } else if (compFighter === 'rock' && (humanFighter === 'ufo' || humanFighter === 'scissor')) {
      newGame.displayFighters()
      newGame.computerWinner()

    } else if (compFighter === 'paper' && (humanFighter === 'rock' || humanFighter === 'cave')) {
      newGame.displayFighters()
      newGame.computerWinner()

    } else if (compFighter === 'scissor' && (humanFighter === 'paper' || humanFighter === 'ufo')) {
      newGame.displayFighters()
      newGame.computerWinner()

    } else if (compFighter === 'cave' && (humanFighter === 'rock' || humanFighter === 'scissor')) {
      newGame.displayFighters()
      newGame.computerWinner()

    } else if (compFighter === 'ufo' && (humanFighter === 'paper' || humanFighter === 'cave')) {
      newGame.displayFighters()
      newGame.computerWinner()

    } else {
      newGame.displayFighters()
      setTimeout(() => {
        headerInstructions.innerText = '✍️ It\'s a draw! ✍️';
      }, "2000")
    }
  }

  displayFighters() {
      headerInstructions.innerHTML = `${fighterId.img} ${computerPlayer.fighter.img}`;
      hide(gamePlayArea)
  }

  updateScoreBoard() {
    setTimeout(() => {
      var humanWins = humanPlayer.wins;
      humanWinScore.innerText = `Wins: ${humanWins}`;
      var computerWins = computerPlayer.wins;
      computerWinScore.innerText = `Wins: ${computerWins}`;
    }, "3500")
  }
  
  timeout() {
    setTimeout(() => {
      show(gamePlayArea)
      headerInstructions.innerText = 'Choose your fighter!';
    }, "4000")
  }
  
  computerWinner() {
    setTimeout(() => {
      headerInstructions.innerText = '💻 Computer won this round! 💻';
      computerPlayer.wins++;
    }, "2000")
  }
  
  humanWinner() {
    setTimeout(() => {
      headerInstructions.innerText = '🧟‍♂️ Human won this round! 🧟‍♂️';
      humanPlayer.wins++;
    }, "2000")
  }
  
  resetGame() {
    humanPlayer.wins = 0;
    humanWinScore.innerText = `Wins: ${humanPlayer.wins}`;
    computerPlayer.wins = 0;
    computerWinScore.innerText = `Wins: ${computerPlayer.wins}`;
  }
}
