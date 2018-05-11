/* eslint-disable */
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
  facingWall(warrior) {
    return warrior.feel().isWall();
  }

  playTurn(warrior) {
    if (this.facingWall(warrior)) {
      warrior.pivot();
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
    this.turn += 1;
  }
}
