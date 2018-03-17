import {Sprite, Application, Texture, Point, TextStyle, Text} from 'pixi.js';
// import SKULL from './skull.png';
// import LOLPIXELS from './lolpixels.png';


// this.skull.tint = 0xff00ee;
// this.skull.rotation += 0.01;


class Renderer {

  constructor(renderer_options) {
    this.renderer_options = renderer_options;

    this.loadLevel = this.loadLevel.bind(this);
    this.render = this.render.bind(this);
  }

  loadLevel(components) {
    this.app = new Application(this.renderer_options);
    document.getElementById("game_container").appendChild(this.app.view);
    this.sprite_components = components.sprites;
    this.text_components = components.texts;
    this.variable_components = components.variables;
    this.position_components = components.positions;
    this.sprites = {};
    Object.keys(this.sprite_components).forEach(id => {
      const sprite = new Sprite(Texture.fromImage(this.sprite_components[id].image));
      sprite.x = this.position_components[id].x;
      sprite.y = this.position_components[id].y;
      sprite.width = this.sprite_components[id].width;
      sprite.height = this.sprite_components[id].height;
      sprite.alpha = this.sprite_components[id].opacity;
      if (this.sprite_components[id].angle) {sprite.rotation = this.sprite_components[id].angle;}
      sprite.tint = this.sprite_components[id].color;
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
      stroke: '#000000',
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 3,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 5,
    });
    Object.keys(this.text_components).forEach(id => {
      const style = Object.assign
      (
        {},
        this.textSstyle,
        {
          fontSize: this.text_components[id].size,
          fill: this.text_components[id].color,
        }
      )
      const text = new Text(this.variable_components[this.text_components[id].variable].value, style);
      text.x = this.position_components[id].x;
      text.y = this.position_components[id].y;
      text.alpha = this.text_components[id].opacity;
      text.anchor = new Point(0.5, 0.5);
      this.app.stage.addChild(text);
      this.texts[id] = text;
      // console.log("Render position: " + sprite.x + " " + sprite.y);
    });

  }

  render() {
    // this.simCounter.text = MainLoop.getSimulationTimestep();
    // this.fpsCounter.text = "asd";
    Object.keys(this.texts).forEach(id => {
      this.texts[id].text = this.variable_components[this.text_components[id].variable].value;
    });
    Object.keys(this.sprites).forEach(id => {
      this.sprites[id].rotation = this.sprite_components[id].angle;
      this.sprites[id].x = this.position_components[id].x;
      this.sprites[id].y = this.position_components[id].y;
    });
    this.app.render();
  }

}

export default Renderer;
