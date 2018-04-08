class Condition {

  constructor() {

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.condition_components = components.conditions;
    this.variable_components = components.variables;
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

  update() {

    Object.keys(this.condition_components).forEach(id => {
      const condition = this.condition_components[id];
      const leftValue = this.variable_components[condition.leftVariable].value;
      const rightValue = this.variable_components[condition.rightVariable].value;
      if (this.checkCondition(leftValue, condition.operator, rightValue)) {
        this.variable_components[id].value = true;
      }
      else {
        this.variable_components[id].value = false;
      }
    });
  }

}

export default Condition;
