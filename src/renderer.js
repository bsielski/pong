import {Sprite, Application, Texture, Point, TextStyle, Text} from 'pixi.js';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';


// this.skull = new Sprite(Texture.fromImage(SKULL));
// this.skull.x = 100;
// this.skull.y = 100;
// this.skull.tint = 0xff00ee;
// this.skull.anchor = new Point(0.5, 0.5);
// this.app.stage.addChild(this.skull);
// this.skull.rotation += 0.01;


class Renderer {

  constructor(sprite_components, text_components, position_components, renderer_options) {
    this.renderer_options = renderer_options;
    this.sprite_components = sprite_components;
    this.text_components = text_components;
    this.position_components = position_components;
    this.app = new Application(this.renderer_options);
    document.getElementById("game_container").appendChild(this.app.view);
    this.sprites = {};
    Object.keys(this.sprite_components).forEach(id => {
      const sprite = new Sprite(Texture.fromImage(sprite_components[id].image));
      sprite.x = this.position_components[id].x;
      sprite.y = this.position_components[id].y;
      sprite.width = this.sprite_components[id].width;
      sprite.height = this.sprite_components[id].height;
      sprite.alpha = this.sprite_components[id].opacity;
      sprite.anchor = new Point(0.5, 0.5);
      this.app.stage.addChild(sprite);
      this.sprites[id] = sprite;
      // console.log("Render position: " + sprite.x + " " + sprite.y);
    });
    this.texts = {};
    this.textSstyle = new TextStyle({
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
    Object.keys(this.text_components).forEach(id => {
      const style = Object.assign({}, this.textSstyle, {fontSize: this.text_components[id].size})
      const text = new Text(this.text_components[id].content, style);
      text.x = this.position_components[id].x;
      text.y = this.position_components[id].y;
      text.alpha = this.text_components[id].opacity;
      text.anchor = new Point(0.5, 0.5);
      this.app.stage.addChild(text);
      this.texts[id] = text;
      // console.log("Render position: " + sprite.x + " " + sprite.y);
    });

    this.render = this.render.bind(this);
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
  }

  render() {
    // this.simCounter.text = MainLoop.getSimulationTimestep();
    // this.fpsCounter.text = "asd";
    Object.keys(this.texts).forEach(id => {
      this.texts[id].text = this.text_components[id].content;
    });
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
