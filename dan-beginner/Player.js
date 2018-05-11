/* eslint-disable */
/* This is ugly & hacked together based on the specific scenario, but it works */
class Player {
  constructor() {
    this.health = 20;
  }

  enemyAhead(warrior) {
    return !warrior.feel().isEmpty();
  }

  playTurn(warrior) {
    if (this.health < 20) {
      warrior.rest();
      this.health += 2;
    } else if (!this.enemyAhead(warrior) && warrior.health() < 3) {
      this.health = 2;
      warrior.rest();
    } else if (this.enemyAhead(warrior)) {
      warrior.attack();
    } else {
      warrior.walk();
    }
  }
}
