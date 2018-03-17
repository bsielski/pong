import getLevel01 from './levels/level01';


class Game {

  constructor(renderer, collisionDetector, bouncing, stopping, touchSensor, controller, movement, fpsCounter, ai, order) {
    this.level01 = getLevel01()

    this.renderer = renderer;
    this.renderer.loadLevel(this.level01);

    this.controller = controller;
    this.controller.loadLevel(this.level01);

    this.order = order;
    this.order.loadLevel(this.level01);

    this.fpsCounter = fpsCounter;
    this.fpsCounter.loadLevel(this.level01);

    this.collisionDetector = collisionDetector;
    this.collisionDetector.loadLevel(this.level01);

    this.bouncing = bouncing;
    this.bouncing.loadLevel(this.level01);

    this.stopping = stopping;
    this.stopping.loadLevel(this.level01);

    this.touchSensor = touchSensor;
    this.touchSensor.loadLevel(this.level01);

    this.movement = movement;
    this.movement.loadLevel(this.level01);

    this.ai = ai;
    this.ai.loadLevel(this.level01);

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
    this.fpsCounter.update();
  }

}

export default Game;
