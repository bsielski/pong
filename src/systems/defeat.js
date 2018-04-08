class Defeat {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.defeat_components = components.defeats;
    this.variable_components = components.variables;
  }

  update() {
    let defeat;
    Object.keys(this.defeat_components).forEach(id => {
      if (this.variable_components[this.defeat_components[id].variable].value === true) {
        defeat = true;
      }
    });
    return defeat;
  }

}

export default Defeat;
