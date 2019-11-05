function updateFrictions(gameState, delta) {

    const movement_components = gameState.currentLevel.movement;
    const friction_components = gameState.currentLevel.friction;
    Object.keys(friction_components).forEach(id => {
      movement_components[id].speed -= (friction_components[id].value * delta);
      if (movement_components[id].speed < movement_components[id].minSpeed) {
        movement_components[id].speed = movement_components[id].minSpeed
      }
    });
}

export default updateFrictions;
