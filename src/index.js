import './styles.css';
import Config from './config';
import Game from './game';
import Renderer from './renderer';
import FpsCounter from './fpsCounter';
import AI from './ai';
import Controller from './controller';
import Movement from './movement';
import Order from './order';
import CollisionDetector from './collisionDetector';
import Bouncing from './bouncing';
import Stopping from './stopping';
import TouchSensor from './touchSensor';
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
  const controller = new Controller();
  const order = new Order();
  const collisionDetector = new CollisionDetector();
  const bouncing = new Bouncing();
  const stopping = new Stopping();
  const touchSensor = new TouchSensor();
  const renderer = new Renderer(renderer_options);
  const fpsCounter = new FpsCounter();
  const ai = new AI();
  // renderer.stop();

  const game = new Game(renderer, collisionDetector, bouncing, stopping, touchSensor, controller, movement, fpsCounter, ai, order);

  const mainLoop = MainLoop;
  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  mainLoop.setUpdate(game.update);
  mainLoop.setDraw(renderer.render);
  mainLoop.start();
}

window.addEventListener('load', run);
