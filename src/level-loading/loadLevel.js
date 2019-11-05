function loadLevel(whichLevelLoad, levelFromFile, updateLevelTrace) {
    return function (gameState) {
        const {command, newLevelName} = whichLevelLoad(gameState);
        gameState.currentLevel = levelFromFile(newLevelName);
        updateLevelTrace(gameState, command, newLevelName);
        gameState.global.exitLevelCommand = null;
    };
}

export default loadLevel;
