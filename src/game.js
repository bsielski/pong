class Game {

  constructor(
    levels, mainloop, renderer, collisionDetector, bouncing, stopping, touchSensor,
    controller, movementCondition, movement, fpsCounter, timer, ai, victory, defeat, accelerator,
    friction, rotator, springPivot, pivotLimiter, shapeRenderer
  )
  {
    this.levels = levels;

    this.mainloop = mainloop;
    this.renderer = renderer;
    this.controller = controller;
    this.fpsCounter = fpsCounter;
    this.timer = timer;
    this.collisionDetector = collisionDetector;
    this.bouncing = bouncing;
    this.stopping = stopping;
    this.touchSensor = touchSensor;
    this.victory = victory;
    this.defeat = defeat;
    this.ai = ai;
    this.movement = movement;
    this.movementCondition = movementCondition;
    this.friction = friction;
    this.springPivot = springPivot;
    this.pivotLimiter = pivotLimiter;
    this.accelerator = accelerator;
    this.rotator = rotator;
    this.shapeRenderer = shapeRenderer;

    this.loadLevel = this.loadLevel.bind(this);
    this.loadLevel(this.levels.current());
    this.update = this.update.bind(this);
  }

  loadLevel(level) {
    this.touchSensor.loadLevel(level);
    this.stopping.loadLevel(level);
    this.renderer.loadLevel(level);
    this.controller.loadLevel(level);
    this.fpsCounter.loadLevel(level);
    this.timer.loadLevel(level);
    this.collisionDetector.loadLevel(level);
    this.shapeRenderer.loadLevel(level);
    this.bouncing.loadLevel(level);
    this.movementCondition.loadLevel(level);
    this.movement.loadLevel(level);
    this.friction.loadLevel(level);
    this.springPivot.loadLevel(level);
    this.pivotLimiter.loadLevel(level);
    this.accelerator.loadLevel(level);
    this.rotator.loadLevel(level);
    this.ai.loadLevel(level);
    this.victory.loadLevel(level);
    this.defeat.loadLevel(level);
  }

  update(delta) {
    this.controller.update(delta);
    this.ai.update();
    this.accelerator.update(delta);
    this.rotator.update(delta);
    this.pivotLimiter.update(delta);
    this.springPivot.update(delta);
    this.timer.update(delta);
    this.movementCondition.update();
    this.movement.update(delta);

    this.friction.update(delta);
    this.collisionDetector.update();
    this.bouncing.update();
    this.stopping.update();
    this.touchSensor.update();
    this.shapeRenderer.update();

    this.fpsCounter.update();
    if (this.defeat.update()) {
      this.loadLevel(this.levels.lose().current());
    }
    else if (this.victory.update()) {
      this.loadLevel(this.levels.win().current());
    }
  }

}

export default Game;
