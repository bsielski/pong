class Game {

  constructor(renderer, physics, controller, movement, rules, ai) {
    this.controller = controller;
    this.renderer = renderer;
    this.rules = rules;
    this.physics = physics;
    this.movement = movement;
    this.ai = ai;
    this.update = this.update.bind(this);
  }

  update(delta) {
    this.controller.update(delta);
    this.movement.update(delta);
    this.ai.update();
    this.physics.update(delta);
    this.rules.update();
  }

}

export default Game;
