class Friction {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.movement_components = components.movements;
    this.friction_components = components.frictions;
  }

  update(delta) {
    Object.keys(this.friction_components).forEach(id => {
      this.movement_components[id].speed -= (this.friction_components[id].value * delta);
      if (this.movement_components[id].speed < this.movement_components[id].minSpeed) {
        this.movement_components[id].speed = this.movement_components[id].minSpeed
      }
    });
  }
}

export default Friction;
