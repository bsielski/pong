class Stopping {

  constructor(stopping_components, bouncing_components, collision_components, body_components, position_components) {
    this.stopping_components = stopping_components;
    this.bouncing_components = bouncing_components;
    this.collision_components = collision_components;
    this.body_components = body_components;
    this.position_components = position_components;
    this.update = this.update.bind(this);
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
