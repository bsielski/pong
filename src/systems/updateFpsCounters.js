import MainLoop from 'mainloop.js';

function updateFpsCounters(gameState) {
    const fpsCounter_components = gameState.currentLevel.fpsCounters;
    const variable_components = gameState.currentLevel.variables;

    Object.keys(fpsCounter_components).forEach(id => {
      const fpsNumber = Math.round(MainLoop.getFPS());
      variable_components[fpsCounter_components[id].variable].value = fpsNumber + " fps";
    });
}

export default updateFpsCounters;
