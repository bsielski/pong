class SpringPivot {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.shape_components = components.shapes;
    this.springPivot_components = components.springPivots;
  }

  update(delta) {
    Object.keys(this.springPivot_components).forEach(id => {
      let springPower = this.springPivot_components[id].power;
      if (Math.abs(this.shape_components[id].angle) < springPower) {
        this.shape_components[id].angle = 0;
      }
      else {
        if (this.shape_components[id].angle > 0) {
          springPower = -springPower;
        }
        this.shape_components[id].angle += springPower;
      }
      
    });
  }
}

export default SpringPivot;
