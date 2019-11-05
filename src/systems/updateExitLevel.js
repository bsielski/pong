function last(array) {
    return array[array.length -1];
}

function updateExitLevel(gameState) {
    const componentId = last(gameState.global.levelTrace) + "-levelExits";
    const levelExitComponents = gameState.currentLevel.levelExits;
    const passedCondition = gameState.currentLevel.levelExits[componentId].find(function(condition) {
        return gameState.currentLevel.variable[condition.variable].value === true;
    });
    if (passedCondition) {
        gameState.global.exitLevelCommand = passedCondition.command;
    }
}

export default updateExitLevel;
