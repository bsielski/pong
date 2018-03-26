import Victor from 'victor';

class Rotator {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.rotator_components = components.rotators;
    this.interpreter_components = components.interpreters;
    this.order_components = components.orders;
    this.shape_components = components.shapes;
  }

  update(delta) {
    Object.keys(this.rotator_components).forEach(id => {
      const rotators = this.rotator_components[id];
      Object.keys(rotators).forEach(rotator => {
        if (this.interpreter_components[id][rotator].some(order => this.order_components[id][order] === true)) {
          this.shape_components[id].angle += (rotators[rotator].speed * rotators[rotator].direction);
        }
      });
    });
  }
}

export default Rotator;
