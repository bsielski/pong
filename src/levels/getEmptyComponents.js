function getEmptyComponents() {

  const Components = {
    positions: {},
    shapes: {},
    bodies: {},
    collisions: {},
    conditions: {},
    logicalAnds: {},
    logicalOrs: {},
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
    victories: {},
    defeats: {},
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
