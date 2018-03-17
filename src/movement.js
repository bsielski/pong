import Victor from 'victor';

class Movement {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.movement_components = components.movements;
    this.position_components = components.positions;
  }

  update(delta) {
    Object.keys(this.movement_components).forEach(id => {
      const vector = new Victor(this.movement_components[id].speed, 0).rotate(this.movement_components[id].angle);
      this.position_components[id].x += (vector.x * delta);
      this.position_components[id].y += (vector.y * delta);
      // console.log(this.position_components[id].x, this.position_components[id].y);
    });
  }
}

export default Movement;
