function updateTimers(gameState, delta) {

    const timer_components = gameState.currentLevel.timers;
    const variable_components = gameState.currentLevel.variables;
    Object.keys(timer_components).forEach(id => {
        if (!timer_components[id].enabled || variable_components[timer_components[id].enabled].value === true) {
            variable_components[id].value += (delta / 1000);
        }
    });
}

export default updateTimers;
