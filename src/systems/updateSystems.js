function updateSystems(systems) {
    return function(gameState, delta) {
        systems.forEach(function(system){system(gameState, delta)});
    }
}

export default updateSystems;
