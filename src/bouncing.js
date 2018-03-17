import Victor from 'victor';

class Bouncing {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.bouncing_components = components.bouncing;
    this.collision_components = components.collisions;
    this.body_components = components.bodies;
    this.position_components = components.positions;
    this.movement_components = components.movements;

  }

  update() {
    Object.keys(this.bouncing_components).forEach(id => {
      let bouncingBody = this.bouncing_components[id];
      let bouncingBody_speed = this.movement_components[id].speed;
      let bouncingBody_angle = this.movement_components[id].angle;
      let bouncingBody_vector = new Victor(bouncingBody_speed, 0).rotate(bouncingBody_angle);

      this.collision_components[id].forEach(collision => {
        if (this.body_components[collision.bId]) {

          const normal = Victor.fromArray(collision.overlapV).normalize();
          const newVector = this.bouncingVector(bouncingBody_vector, normal);
          const newAngle = newVector.angle();

          this.movement_components[id].angle = newAngle;

          this.position_components[id].x -= collision.overlapV[0];
          this.position_components[id].y -= collision.overlapV[1];
        }
      });
    });
  }

  bouncingVector(approachingVector, normalVector) {
    const dot = approachingVector.x * normalVector.x + approachingVector.y * normalVector.y;
    const newX = approachingVector.x - 2.0 * dot * normalVector.x;
    const newY = approachingVector.y - 2.0 * dot * normalVector.y;
    return new Victor(newX, newY);
  }

}

export default Bouncing;
