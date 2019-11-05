function updateTimers(gameState, delta) {

    const timer_components = gameState.currentLevel.timer;
    const variable_components = gameState.currentLevel.variable;

    Object.keys(timer_components).forEach(id => {

        if (variable_components[timer_components[id].state].value === "running") {
            variable_components[timer_components[id].seconds].value += (delta / 1000);
        }
    });
}

export default updateTimers;
