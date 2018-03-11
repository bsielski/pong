import MainLoop from 'mainloop.js';

class Rules {

  constructor(rulesDetectors_components, rulesFps_components, sensor_components, text_components) {
    this.rulesDetectors_components = rulesDetectors_components;
    this.rulesFps_components = rulesFps_components;
    this.text_components = text_components;
    this.sensor_components = sensor_components;
    this.sensor_states = {};
    Object.keys(this.sensor_components).forEach(id => {
      this.sensor_states[id] = {last: false, current: false, points: 0};
    });

    this.update = this.update.bind(this);
  }

  update() {
    Object.keys(this.rulesFps_components).forEach(id => {
      const fpsNumber = Math.round(MainLoop.getFPS());
      // console.log(fpsNumber);
      this.text_components[id].content = fpsNumber + " fps";
    });

    Object.keys(this.rulesDetectors_components).forEach(id => {
      const sensor_state = this.sensor_states[this.rulesDetectors_components[id].zone];
      sensor_state.last = sensor_state.current;
      sensor_state.current = this.sensor_components[this.rulesDetectors_components[id].zone].detected;
      if (sensor_state.last === false && sensor_state.current === true) {
        sensor_state.points += 1;
        this.text_components[this.rulesDetectors_components[id].counter].content = sensor_state.points ;
      }
    });

  }

}

export default Rules;
