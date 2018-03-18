import getLevel01intro from './levels/level01intro';
import getLevel01 from './levels/level01';
import getLevel02intro from './levels/level02intro';
import getLevel02 from './levels/level02';


class Game {

  constructor(mainloop, renderer, collisionDetector, bouncing, stopping, touchSensor, controller, movement, fpsCounter, ai, order, victory) {
    this.levels = [getLevel01intro(), getLevel01(), getLevel02intro(), getLevel02()];
    this.currentLevelNumber = 0;

    this.mainloop = mainloop;
    this.renderer = renderer;
    this.controller = controller;
    this.order = order;
    this.fpsCounter = fpsCounter;
    this.collisionDetector = collisionDetector;
    this.bouncing = bouncing;
    this.stopping = stopping;
    this.touchSensor = touchSensor;
    this.victory = victory;
    this.ai = ai;
    this.movement = movement;

    this.loadLevel = this.loadLevel.bind(this);
    this.loadLevel(this.levels[this.currentLevelNumber]);
    this.update = this.update.bind(this);
  }

  loadLevel(level) {
    // this.mainloop.stop();
    this.touchSensor.loadLevel(level);
    this.stopping.loadLevel(level);
    this.order.loadLevel(level);
    this.renderer.loadLevel(level);
    this.controller.loadLevel(level);
    this.fpsCounter.loadLevel(level);
    this.collisionDetector.loadLevel(level);
    this.bouncing.loadLevel(level);
    this.movement.loadLevel(level);
    this.ai.loadLevel(level);
    this.victory.loadLevel(level);
    // this.mainloop.start();
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
    if (this.victory.update()) {
      this.currentLevelNumber += 1;
      this.loadLevel(this.levels[this.currentLevelNumber]);
    }
  }

}

export default Game;
