class Stopping {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.stopping_components = components.stopping;
    this.bouncing_components = components.bouncing;
    this.collision_components = components.collisions;
    this.body_components = components.bodies;
    this.position_components = components.positions;
  }

  update() {
    Object.keys(this.stopping_components).forEach(id => {

      this.collision_components[id].forEach(collision => {

        if (this.body_components[collision.bId] && !this.bouncing_components[collision.bId]) {
          this.position_components[id].x -= collision.overlapV[0];
          this.position_components[id].y -= collision.overlapV[1];
        }
      });
    });
  }
}

export default Stopping;
