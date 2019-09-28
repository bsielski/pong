function last(array) {
    return array[array.length -1];
}

function updateExitLevel(gameState) {
    const componentId = last(gameState.global.levelTrace) + "-exitLevel";
    const passedCondition = gameState.currentLevel.exitLevel[componentId].options.find(function(condition) {
        return gameState.currentLevel.variables[condition.variable].value === true;
    });
    if (passedCondition) {
        gameState.global.exitLevelCommand = passedCondition.command;
    }
}

export default updateExitLevel;
