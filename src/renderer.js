import * as PIXI from 'pixi.js'
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';


class Renderer {

  constructor(body_components, position_components, renderer_options) {
    this.renderer_options = renderer_options;
    this.body_components = body_components;
    this.position_components = position_components;
    this.app = new PIXI.Application(this.renderer_options);
    document.body.appendChild(this.app.view);
    this.update = this.update.bind(this);
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    this.skull = new PIXI.Sprite(PIXI.Texture.fromImage(SKULL));
    this.skull.x = 150;
    this.skull.y = 150;
    this.skull.tint = 0xff00ee;
    this.skull.anchor = new PIXI.Point(0.5, 0.5);
    this.sprites = {};
    Object.keys(this.body_components).forEach(id => {
      const sprite = new PIXI.Sprite(PIXI.Texture.fromImage(LOLPIXELS));
      sprite.x = this.position_components[id].x;
      sprite.y = this.position_components[id].y;
      sprite.width = this.body_components[id].width;
      sprite.height = this.body_components[id].height;
      sprite.anchor = new PIXI.Point(0.5, 0.5);
      this.app.stage.addChild(sprite);
      this.sprites[id] = sprite;
    });

    // skull.cacheAsBitmap = true;
    this.app.stage.addChild(this.skull);
    this.app.ticker.add(this.update);
  }

  start() {
    this.app.start();
  }

  stop() {
    this.app.stop();
  }

  update() {
    this.skull.rotation += 0.01;
    Object.keys(this.sprites).forEach(id => {
      this.sprites[id].x = this.position_components[id].x;
      this.sprites[id].y = this.position_components[id].y;
    });
  }

}

export default Renderer;
