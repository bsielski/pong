import Config from './config';

class Order {

  constructor(order_components, position_components, movement_components) {

    this.position_components = position_components;
    this.order_components = order_components;
    this.movement_components = movement_components;

    this.update = this.update.bind(this);
  }

  update(delta) {
    Object.keys(this.order_components).forEach(id => {
      if (this.order_components[id].movement === "left") {
        this.position_components[id].x = this.position_components[id].x - Config.PLAYER_PADDLE_SPEED * delta;
        // console.log(this.position_components[id].x);
      }
      else if (this.order_components[id].movement === "right") {
        this.position_components[id].x = this.position_components[id].x + Config.PLAYER_PADDLE_SPEED * delta;
        // console.log(this.position_components[id].x);
      }
    });
  }
}

export default Order;
