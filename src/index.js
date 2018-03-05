import './styles.css';
import * as PIXI from 'pixi.js'
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import Config from './config';
import Components from './components';
import Renderer from './renderer';

class Game {

  constructor(renderer) {
    this.renderer = renderer;
    this.start = this. start.bind(this);

  }

  update() {

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
  game.start();

  console.log("lollolololololoo");
  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: //left
        console.log("LEFT");
        Components.positions[2].x -= 5;
      break;
      case 39: //right
        console.log("RIGHT");
        Components.positions[2].x += 5;
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
