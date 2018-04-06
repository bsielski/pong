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
      this.variable_components[this.timer_components[id].variable].value += (delta / 1000);
    });
  }

}

export default Timer;
