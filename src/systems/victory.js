class Victory {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.victory_components = components.victories;
    this.variable_components = components.variables;
  }

  update() {
    let victory;

    Object.keys(this.victory_components).forEach(id => {
      if (this.variable_components[this.victory_components[id].variable].value === true) {
        victory = true;
      }
    });
    return victory;
  }

}

export default Victory;
