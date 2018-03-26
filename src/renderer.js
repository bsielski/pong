import {Sprite, Application, Texture, Point, TextStyle, Text} from 'pixi.js';

class Renderer {

  constructor(renderer_options) {
    this.renderer_options = renderer_options;
    this.app = new Application(this.renderer_options);
    document.getElementById("game_container").appendChild(this.app.view);

    this.loadLevel = this.loadLevel.bind(this);
    this.render = this.render.bind(this);
  }

  loadLevel(components) {
    this.app.stage.removeChildren();
    this.sprite_components = components.sprites;
    this.text_components = components.texts;
    this.variable_components = components.variables;
    this.position_components = components.positions;
    this.shape_components = components.shapes;
    this.sprites = {};
    Object.keys(this.sprite_components).forEach(id => {
      const sprite = new Sprite(Texture.fromImage(this.sprite_components[id].image));
      sprite.x = this.position_components[id].x;
      sprite.y = this.position_components[id].y;
      sprite.width = this.sprite_components[id].width;
      sprite.height = this.sprite_components[id].height;
      sprite.alpha = this.sprite_components[id].opacity;
      sprite.rotation = this.position_components[id].angle + this.sprite_components[id].angle;
      if (this.shape_components[id]) { sprite.rotation += this.shape_components[id].angle }
      sprite.tint = this.sprite_components[id].color;
      sprite.anchor = new Point(0.5, 0.5);
      this.app.stage.addChild(sprite);
      this.sprites[id] = sprite;
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
    });

  }

  render() {

    Object.keys(this.texts).forEach(id => {
      this.texts[id].text = this.variable_components[this.text_components[id].variable].value;
    });
    Object.keys(this.sprites).forEach(id => {
      this.sprites[id].x = this.position_components[id].x;
      this.sprites[id].y = this.position_components[id].y;
      this.sprites[id].rotation = this.position_components[id].angle + this.sprite_components[id].angle;
      if (this.shape_components[id]) { this.sprites[id].rotation += this.shape_components[id].angle }
    });
    this.app.render();
  }

}

export default Renderer;
