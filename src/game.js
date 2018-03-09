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
    this.controller.update(delta);
    this.movement.update(delta);
    this.physics.update(delta);
  }

  start() {
    this.renderer.start();
  }

}

export default Game;
