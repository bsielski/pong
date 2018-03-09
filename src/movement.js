import Config from './config';
import Victor from 'victor';

class Movement {

  constructor(movement_components, position_components) {

    this.movement_components = movement_components;
    this.position_components = position_components;

    this.update = this.update.bind(this);
  }

  update(delta) {
    Object.keys(this.movement_components).forEach(id => {
      this.position_components[id].x += (this.movement_components[id].x * delta);
      this.position_components[id].y += (this.movement_components[id].y * delta);
      // console.log(this.position_components[id].x, this.position_components[id].y);
    });
  }
}

export default Movement;
