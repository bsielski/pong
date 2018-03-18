class Order {

  constructor() {

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.order_components = components.orders;
    this.movement_components = components.movements;
    this.shape_components = components.shapes;
    this.position_components = components.positions;
  }

  update(delta) {
    Object.keys(this.order_components).forEach(id => {
      if (this.order_components[id].movement === "left") {
        this.movement_components[id].angle = Math.PI/2 + this.order_components[id].direction;
        this.movement_components[id].speed = this.movement_components[id].maxSpeed;
        this.position_components[id].angle = -0.15;
      }
      else if (this.order_components[id].movement === "right") {
        this.movement_components[id].angle = -Math.PI/2 + this.order_components[id].direction;
        this.movement_components[id].speed = this.movement_components[id].maxSpeed;
        this.position_components[id].angle = 0.15;
      }
      else if (this.order_components[id].movement === "stop") {
        this.movement_components[id].speed = this.movement_components[id].minSpeed;
        this.position_components[id].angle = 0.0;
      }
    });
  }
}

export default Order;
