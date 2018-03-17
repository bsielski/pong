class TouchSensor {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.touchSensor_components = components.touchSensors;
    this.variable_components = components.variables;
    this.collision_components = components.collisions;
  }
  update() {
    Object.keys(this.touchSensor_components).forEach(id => {
      const sensor = this.touchSensor_components[id];
      sensor.last = sensor.current;
      sensor.current = false;
      this.collision_components[id].forEach(collision => {
        if (sensor.seeking === collision.bId) {
          sensor.current = true;
          if (sensor.last === false && sensor.current === true) {
            this.variable_components[sensor.variable].value += sensor.operation;
          }
        }
      });
    });
  }

}

export default TouchSensor;
