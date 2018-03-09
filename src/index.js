import './styles.css';
import Config from './config';
import Components from './components';
import Game from './game';
import Renderer from './renderer';
import Rules from './rules';
import Controller from './controller';
import Movement from './movement';
// import Physics from './physics-matter';
// import Physics from './physics-p2';
// import Physics from './physics-planck';
// import Physicsx from './physics-physicsjs';
// import Physics from './physics-chipmunk';
import Physics from './physics-collisions';
import MainLoop from 'mainloop.js';


function run() {

  const renderer_options = {
    width: Config.WORLD_WIDTH,
    height: Config.WORLD_HEIGHT,
    backgroundColor: Config.BG_COLOR,
  };

  const movement = new Movement(Components.movements, Components.positions);
  const controller = new Controller(Components.positions, Components.inputs);
  const physics = new Physics(Components.bodies, Components.positions, Components.movements);
  const renderer = new Renderer(Components.sprites, Components.texts, Components.positions, renderer_options);
  const rules = new Rules(Components.rulesFps, Components.texts);
  renderer.stop();

  const game = new Game(renderer, physics, controller, movement, rules);

  const mainLoop = MainLoop;
  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  mainLoop.setDraw(renderer.render);
  mainLoop.setUpdate(game.update);
  mainLoop.start();
}

window.addEventListener('load', run);
