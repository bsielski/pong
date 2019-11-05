function pipe(functions, args) {
    let output = functions[0](...args);
    
    functions.slice(1).forEach(function(f) {
        output = f(output)
    });
    output;
    return output;
}

// function pipe(...ops) {
//     function _pipe(a, b) {
//         return function (args) {
//             return b(a(arg));
//         }
//     }
//     return ops.reduce(_pipe);
// }


function updateOperations(gameState) {

    const operation_components = gameState.currentLevel.operation;
    const variable_components = gameState.currentLevel.variable;

    Object.keys(operation_components).forEach(function(operation_id) {
        const operation = operation_components[operation_id];
        const args = operation.args.map(function(v_id){
            return variable_components[v_id].value;
        });
        variable_components[operation.target].value = pipe(operation.pipe, args);
    });   
}

export default updateOperations;
