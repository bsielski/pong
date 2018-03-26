import Const from './constants';
import getEmptyComponents from './getEmptyComponents';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';
import {v4} from 'uuid';

function getLevel00titleScreen() {

  const uuid = v4;
  const Components = getEmptyComponents();


    const playerPaddleId = uuid();
    Components.shapes[playerPaddleId] = {width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0};
    Components.bodies[playerPaddleId] = {};
    Components.stopping[playerPaddleId] = {};
    Components.collisions[playerPaddleId] = [];
    Components.positions[playerPaddleId] = {x: Const.PADDLE_2_POSITION.X, y: Const.PADDLE_2_POSITION.Y, angle: 0};
    Components.movements[playerPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED, angle: 0, randomAngle: 0};
    Components.accelerators[playerPaddleId] = { leftAccelerator: {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION} };
    Components.orders[playerPaddleId] = {confirm: false};
    Components.interpreters[playerPaddleId] = { leftAccelerator: ["confirm"] };

    const playerPointsId = uuid();
    Components.variables[playerPointsId] = {value: 0};

    const leftZoneId = uuid();
    Components.shapes[leftZoneId] = {width: Const.WORLD_WIDTH/4, height: 20, angle: 0};
    Components.collisions[leftZoneId] = [];
    Components.positions[leftZoneId] = {x: 155 /*Const.WORLD_WIDTH/4*/, y: Const.WORLD_HEIGHT - 25, angle: 0};
    Components.touchSensors[leftZoneId] = {seeking: playerPaddleId, last: false, current: false, variable: playerPointsId, operation: +1};

    const pointsNeededByPlayerId = uuid();
    Components.variables[pointsNeededByPlayerId] = {value: 1};

    const have10pointsId = uuid();
    Components.conditions[have10pointsId] = {leftVariable: playerPointsId, operator: ">=", rightVariable: pointsNeededByPlayerId};

    const victoryConditionsId = uuid();
    Components.victoryConditions[victoryConditionsId] = [have10pointsId];

    const gameTitleId = uuid();
    Components.variables[gameTitleId] = {value: "The Stupid Pong"};

    const gameTitleTextId = uuid();
    Components.texts[gameTitleTextId] = {size: 52, variable: gameTitleId, color: 0xffffff, angle: 0, opacity: 0.6};
    Components.positions[gameTitleTextId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4, angle: 0};

    const gameSubTitleId = uuid();
    Components.variables[gameSubTitleId] = {value: "The Game"};

    const gameSubTitleTextId = uuid();
    Components.texts[gameSubTitleTextId] = {size: 35, variable: gameSubTitleId, color: 0xffffff, angle: 0, opacity: 0.6};
    Components.positions[gameSubTitleTextId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4 + 70, angle: 0};

    const manualMessageId = uuid();
    Components.variables[manualMessageId] = {value: "Press Enter to continue"};

    const manualMessageTextId = uuid();
    Components.texts[manualMessageTextId] = {size: 17, variable: manualMessageId, color: 0xffffff, angle: 0, opacity: 0.6};
    Components.positions[manualMessageTextId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4 + 180, angle: 0};


    return JSON.parse(JSON.stringify(Components));
  }

export default getLevel00titleScreen;
