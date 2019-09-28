function updateLogicalOrs(gameState) {

    const logicalOr_components = gameState.currentLevel.logicalOrs;
    const variable_components = gameState.currentLevel.variables;

    function isTrue(id, index, array) {
	return variable_components[id].value === true;
    }

    Object.keys(logicalOr_components).forEach(id => {
	if (logicalOr_components[id].operands.some(isTrue)) {
            variable_components[id].value = true;
	}
	else {
            variable_components[id].value = false;
	}
    });
}

export default updateLogicalOrs;
