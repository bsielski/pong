function getEmptyComponents() {

  const Components = {
    positions: {},
    shapes: {},
    bodies: {},
    collisions: {},
    bouncing: {},
    stopping: {},
    touchSensors: {},
    movementConditions: {},
    movements: {},
    sprites: {},
    inputs: {},
    orders: {},
    texts: {},
    fpsCounters: {},
    timers: {},
    ai: {},
    balls: {},
    variables: {},
    conditions: {},
    victoryConditions: {},
    defeatConditions: {},
    accelerators: {},
    rotators: {},
    orders: {},
    interpreters: {},
    frictions: {},
    springPivots: {},
    pivotLimiters: {},
  }

  return JSON.parse(JSON.stringify(Components));

}

export default getEmptyComponents;
