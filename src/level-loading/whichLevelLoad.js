function last(array) {
    return array[array.length -1];
}
function secondToLast(array) {
    return array[array.length -2];
}

function whichLevelLoad(levelMap) {
    return function (gameState) {
        const currentLevelName = last(gameState.global.levelTrace);
        const command = gameState.global.exitLevelCommand;
        if (command == "backToPreviousLevel") {
            return {
                command: command,
                newLevelName: secondToLast(gameState.global.levelTrace)
            };
        }
        else {
            return {
                command: command,
                newLevelName: levelMap[currentLevelName][command]
            };
        }
    };
}

export default whichLevelLoad;
