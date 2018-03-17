import MainLoop from 'mainloop.js';

class FpsCounter {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.fpsCounter_components = components.fpsCounters;
    this.variable_components = components.variables;
  }

  update() {
    Object.keys(this.fpsCounter_components).forEach(id => {
      const fpsNumber = Math.round(MainLoop.getFPS());
      // console.log(fpsNumber);
      this.variable_components[this.fpsCounter_components[id].variable].value = fpsNumber + " fps";
    });

  }

}

export default FpsCounter;
