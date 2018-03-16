import './styles.css';
import Config from './config';
import Components from './components';
import Game from './game';
import Renderer from './renderer';
import FpsCounter from './fpsCounter';
import AI from './ai';
import Controller from './controller';
import Movement from './movement';
import Order from './order';
import Physics from './physics-collisions';
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
    antialias: false
  };

  const movement = new Movement(Components.movements, Components.positions);
  const controller = new Controller(Components.orders, Components.inputs);
  const order = new Order(Components.orders, Components.movements, Components.sprites, Components.shapes);
  // const physics = new Physics(Components.shapes, Components.sensors, Components.positions, Components.movements);
  const collisionDetector = new CollisionDetector(Components.shapes, Components.positions, Components.collisions);
  const bouncing = new Bouncing(Components.bouncing, Components.collisions, Components.bodies, Components.positions, Components.movements);
  const stopping = new Stopping(Components.stopping, Components.bouncing, Components.collisions, Components.bodies, Components.positions);
  const touchSensor = new TouchSensor(Components.touchSensors, Components.collisions,Components.variables);
  const renderer = new Renderer(Components.sprites, Components.texts, Components.positions, renderer_options, Components.variables);
  const fpsCounter = new FpsCounter(Components.fpsCounters, Components.variables);
  const ai = new AI(Components.balls, Components.ai, Components.positions, Components.movements, Components.orders);
  // renderer.stop();

  const game = new Game(renderer, collisionDetector, bouncing, stopping, touchSensor,/*physics,*/ controller, movement, fpsCounter, ai, order);

  const mainLoop = MainLoop;
  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  mainLoop.setDraw(renderer.render);
  mainLoop.setUpdate(game.update);
  mainLoop.start();
}

window.addEventListener('load', run);
