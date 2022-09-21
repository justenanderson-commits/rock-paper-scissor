class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.token;
    this.wins = 0;
    this.myTurn = false;
  }

  takeTurn() {
//  takeTurn function triggered by an event listener. (need QS)
//  Each figther has a unique value that's returned on-click.
// Values are compared, winning player determined
// Win count is updated for winner

// Else, you win
  }
}

module.exports = Player;

// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// takeTurn