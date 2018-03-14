import Config from './config';

class Order {

  constructor(order_components, position_components, movement_components, body_components, sprite_components) {

    this.position_components = position_components;
    this.sprite_components = sprite_components;
    this.body_components = body_components;
    this.order_components = order_components;
    this.movement_components = movement_components;
    this.update = this.update.bind(this);
  }

  update(delta) {
    Object.keys(this.order_components).forEach(id => {
      if (this.order_components[id].movement === "left") {
        this.movement_components[id].angle = Math.PI/2 + this.order_components[id].direction;
        this.movement_components[id].speed = Config.PLAYER_PADDLE_SPEED;
        this.body_components[id].angle = -0.15;
        this.sprite_components[id].angle = -0.15;
        // console.log(this.position_components[id].x);
      }
      else if (this.order_components[id].movement === "right") {
        this.movement_components[id].angle = -Math.PI/2 + this.order_components[id].direction;
        this.movement_components[id].speed = Config.PLAYER_PADDLE_SPEED;
        this.body_components[id].angle = 0.15;
        this.sprite_components[id].angle = 0.15;
        // console.log(this.position_components[id].x);
      }
      else if (this.order_components[id].movement === "stop") {
        this.movement_components[id].speed = 0;
        this.body_components[id].angle = 0.0;
        this.sprite_components[id].angle = 0.0;
        // console.log(this.position_components[id].x);
      }
    });
  }
}

export default Order;
