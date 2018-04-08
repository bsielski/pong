class Timer {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.timer_components = components.timers;
    this.variable_components = components.variables;
  }

  update(delta) {
    Object.keys(this.timer_components).forEach(id => {
      if (!this.timer_components[id].enabled || this.variable_components[this.timer_components[id].enabled].value === true) {
        this.variable_components[id].value += (delta / 1000);
      }
    });
  }

}

export default Timer;
