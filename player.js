class Player {
  constructor(player) {
    this.name = player.name;
    this.token = player.token;
    this.fighter = player.fighter;
    this.wins = 0;
  }
  takeTurn() { 
    console.log('TakeTurn method is firing!')
  }
}

// switch statement to refactor the multiple conditionals?

// //  takeTurn function triggered by an event listener. (need QS)

// // Player methods must include, but are not limited to:
// // constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// // takeTurn