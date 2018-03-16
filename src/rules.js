import MainLoop from 'mainloop.js';

class Rules {

  constructor(rulesDetectors_components, rulesFps_components, sensor_components, text_components) {
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
