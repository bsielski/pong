function updateLevelTrace(gameState, command, newLevelName) {
    if (command) {
        if (command == "backToPreviousLevel") {
            gameState.global.levelTrace.pop();
        }
        else {
            gameState.global.levelTrace.push(newLevelName);
        }
    }
}

export default updateLevelTrace;
