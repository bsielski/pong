function updatePivotLimiters(gameState) {

    const shape_components = gameState.currentLevel.shape;
    const pivotLimiter_components = gameState.currentLevel.pivotLimiter;

    Object.keys(pivotLimiter_components).forEach(id => {
      if (shape_components[id].angle < pivotLimiter_components[id].minAngle) {
        shape_components[id].angle = pivotLimiter_components[id].minAngle
      }
      else if (shape_components[id].angle > pivotLimiter_components[id].maxAngle) {
        shape_components[id].angle = pivotLimiter_components[id].maxAngle
      }
    });
}

export default updatePivotLimiters;
