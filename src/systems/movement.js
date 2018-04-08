import Victor from 'victor';

class Movement {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.movement_components = components.movements;
    this.position_components = components.positions;
    this.variable_components = components.variables;
  }

  update(delta) {
    Object.keys(this.movement_components).forEach(id => {

      if (!this.movement_components[id].enabled || this.variable_components[this.movement_components[id].enabled].value === true) {
        if (this.movement_components[id].speed < this.movement_components[id].minSpeed) {
          this.movement_components[id].speed = this.movement_components[id].minSpeed
        }
        else if (this.movement_components[id].speed > this.movement_components[id].maxSpeed) {
          this.movement_components[id].speed = this.movement_components[id].maxSpeed
        }
        const vector = new Victor(this.movement_components[id].speed, 0).rotate(this.movement_components[id].angle);
        this.position_components[id].x += (vector.x * delta);
        this.position_components[id].y += (vector.y * delta);
      }
    });
  }
}

export default Movement;
