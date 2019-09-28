function updateTouchSensors(gameState) {

    const touchSensor_components = gameState.currentLevel.touchSensors;
    const variable_components = gameState.currentLevel.variables;
    const collision_components = gameState.currentLevel.collisions;

    Object.keys(touchSensor_components).forEach(id => {
	const sensor = touchSensor_components[id];
	sensor.last = sensor.current;
	sensor.current = false;
	collision_components[id].collisions.forEach(collision => {
            if (sensor.seeking === collision.bId) {
		sensor.current = true;
		if (sensor.last === false && sensor.current === true) {
		    variable_components[sensor.variable].value += sensor.operation;
		}
            }
	});
    });
}

export default updateTouchSensors;
