/* eslint-disable */
/* This is ugly & hacked together based on the specific scenario, but it works */
class Player {
  constructor() {
    this.health = 20;
    this.turn = 1;
  }

  enemyAhead(warrior) {
    return !warrior.feel().isEmpty();
  }
  captiveAhead(warrior) {
    return warrior.feel().isCaptive();
  }
  // archerAhead(warrior) {
  //   return warrior.feel() === 'a';
  // }
  // thickSludgeAhead(warrior) {
  //   return warrior.feel() === 'S';
  // }

  playTurn(warrior) {
    if (this.turn < 20) {
      if (this.turn === 1) {
        warrior.walk('backward');
      } else if (this.turn === 2) {
        warrior.rescue('backward');
      } else if (this.enemyAhead(warrior) && warrior.health() > 8) {
        warrior.attack();
      } else if (this.enemyAhead(warrior) && warrior.health() <=8) {
        this.health = warrior.health();
        warrior.walk('backward');
      } else if (this.health < 20) {
        warrior.rest();
        this.health += 2;
      } else {
        warrior.walk();
      }
    } else {
      if (this.enemyAhead(warrior)) {
        warrior.attack();
      } else {
        warrior.walk();
      }
    }
    this.turn += 1;
  }
}
