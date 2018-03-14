class Game {

  constructor(renderer, collisionDetector, physics, controller, movement, rules, ai, order) {
    this.controller = controller;
    this.order = order;
    this.renderer = renderer;
    this.rules = rules;
    this.collisionDetector = collisionDetector;
    this.physics = physics;
    this.movement = movement;
    this.ai = ai;
    this.update = this.update.bind(this);
  }

  update(delta) {
    this.controller.update(delta);
    this.ai.update();
    this.order.update(delta);
    this.movement.update(delta);
    this.collisionDetector.update();
    this.physics.update(delta);
    this.rules.update();
  }

}

export default Game;
