import Config from './config';

class Order {

  constructor(order_components, movement_components, shape_components, sprite_components) {

    this.sprite_components = sprite_components;
    this.shape_components = shape_components;
    this.order_components = order_components;
    this.movement_components = movement_components;
    this.update = this.update.bind(this);
  }

  update(delta) {
    Object.keys(this.order_components).forEach(id => {
      if (this.order_components[id].movement === "left") {
        this.movement_components[id].angle = Math.PI/2 + this.order_components[id].direction;
        this.movement_components[id].speed = Config.PLAYER_PADDLE_SPEED;
        this.shape_components[id].angle = -0.15;
        this.sprite_components[id].angle = -0.15;
      }
      else if (this.order_components[id].movement === "right") {
        this.movement_components[id].angle = -Math.PI/2 + this.order_components[id].direction;
        this.movement_components[id].speed = Config.PLAYER_PADDLE_SPEED;
        this.shape_components[id].angle = 0.15;
        this.sprite_components[id].angle = 0.15;
      }
      else if (this.order_components[id].movement === "stop") {
        this.movement_components[id].speed = 0;
        this.shape_components[id].angle = 0.0;
        this.sprite_components[id].angle = 0.0;
      }
    });
  }
}

export default Order;
