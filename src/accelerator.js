import Victor from 'victor';

class Accelerator {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.accelerator_components = components.accelerators;
    this.interpreter_components = components.interpreters;
    this.order_components = components.orders;
    this.movement_components = components.movements;
    this.position_components = components.positions;
  }

  update(delta) {
    Object.keys(this.accelerator_components).forEach(id => {
      const accelerators = this.accelerator_components[id];
      Object.keys(accelerators).forEach(accelerator => {
        const accVector = new Victor(accelerators[accelerator].acceleration, 0);
        accVector.rotate(accelerators[accelerator].angle + this.position_components[id].angle);
        const moveVector = new Victor(this.movement_components[id].speed, 0);
        moveVector.rotate(this.movement_components[id].angle);

        if (this.interpreter_components[id][accelerator].some(order => this.order_components[id][order] === true)) {
          moveVector.add(accVector);
        }
        this.movement_components[id].angle = moveVector.angle();
        this.movement_components[id].speed = moveVector.length();
      });
    });
  }
}

export default Accelerator;
