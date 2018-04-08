class LogicalAnd {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
    this.isTrue = this.isTrue.bind(this);
  }

  loadLevel(components) {
    this.logicalAnd_components = components.logicalAnds;
    this.variable_components = components.variables;
  }

  isTrue(id, index, array) {
    return this.variable_components[id].value === true;
  }

  update() {
    Object.keys(this.logicalAnd_components).forEach(id => {
      if (this.logicalAnd_components[id].every(this.isTrue)) {
        this.variable_components[id].value = true;
      }
      else {
        this.variable_components[id].value = false;
      }
    });
  }

}

export default LogicalAnd;
