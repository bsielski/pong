import './styles.css';
import * as PIXI from 'pixi.js'
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import Config from './config';
import Components from './components';

function loadResources() {
  PIXI.loader.add('lolpixels', LOLPIXELS)
  .add('skull', SKULL)
  .on("progress", loadProgressHandler)
  .load(afterResourcesLoad);
}

function loadProgressHandler(loader, resource) {
  console.log("loading: " + resource.url);
  console.log("progress: " + loader.progress + "%");
}

function afterResourcesLoad() {
  const renderer_options = {
    width: Config.WORLD_WIDTH,
    height: Config.WORLD_HEIGHT,
    backgroundColor: Config.BG_COLOR,
  };
  const body_components = Components.bodies;
  const position_components = Components.positions;

  let app = new PIXI.Application(renderer_options);

  document.getElementById('game_container').appendChild(app.view);

  Object.keys(body_components).forEach(id => {
    const sprite = new PIXI.Sprite(PIXI.loader.resources.lolpixels.texture);
    sprite.x = position_components[id].x;
    sprite.y = position_components[id].y;
    sprite.width = body_components[id].width;
    sprite.height = body_components[id].height;
    sprite.anchor = new PIXI.ObservablePoint(null, null, 0.5, 0.5);
    app.stage.addChild(sprite);
  });

  const skull = new PIXI.Sprite(PIXI.loader.resources.skull.texture);
  skull.x = 150;
  skull.y = 150;
  skull.tint = 0xaaffee;
  skull.anchor = new PIXI.Point(0.5, 0.5);
  // skull.cacheAsBitmap = true;
  app.stage.addChild(skull);

  app.ticker.add(() => {
    skull.rotation += 0.01;
  });

}

class Game {

  constructor() {
    this.body_components = Components.bodies;
    this.position_components = Components.positions;
    this.app = new PIXI.Application({width: 400, height: 400});
    document.body.appendChild(this.app.view);
    this.update = this.update.bind(this);
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

  update() {
    this.skull.rotation += 0.01;
    Object.keys(this.sprites).forEach(id => {
      this.sprites[id].x = this.position_components[id].x;
      this.sprites[id].y = this.position_components[id].y;
    });
  }

}

function lol() {
  let game = new Game();
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

window.addEventListener('load', lol);
// window.addEventListener('load', loadResources);
