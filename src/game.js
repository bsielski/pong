class Game {

  constructor(renderer, physics, controller, movement, rules) {
    this.controller = controller;
    this.renderer = renderer;
    this.rules = rules;
    this.physics = physics;
    this.movement = movement;
    this.start = this.start.bind(this);
    this.update = this.update.bind(this);
  }

  update(delta) {
    this.controller.update(delta);
    this.movement.update(delta);
    this.physics.update(delta);
    this.rules.update();
  }

export default Game;
