class Defeat {

  constructor() {

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.defeatCondition_components = components.defeatConditions;
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
    const alternativeDefeats = [];
    Object.keys(this.defeatCondition_components).forEach(id => {
      const requiredConditions = [];
      this.defeatCondition_components[id].forEach(conditionId => {
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
        alternativeDefeats.push(true);
      }
      else {
        alternativeDefeats.push(false);
      }
    });
    if (alternativeDefeats.includes(true)) {
      // console.log('alternativeDefeats: %O', alternativeDefeats);
      return true;
    }
  }
}

export default Defeat;
