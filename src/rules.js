// this.skull = new Sprite(Texture.fromImage(SKULL));
// this.skull.x = 100;
// this.skull.y = 100;
// this.skull.tint = 0xff00ee;
// this.skull.anchor = new Point(0.5, 0.5);
// this.app.stage.addChild(this.skull);
// this.skull.rotation += 0.01;

import MainLoop from 'mainloop.js';

class Rules {

  constructor(rulesFps_components, text_components,) {
    this.rulesFps_components = rulesFps_components;
    this.text_components = text_components;

    this.update = this.update.bind(this);
  }

  update() {
    Object.keys(this.rulesFps_components).forEach(id => {
      const fpsNumber = Math.round(MainLoop.getFPS());
      // console.log(fpsNumber);
      this.text_components[id].content = fpsNumber + " fps";
    });


  }

}

export default Rules;
