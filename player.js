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




// switch statement?

// //  takeTurn function triggered by an event listener. (need QS)
// //  Each fighter has a unique value that's returned on-click.
// // Values are compared, winning player determined
// // Win count is updated for winner
// // Player methods must include, but are not limited to:
// // constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// // takeTurn