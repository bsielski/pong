import {Sprite, Application, Texture, Point, TextStyle, Text} from 'pixi.js';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import MainLoop from 'mainloop.js';


class Renderer {

  constructor(body_components, position_components, renderer_options) {
    this.renderer_options = renderer_options;
    this.body_components = body_components;
    this.position_components = position_components;
    this.app = new Application(this.renderer_options);
    document.getElementById("game_container").appendChild(this.app.view);
    this.skull = new Sprite(Texture.fromImage(SKULL));
    this.skull.x = 100;
    this.skull.y = 100;
    this.skull.tint = 0xff00ee;
    this.skull.anchor = new Point(0.5, 0.5);
    this.sprites = {};
    Object.keys(this.body_components).forEach(id => {
      const sprite = new Sprite(Texture.fromImage(LOLPIXELS));
      sprite.x = this.position_components[id].x;
      sprite.y = this.position_components[id].y;
      sprite.width = this.body_components[id].width;
      sprite.height = this.body_components[id].height;
      sprite.anchor = new Point(0.5, 0.5);
      this.app.stage.addChild(sprite);
      this.sprites[id] = sprite;
    });
    this.style = new TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fill: "white",
      stroke: '#ff3300',
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
    });
    this.fpsCounter = new Text("00", this.style);
    this.simCounter = new Text("00", this.style);
    this.app.stage.addChild(this.fpsCounter);
    this.app.stage.addChild(this.simCounter);
    this.fpsCounter.position.set(200, 250);
    this.simCounter.position.set(200, 300);

    this.render = this.render.bind(this);
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    this.app.stage.addChild(this.skull);
  }

  render() {
    this.skull.rotation += 0.01;
    this.fpsCounter.text = MainLoop.getFPS();
    this.simCounter.text = MainLoop.getSimulationTimestep();
    // this.fpsCounter.text = "asd";
    Object.keys(this.sprites).forEach(id => {
      this.sprites[id].x = this.position_components[id].x;
      this.sprites[id].y = this.position_components[id].y;
    });
    this.app.render();
  }
  start() {
    this.app.start();
  }

  stop() {
    this.app.stop();
  }

}

export default Renderer;
