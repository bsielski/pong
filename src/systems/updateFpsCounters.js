import MainLoop from 'mainloop.js';

function updateFpsCounters(gameState) {
    const fpsCounter_components = gameState.currentLevel.fpsCounter;
    const variable_components = gameState.currentLevel.variable;

    Object.keys(fpsCounter_components).forEach(id => {
      const fpsNumber = Math.round(MainLoop.getFPS());
      variable_components[fpsCounter_components[id].variable].value = fpsNumber + " fps";
    });
}

export default updateFpsCounters;
