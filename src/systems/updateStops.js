function updateStops(gameState) {

    const stopping_components = gameState.currentLevel.stop;
    const bouncing_components = gameState.currentLevel.bounce;
    const collision_components = gameState.currentLevel.collisions;
    const body_components = gameState.currentLevel.body;
    const position_components = gameState.currentLevel.position;

    Object.keys(stopping_components).forEach(id => {

        collision_components[id].forEach(collision => {

            if (body_components[collision.bId] && !bouncing_components[collision.bId]) {
                position_components[id].x -= collision.overlapV[0];
                position_components[id].y -= collision.overlapV[1];
            }
        });
    });    
}

export default updateStops;
