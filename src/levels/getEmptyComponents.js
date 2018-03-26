function getEmptyComponents() {

  const Components = {
    positions: {},
    shapes: {},
    bodies: {},
    collisions: {},
    bouncing: {},
    stopping: {},
    touchSensors: {},
    movements: {},
    sprites: {},
    inputs: {},
    orders: {},
    texts: {},
    fpsCounters: {},
    ai: {},
    balls: {},
    variables: {},
    conditions: {},
    victoryConditions: {},
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
