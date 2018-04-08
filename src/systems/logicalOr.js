class LogicalOr {

  constructor() {

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
    this.isTrue = this.isTrue.bind(this);
  }

  loadLevel(components) {
    this.logicalOr_components = components.logicalOrs;
    this.variable_components = components.variables;
  }

  isTrue(id, index, array) {
    return this.variable_components[id].value === true;
  }

  update() {
    Object.keys(this.logicalOr_components).forEach(id => {
      if (this.logicalOr_components[id].some(this.isTrue)) {
        this.variable_components[id].value = true;
      }
      else {
        this.variable_components[id].value = false;
      }
    });
  }

}

export default LogicalOr;
