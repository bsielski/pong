class PivotLimiter {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.shape_components = components.shapes;
    this.pivotLimiter_components = components.pivotLimiters;
  }

  update(delta) {
    Object.keys(this.pivotLimiter_components).forEach(id => {
      if (this.shape_components[id].angle < this.pivotLimiter_components[id].minAngle) {
        this.shape_components[id].angle = this.pivotLimiter_components[id].minAngle
      }
      else if (this.shape_components[id].angle > this.pivotLimiter_components[id].maxAngle) {
        this.shape_components[id].angle = this.pivotLimiter_components[id].maxAngle
      }

    });
  }
}

export default PivotLimiter;
