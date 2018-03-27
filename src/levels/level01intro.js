import Const from './constants';
import getEmptyComponents from './getEmptyComponents';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';
import {v4} from 'uuid';

function getLevel01intro() {

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

  const levelTitleId = uuid();
  Components.variables[levelTitleId] = {value: "Level 1: Regular Pong"};

  const gameTitleTextId = uuid();
  Components.texts[gameTitleTextId] = {size: 42, variable: levelTitleId, color: 0xffffff, angle: 0, opacity: 0.6};
  Components.positions[gameTitleTextId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4, angle: 0};

  const levelManualId = uuid();
  Components.variables[levelManualId] = {value: "Left arrow - go left\nRight arrow - go right\n\nGood luck."};

  const gameSubTitleTextId = uuid();
  Components.texts[gameSubTitleTextId] = {size: 20, variable: levelManualId, color: 0xffffff, angle: 0, opacity: 0.6};
  Components.positions[gameSubTitleTextId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4 + 70, angle: 0};

  const clickEnterMessageId = uuid();
  Components.variables[clickEnterMessageId] = {value: "Press Enter to continue"};

  const manualMessageTextId = uuid();
  Components.texts[manualMessageTextId] = {size: 17, variable: clickEnterMessageId, color: 0xffffff, angle: 0, opacity: 0.6};
  Components.positions[manualMessageTextId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4 + 180, angle: 0};


  return JSON.parse(JSON.stringify(Components));
}

export default getLevel01intro;
