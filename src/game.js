
class Game {

  constructor(renderer, physics, controller, movement) {
    this.controller = controller;
    this.renderer = renderer;
    this.physics = physics;
    this.movement = movement;
    this.start = this.start.bind(this);
    this.update = this.update.bind(this);
  }

  update(delta) {
    // Object.keys(this.order_components).forEach(id => {
    //   if (this.order_components[id].leftOrder === "start" && this.order_components[id].rightOrder === "stop") {
    //     this.position_components[id].x -= Config.PLAYER_PADDLE_SPEED * delta;
    //   }
    //   else if (this.order_components[id].leftOrder === "stop" && this.order_components[id].rightOrder === "start") {
    //     this.position_components[id].x += Config.PLAYER_PADDLE_SPEED * delta;
    //   }
    // });
    // console.log(delta);
    this.controller.update(delta);
    this.movement.update(delta);
    this.physics.update(delta);
  }

  start() {
    this.renderer.start();
  }

}


export default Game;
