import Victor from 'victor';

function updateRotators(gameState) {

    const rotator_components = gameState.currentLevel.rotators;
    const interpreter_components = gameState.currentLevel.interpreters;
    const order_components = gameState.currentLevel.orders;
    const shape_components = gameState.currentLevel.shapes;

    Object.keys(rotator_components).forEach(id => {
        const rotators = rotator_components[id];
        Object.keys(rotators).forEach(rotator => {
            if (rotator != "componentType") {
                if (interpreter_components[id][rotator].some(order => order_components[id][order] === true)) {
                    shape_components[id].angle += (rotators[rotator].speed * rotators[rotator].direction);
                }
            }
        });
    });
}

export default updateRotators;
