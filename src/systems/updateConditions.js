function updateConditions(gameState) {

    const condition_components = gameState.currentLevel.condition;
    const variable_components = gameState.currentLevel.variable;

    function checkCondition(left, operator, right) {
        function greaterThan(left, right) {return left > right;}
        function lessThan(left, right) {return left < right;}
        function greaterOrEqualThan(left, right) {return left >= right;}
        function lessOrEqualThan(left, right) {return left <= right;}
        if (operator === ">") {return greaterThan(left, right)}
        else if (operator === "<") {return lessThan(left, right)}
        else if (operator === ">=") {return greaterOrEqualThan(left, right)}
        else if (operator === "<=") {return lessOrEqualThan(left, right)}
    }

    Object.keys(condition_components).forEach(id => {
        const condition = condition_components[id];
        const leftValue = variable_components[condition.leftVariable].value;
        const rightValue = variable_components[condition.rightVariable].value;
        
        if (checkCondition(leftValue, condition.operator, rightValue)) {
            variable_components[id].value = true;
        }
        else {
            variable_components[id].value = false;
        }
    });

}

export default updateConditions;
