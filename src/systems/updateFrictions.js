function updateFrictions(gameState, delta) {

    const movement_components = gameState.currentLevel.movements;
    const friction_components = gameState.currentLevel.frictions;
    Object.keys(friction_components).forEach(id => {
      movement_components[id].speed -= (friction_components[id].value * delta);
      if (movement_components[id].speed < movement_components[id].minSpeed) {
        movement_components[id].speed = movement_components[id].minSpeed
      }
    });
}

export default updateFrictions;
