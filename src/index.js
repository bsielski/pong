import './styles.css';
import Config from './config';

import MainLoop from 'mainloop.js';

import getInitGameState from './level-loading/getInitGameState.js';

import KeyBinding from './keyBinding';
import LEVEL_MAP from './level-loading/levelMap';
import LevelFromFile from './level-loading/levelFromFile';
import LoadLevel from './level-loading/loadLevel';
import UpdateLevelTrace from './level-loading/updateLevelTrace';
import WhichLevelLoad from './level-loading/whichLevelLoad';

import UpdateFpsCounters from './systems/updateFpsCounters';

import UpdatePivotLimiters from './systems/updatePivotLimiters';
import UpdateSpringPivots from './systems/updateSpringPivots';
import UpdateOperations from './systems/updateOperations';
import UpdateConditions from './systems/updateConditions';
import UpdateLogicalAnds from './systems/updateLogicalAnds';
import UpdateLogicalOrs from './systems/updateLogicalOrs';
import UpdateStops from './systems/updateStops';
import UpdateRotators from './systems/updateRotators'; 
import UpdateController from './systems/updateController';
import UpdateAIs  from './systems/updateAIs';
import UpdateAccelerators from './systems/updateAccelerators';
import UpdateTimers from './systems/updateTimers';
import UpdateMovements from './systems/updateMovements';
import UpdateCollisionDetectors from './systems/updateCollisionDetectors'
import UpdateFrictions from './systems/updateFrictions';
import UpdateBouncings from './systems/updateBouncings'
import UpdateTouchSensors from './systems/updateTouchSensors';
import UpdateExitLevel from './systems/updateExitLevel';
import UpdateRenderer from './systems/updateRenderer';
import UpdateShapeRenderer from './systems/updateShapeRenderer';
import UpdateNullShapeRenderer from './systems/updateNullShapeRenderer';
import UpdateSystems from './systems/updateSystems';
import UpdateGame from './updateGame';

function run() {
    const gameState = getInitGameState();

    const renderer_options = {
        width: Config.WORLD_WIDTH,
        height: Config.WORLD_HEIGHT,
        backgroundColor: Config.BG_COLOR,
        antialias: true,//false,
        autoStart: false
    };

    let updateShapeRenderer = UpdateNullShapeRenderer;
    if (process.env.NODE_ENV == "development") {
        updateShapeRenderer = UpdateShapeRenderer();
    }

    const updateRenderer = UpdateRenderer(gameState, renderer_options);

    const systems = [
        UpdateController(KeyBinding),
        UpdateAIs,
        UpdateAccelerators,
        UpdateRotators,
        UpdatePivotLimiters,
        UpdateSpringPivots,
        UpdateMovements,
        UpdateFrictions,
        UpdateCollisionDetectors(),
        UpdateBouncings,
        UpdateStops,
        UpdateTouchSensors,
        UpdateConditions,
        UpdateLogicalAnds,
        UpdateLogicalOrs,
        UpdateOperations,
        UpdateTimers,
        UpdateFpsCounters,
        UpdateExitLevel,
        updateShapeRenderer
    ];

    const whichLevelLoad = WhichLevelLoad(LEVEL_MAP);
    const loadLevel = LoadLevel(whichLevelLoad, LevelFromFile, UpdateLevelTrace);
    const updateSystems = UpdateSystems(systems);
    const updateGame = UpdateGame(gameState, loadLevel, updateSystems);

    MainLoop.setMaxAllowedFPS(Config.MAX_FPS);
    MainLoop.setUpdate(updateGame);
    MainLoop.setDraw(updateRenderer);
    MainLoop.start();
}

window.addEventListener('load', run);
