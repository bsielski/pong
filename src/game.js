class Game {

  constructor(renderer, collisionDetector, bouncing, stopping, touchSensor, /*physics,*/ controller, movement, fpsCounter, ai, order) {
    this.controller = controller;
    this.order = order;
    this.renderer = renderer;
    this.fpsCounter = fpsCounter;
    this.collisionDetector = collisionDetector;
    this.bouncing = bouncing;
    this.stopping = stopping;
    this.touchSensor = touchSensor;
    // this.physics = physics;
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
    this.bouncing.update();
    this.stopping.update();
    this.touchSensor.update();
    // this.physics.update(delta);
    this.fpsCounter.update();
  }

}

export default Game;
