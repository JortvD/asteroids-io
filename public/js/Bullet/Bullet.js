class Bullet{
  constructor(x, y, playerAngle, shooterId, id) {
    this.pos = createVector(x, y);
    this.velocity = p5.Vector.fromAngle(playerAngle);
    this.velocity.mult(10);
    this.r = 10;
    this.shooterId = shooterId;
    this.id = id;
  }

  updateAndDisplay() {
    this.r = lerp(this.r, 0, 0.005);
    this.pos.add(this.velocity);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  hasBulletDiminished() {
    if (this.hasDiminished()) {
      return true;
    }
  }

  checkCollisionsWithPlayer(bullets, player, i) {
    // console.log(socket.id);
    // console.log(bullets);
    // console.log("Bullet clientId: " +bullets.clientId);
    // console.log(socketId);

    if (this.hasHitPlayer(player) && shooterId !== socket.id) {
      player.reduceShield();
      return true;
    }

  }

  hasHit(asteroid) {
    return dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y) <= asteroid.r;
  }

  hasHitPlayer(player) {
    return dist(player.pos.x, player.pos.y, this.pos.x, this.pos.y) <= player.r;
  }

  hasDiminished() {
    if (this.r <= 1) {
      return true;
    }
    return false;
  }
}
