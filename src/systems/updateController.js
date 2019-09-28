function updateController(keyBinding) {

    const keyState = {
	leftArrow: {state: false, previousState: false},
	rightArrow: {state: false, previousState: false},
	enter: {state: false, previousState: false}
    };

    const codes = {
	37: "leftArrow",
	39: "rightArrow",
	13: "enter",
    };

    return function(gameState) {

	const order_components = gameState.currentLevel.orders;
	window.addEventListener('keydown', event => {
	    if (codes[event.keyCode]) {
		keyState[codes[event.keyCode]].lastAction = "down";
	    }
	});
	window.addEventListener('keyup', event => {
	    if (codes[event.keyCode]) {
		keyState[codes[event.keyCode]].lastAction = "up";
	    }
	});

	Object.keys(order_components).forEach(id => {
	    const orders = order_components[id];
	    Object.keys(orders).forEach(order => {
		if (order != "componentType") {
		    const commands = keyBinding[order];
		    commands.forEach(command => {
			keyState[command.key].previousState = keyState[command.key].state;
			if (keyState[command.key].lastAction === "down") {
			    keyState[command.key].state = true;
			}
			else {
			    keyState[command.key].state = false;
			}
			if (command.mode === "pressed") {
			    orders[order] = keyState[command.key].state;
			}
			else if (command.mode === "single") {
			    if (keyState[command.key].state === true && keyState[command.key].previousState === false) {
				orders[order] = true;
			    }
			    else {
				orders[order] = false;
			    }
			}
		    });
		}
	    });
	});
    }
}

export default updateController;
