function updateLogicalAnds(gameState) {

    const logicalAnd_components = gameState.currentLevel.logicalAnd;
    const variable_components = gameState.currentLevel.variable;

    function isTrue(id, index, array) {
        return variable_components[id].value === true;
    }

    Object.keys(logicalAnd_components).forEach(id => {
        if (logicalAnd_components[id].every(isTrue)) {
            variable_components[id].value = true;
        }
        else {
            variable_components[id].value = false;
        }
    });
}

export default updateLogicalAnds;
