import Victor from 'victor';

function updateAccelerators(gameState) {

    const accelerator_components = gameState.currentLevel.accelerators;
    const interpreter_components = gameState.currentLevel.interpreters;
    const order_components = gameState.currentLevel.orders;
    const movement_components = gameState.currentLevel.movements;
    const position_components = gameState.currentLevel.positions;

    Object.keys(accelerator_components).forEach(id => {
        const accelerators = accelerator_components[id];
        Object.keys(accelerators).forEach(accelerator => {
            if (accelerator != "componentType") {
                const accVector = new Victor(accelerators[accelerator].acceleration, 0);
                accVector.rotate(accelerators[accelerator].angle + position_components[id].angle);
                const moveVector = new Victor(movement_components[id].speed, 0);
                moveVector.rotate(movement_components[id].angle);

                if (interpreter_components[id][accelerator].some(order => order_components[id][order] === true)) {
                    moveVector.add(accVector);
                }
                movement_components[id].angle = moveVector.angle();
                movement_components[id].speed = moveVector.length();
            }
        });
    });
}

export default updateAccelerators;
