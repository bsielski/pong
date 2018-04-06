class MovementCondition {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.movement_components = components.movements;
    this.variable_components = components.variables;
    this.movementCondition_components = components.movementConditions;
  }

  checkCondition(left, operator, right) {
    function greaterThan(left, right) {return left > right;}
    function lessThan(left, right) {return left < right;}
    function greaterOrEqualThan(left, right) {return left >= right;}
    function lessOrEqualThan(left, right) {return left <= right;}
    if (operator === ">") {return greaterThan(left, right)}
    else if (operator === "<") {return lessThan(left, right)}
    else if (operator === ">=") {return greaterOrEqualThan(left, right)}
    else if (operator === "<=") {return lessOrEqualThan(left, right)}
  }

  update(delta) {
    Object.keys(this.movementCondition_components).forEach(id => {
      const condition = this.movementCondition_components[id];
      if (this.checkCondition(this.variable_components[condition.leftVariable].value, condition.operator, condition.rightVariable)) {
        this.movement_components[id].enabled = true;
      }
      else {
        this.movement_components[id].enabled = false;
      }
    });
  }
}

export default MovementCondition;
