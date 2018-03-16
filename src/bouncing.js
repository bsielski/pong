import Victor from 'victor';

class Bouncing {

  constructor(bouncing_components, collision_components, body_components, position_components, movement_components) {
    this.bouncing_components = bouncing_components;
    this.collision_components = collision_components;
    this.body_components = body_components;
    this.position_components = position_components;
    this.movement_components = movement_components;
    this.update = this.update.bind(this);
  }

  update() {
    Object.keys(this.bouncing_components).forEach(id => {
      let bouncingBody = this.bouncing_components[id];
      let bouncingBody_speed = this.movement_components[id].speed;
      let bouncingBody_angle = this.movement_components[id].angle;
      let bouncingBody_vector = new Victor(bouncingBody_speed, 0).rotate(bouncingBody_angle);

      this.collision_components[id].forEach(collision => {
        if (this.body_components[collision.bId]) {

          let normal = Victor.fromArray(collision.overlapV).normalize();
          let dot = bouncingBody_vector.x * normal.x + bouncingBody_vector.y * normal.y;
          let newX = bouncingBody_vector.x - 2.0 * dot * normal.x;
          let newY = bouncingBody_vector.y - 2.0 * dot * normal.y;
          let newVector = new Victor(newX, newY);
          let newAngle = newVector.angle();

          this.movement_components[id].angle = newAngle;

          this.position_components[id].x -= collision.overlapV[0];
          this.position_components[id].y -= collision.overlapV[1];
        }
      });
    });
  }
}

export default Bouncing;
