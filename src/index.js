import './styles.css';
import Config from './config';
import Game from './game';
import Renderer from './systems/renderer';
import FpsCounter from './systems/fpsCounter';
import Timer from './systems/timer';
import AI from './systems/ai';
import Controller from './systems/controller';
import MovementCondition from './systems/movementCondition';
import Movement from './systems/movement';
import Friction from './systems/friction';
import SpringPivot from './systems/springPivot';
import PivotLimiter from './systems/pivotLimiter';
import Accelerator from './systems/accelerator';
import Rotator from './systems/rotator';
import CollisionDetector from './systems/collisionDetector';
import Condition from './systems/condition';
import LogicalAnd from './systems/logicalAnd';
import LogicalOr from './systems/logicalOr';
import Bouncing from './systems/bouncing';
import Stopping from './systems/stopping';
import TouchSensor from './systems/touchSensor';
import Victory from './systems/victory';
import Defeat from './systems/defeat';
import ShapeRenderer from './systems/shapeRenderer';
import MainLoop from 'mainloop.js';
import Levels from './levels';

function run() {

  const renderer_options = {
    width: Config.WORLD_WIDTH,
    height: Config.WORLD_HEIGHT,
    backgroundColor: Config.BG_COLOR,
    antialias: false,
    autoStart: false
  };
  const keyState = {
    leftArrow: {state: false, previousState: false},
    rightArrow: {state: false, previousState: false},
    enter: {state: false, previousState: false}
  };
  const movement = new Movement();
  const movementCondition = new MovementCondition();
  const friction = new Friction();
  const springPivot = new SpringPivot();
  const pivotLimiter = new PivotLimiter();
  const accelerator = new Accelerator();
  const rotator = new Rotator();
  const controller = new Controller(keyState);
  const condition = new Condition();
  const logicalAnd = new LogicalAnd();
  const logicalOr = new LogicalOr();
  const collisionDetector = new CollisionDetector();
  const bouncing = new Bouncing();
  const stopping = new Stopping();
  const touchSensor = new TouchSensor();
  const victory = new Victory();
  const defeat = new Defeat();
  const renderer = new Renderer(renderer_options);
  const fpsCounter = new FpsCounter();
  const timer = new Timer();
  const shapeRenderer = new ShapeRenderer();
  const ai = new AI();

  const mainLoop = MainLoop;
  const levels = new Levels();

  const game = new Game(
    levels, mainLoop, renderer, collisionDetector, bouncing, stopping, touchSensor,
    controller, movementCondition, movement, fpsCounter, timer, ai, victory, defeat, accelerator, friction,
    rotator, springPivot, pivotLimiter, shapeRenderer, condition, logicalAnd, logicalOr);

  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  mainLoop.setUpdate(game.update);
  mainLoop.setDraw(renderer.render);
  mainLoop.start();
}

window.addEventListener('load', run);
