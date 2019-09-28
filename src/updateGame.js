function updateGame(gameState, loadLevel, updateSystems) {

    return function(delta) {
	if (gameState.global.exitLevelCommand) {
	    loadLevel(gameState);
	}
	updateSystems(gameState, delta);
    }
}

export default updateGame;
