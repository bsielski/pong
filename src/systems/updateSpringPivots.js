function updateSpringPivots(gameState) {

    const shape_components = gameState.currentLevel.shape;
    const springPivot_components = gameState.currentLevel.springPivot;

    Object.keys(springPivot_components).forEach(id => {
      let springPower = springPivot_components[id].power;
      if (Math.abs(shape_components[id].angle) < springPower) {
        shape_components[id].angle = 0;
      }
      else {
        if (shape_components[id].angle > 0) {
          springPower = -springPower;
        }
        shape_components[id].angle += springPower;
      }      
    });
}

export default updateSpringPivots;
