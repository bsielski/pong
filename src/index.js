import './styles.css';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import Config from './config';
import Components from './components';
import Renderer from './renderer';
import MainLoop from 'mainloop.js';

class Game {

  constructor(renderer) {
    this.renderer = renderer;
    this.start = this.start.bind(this);
    this.update = this.update.bind(this);
    this.order_components = Components.orders;
    this.position_components = Components.positions;
  }

  update(delta) {
    Object.keys(this.order_components).forEach(id => {
      if (this.order_components[id].leftOrder === "start" && this.order_components[id].rightOrder === "stop") {
        this.position_components[id].x -= Config.PLAYER_PADDLE_SPEED * delta;
      }
      else if (this.order_components[id].leftOrder === "stop" && this.order_components[id].rightOrder === "start") {
        this.position_components[id].x += Config.PLAYER_PADDLE_SPEED * delta;
      }
    });
  }

  start() {
    this.renderer.start();
  }

}

function run() {
  const renderer_options = {
    width: Config.WORLD_WIDTH,
    height: Config.WORLD_HEIGHT,
    backgroundColor: Config.BG_COLOR,
  };
  const renderer = new Renderer(Components.bodies, Components.positions, renderer_options);
  renderer.stop();

  const game = new Game(renderer);

  const mainLoop = MainLoop;
  mainLoop.setMaxAllowedFPS(Config.MAX_FPS);
  mainLoop.setSimulationTimestep(10);
  mainLoop.setDraw(renderer.render);
  mainLoop.setUpdate(game.update);
  mainLoop.start();

  // game.start();

 // setInterval(game.update, 100);
  console.log("lollolololololoo");
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: //left
        console.log("LEFT");
        Components.orders[2].leftOrder = "start";
      break;
      case 39: //right
        console.log("RIGHT");
        Components.orders[2].rightOrder = "start";
      break;
    }
  });
  window.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
      case 37: //left
        console.log("LEFT UP");
        Components.orders[2].leftOrder = "stop";
      break;
      case 39: //right
        console.log("RIGHT UP");
        Components.orders[2].rightOrder = "stop";
      break;
    }
  });

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
