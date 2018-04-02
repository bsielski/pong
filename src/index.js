import './styles.css';
import Config from './config';
import Game from './game';
import Renderer from './systems/renderer';
import FpsCounter from './systems/fpsCounter';
import AI from './systems/ai';
import Controller from './systems/controller';
import Movement from './systems/movement';
import Friction from './systems/friction';
import SpringPivot from './systems/springPivot';
import PivotLimiter from './systems/pivotLimiter';
import Accelerator from './systems/accelerator';
import Rotator from './systems/rotator';
import CollisionDetector from './systems/collisionDetector';
import Bouncing from './systems/bouncing';
import Stopping from './systems/stopping';
import TouchSensor from './systems/touchSensor';
import Victory from './systems/victory';
import ShapeRenderer from './systems/shapeRenderer';
import MainLoop from 'mainloop.js';

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
  const friction = new Friction();
  const springPivot = new SpringPivot();
  const pivotLimiter = new PivotLimiter();
  const accelerator = new Accelerator();
  const rotator = new Rotator();
  const controller = new Controller(keyState);
  const collisionDetector = new CollisionDetector();
  const bouncing = new Bouncing();
  const stopping = new Stopping();
  const touchSensor = new TouchSensor();
  const victory = new Victory();
  const renderer = new Renderer(renderer_options);
  const fpsCounter = new FpsCounter();
  const shapeRenderer = new ShapeRenderer();
  const ai = new AI();

  const mainLoop = MainLoop;
  const game = new Game(
    mainLoop, renderer, collisionDetector, bouncing, stopping, touchSensor,
    controller, movement, fpsCounter, ai, victory, accelerator, friction,
    rotator, springPivot, pivotLimiter, shapeRenderer);

  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  mainLoop.setUpdate(game.update);
  mainLoop.setDraw(renderer.render);
  mainLoop.start();
}

window.addEventListener('load', run);
