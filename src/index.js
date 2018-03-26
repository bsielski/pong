import './styles.css';
import Config from './config';
import Game from './game';
import Renderer from './renderer';
import FpsCounter from './fpsCounter';
import AI from './ai';
import Controller from './controller';
import Movement from './movement';
import Friction from './friction';
import SpringPivot from './springPivot';
import PivotLimiter from './pivotLimiter';
import Accelerator from './accelerator';
import Rotator from './rotator';
import CollisionDetector from './collisionDetector';
import Bouncing from './bouncing';
import Stopping from './stopping';
import TouchSensor from './touchSensor';
import Victory from './victory';
import MainLoop from 'mainloop.js';

function run() {

  const renderer_options = {
    width: Config.WORLD_WIDTH,
    height: Config.WORLD_HEIGHT,
    backgroundColor: Config.BG_COLOR,
    antialias: false,
    autoStart: false
  };

  const movement = new Movement();
  const friction = new Friction();
  const springPivot = new SpringPivot();
  const pivotLimiter = new PivotLimiter();
  const accelerator = new Accelerator();
  const rotator = new Rotator();
  const controller = new Controller();
  const collisionDetector = new CollisionDetector();
  const bouncing = new Bouncing();
  const stopping = new Stopping();
  const touchSensor = new TouchSensor();
  const victory = new Victory();
  const renderer = new Renderer(renderer_options);
  const fpsCounter = new FpsCounter();
  const ai = new AI();

  const mainLoop = MainLoop;
  const game = new Game(
    mainLoop, renderer, collisionDetector, bouncing, stopping, touchSensor,
    controller, movement, fpsCounter, ai, victory, accelerator, friction,
    rotator, springPivot, pivotLimiter);

  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  mainLoop.setUpdate(game.update);
  mainLoop.setDraw(renderer.render);
  mainLoop.start();
}

window.addEventListener('load', run);
