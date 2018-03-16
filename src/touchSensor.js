class TouchSensor {

  constructor(touchSensor_components, collision_components, variable_components) {
    this.touchSensor_components = touchSensor_components;
    this.variable_components = variable_components;
    this.collision_components = collision_components;
    this.update = this.update.bind(this);
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
