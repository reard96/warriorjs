/* eslint-disable */
class Player {
  constructor() {
    this.health = 20;
    this.turn = 1;
  }

  // true if enemy directly ahead of warrior
  enemyAhead(warrior) {
    return !warrior.feel().isEmpty();
  }

  // true if captive directly ahead of warrior
  captiveDirectlyAhead(warrior) {
    return warrior.feel().isCaptive();
  }

  // true if warrior facing wall
  facingWall(warrior) {
    return warrior.feel().isWall();
  }

  isEnemyInSight(warrior) {
    const unit = warrior.look().find(space => !space.isEmpty());
    return unit && unit.isEnemy();
  }

  playTurn(warrior) {
    if (this.captiveDirectlyAhead(warrior)) {
      warrior.rescue();
    } else if (this.isEnemyInSight(warrior)) {
      warrior.shoot();
    } else {
      warrior.walk();
    }
  this.turn += 1;
  }
}
