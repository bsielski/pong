import getLevel00titleScreen from './levels/level00titleScreen';
import getLevel01intro from './levels/level01intro';
import getLevel01 from './levels/level01';
import getLevel02intro from './levels/level02intro';
import getLevel02 from './levels/level02';
import getLevel9999congratulationsScreen from './levels/level9999congratulationsScreen';

class Game {

  constructor(
    mainloop, renderer, collisionDetector, bouncing, stopping, touchSensor,
    controller, movement, fpsCounter, ai, victory, accelerator,
    friction, rotator, springPivot, pivotLimiter, shapeRenderer
  )
  {
    this.levels = [getLevel00titleScreen(), getLevel01intro(), getLevel01(), getLevel02intro(), getLevel02(), getLevel9999congratulationsScreen()];
    this.currentLevelNumber = 0;

    this.mainloop = mainloop;
    this.renderer = renderer;
    this.controller = controller;
    this.fpsCounter = fpsCounter;
    this.collisionDetector = collisionDetector;
    this.bouncing = bouncing;
    this.stopping = stopping;
    this.touchSensor = touchSensor;
    this.victory = victory;
    this.ai = ai;
    this.movement = movement;
    this.friction = friction;
    this.springPivot = springPivot;
    this.pivotLimiter = pivotLimiter;
    this.accelerator = accelerator;
    this.rotator = rotator;
    this.shapeRenderer = shapeRenderer;

    this.loadLevel = this.loadLevel.bind(this);
    this.loadLevel(this.levels[this.currentLevelNumber]);
    this.update = this.update.bind(this);
  }

  loadLevel(level) {
    this.touchSensor.loadLevel(level);
    this.stopping.loadLevel(level);
    this.renderer.loadLevel(level);
    this.controller.loadLevel(level);
    this.fpsCounter.loadLevel(level);
    this.collisionDetector.loadLevel(level);
    this.shapeRenderer.loadLevel(level);
    this.bouncing.loadLevel(level);
    this.movement.loadLevel(level);
    this.friction.loadLevel(level);
    this.springPivot.loadLevel(level);
    this.pivotLimiter.loadLevel(level);
    this.accelerator.loadLevel(level);
    this.rotator.loadLevel(level);
    this.ai.loadLevel(level);
    this.victory.loadLevel(level);
  }

  update(delta) {
    this.controller.update(delta);
    this.ai.update();
    this.accelerator.update(delta);
    this.rotator.update(delta);
    this.pivotLimiter.update(delta);
    this.springPivot.update(delta);
    this.movement.update(delta);

    this.friction.update(delta);
    this.collisionDetector.update();
    this.bouncing.update();
    this.stopping.update();
    this.touchSensor.update();
    this.shapeRenderer.update();

    this.fpsCounter.update();
    if (this.victory.update()) {
      this.currentLevelNumber += 1;
      this.loadLevel(this.levels[this.currentLevelNumber]);
    }
  }

}

export default Game;
