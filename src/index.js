import './styles.css';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import Config from './config';
import Components from './components';
import Game from './game';
import Renderer from './renderer';
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
  const renderer = new Renderer(Components.bodies, Components.positions, renderer_options);
  const physics = new Physics(Components.bodies, Components.positions, Components.movements);
  renderer.stop();

  const game = new Game(renderer, physics, controller, movement);

  const mainLoop = MainLoop;
  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  // const x = 1000 / 60;
  // mainLoop.setSimulationTimestep();
  mainLoop.setDraw(renderer.render);
  mainLoop.setUpdate(game.update);
  mainLoop.start();




  // let oldTime = new Date();
  // let lag = 0.0;
  // let gameLogicSpeed = 10;
  // while (true) {
  //     let newTime = new Date();
  //     let passedTime = newTime - oldTime;
  //     oldTime = newTime;
  //     lag += passedTime
  //
  //     while (lag >= gameLogicSpeed) {
  //         game.update();
  //         lag -= gameLogicSpeed;
  //     }
  //     renderer.render();
  // }



  // game.start();

 // setInterval(game.update, 100);
  // console.log("lollolololololoo");

}
/*
crreate renderer
create inputer
create mover
inputer.update()
mover.update()
renderer.update()

*/
window.addEventListener('load', run);
