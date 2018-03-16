import MainLoop from 'mainloop.js';

class FpsCounter {

  constructor(fpsCounter_components, variable_components) {
    this.fpsCounter_components = fpsCounter_components;
    this.variable_components = variable_components;
    this.update = this.update.bind(this);
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
