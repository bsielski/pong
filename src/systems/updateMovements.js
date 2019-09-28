import Victor from 'victor';

function updateMovements(gameState, delta) {

    const movement_components = gameState.currentLevel.movements;
    const position_components = gameState.currentLevel.positions;
    const variable_components = gameState.currentLevel.variables;

    Object.keys(movement_components).forEach(id => {
        if (!movement_components[id].enabled || variable_components[movement_components[id].enabled].value === true) {
            if (movement_components[id].speed < movement_components[id].minSpeed) {
                movement_components[id].speed = movement_components[id].minSpeed
            }
            else if (movement_components[id].speed > movement_components[id].maxSpeed) {
                movement_components[id].speed = movement_components[id].maxSpeed
            }
            const vector = new Victor(movement_components[id].speed, 0).rotate(movement_components[id].angle);
            position_components[id].x += (vector.x * delta);
            position_components[id].y += (vector.y * delta);
        }
    });
}

export default updateMovements;
