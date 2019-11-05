function updateTouchSensors(gameState) {

    const touchSensor_components = gameState.currentLevel.touchSensor;
    const variable_components = gameState.currentLevel.variable;
    const collision_components = gameState.currentLevel.collisions;

    const seekingIn = {
        "in": "in",
        "out": "entered",
        "exited": "entered",
        "entered": "in"
    };
    const seekingOut = {
        "in": "exited",
        "out": "out",
        "exited": "out",
        "entered": "exited"
    };

    Object.keys(touchSensor_components).forEach(id => {
        const sensor = touchSensor_components[id];
        const state = variable_components[sensor.state];
        const stateIfDetected = seekingIn[state.value];
        state.value = seekingOut[state.value]
        collision_components[id].forEach(collision => {
            if (sensor.seeking === collision.bId) {
                state.value = stateIfDetected;
            }
        });
    });
}

export default updateTouchSensors;
