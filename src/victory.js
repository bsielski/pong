class Victory {

  constructor() {

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.victoryCondition_components = components.victoryConditions;
    this.condition_components = components.conditions;
    this.variable_components = components.variables;
    this.sprite_components = components.sprites;
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
    const alternativeVictories = [];
    Object.keys(this.victoryCondition_components).forEach(id => {
      const requiredConditions = [];
      this.victoryCondition_components[id].forEach(conditionId => {
        const condition = this.condition_components[conditionId];
        // console.log();
        if (this.checkCondition(this.variable_components[condition.leftVariable].value,condition.operator,this.variable_components[condition.rightVariable].value)) {
          requiredConditions.push(true);
        }
        else {
          requiredConditions.push(false);
        }
        // console.log('requiredConditions: %O', requiredConditions);
      });
      if (requiredConditions.every(e => {return e === true})) {
        alternativeVictories.push(true);
      }
      else {
        alternativeVictories.push(false);
      }
    });
    if (alternativeVictories.includes(true)) {
      // console.log('alternativeVictories: %O', alternativeVictories);
      return true;
    }
  }
}

export default Victory;
