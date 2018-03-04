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

  app.stage.addChild(new PIXI.Sprite(PIXI.loader.resources.skull.texture));

}

window.addEventListener('load', loadResources);
