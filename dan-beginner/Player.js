/* eslint-disable */
/* This is ugly & hacked together based on the specific scenario, but it works */
class Player {
  constructor() {
    this.health = 20;
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
    if (this.captiveAhead(warrior)) {
      warrior.rescue();
    } else if (this.enemyAhead(warrior) && warrior.health() >= 5) {
      warrior.attack();
    } else if (this.enemyAhead(warrior) && warrior.health() < 5) {
      this.health = warrior.health();
      warrior.walk('backward');
    } else if (this.health < 20) {
      warrior.rest();
      this.health += 2;
    } else {
      warrior.walk();
    }
  }
}
