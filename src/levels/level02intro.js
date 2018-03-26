import Const from './constants';
import getEmptyComponents from './getEmptyComponents';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';
import {v4} from 'uuid';

function getLevel02intro() {

  const uuid = v4;
  const Components = getEmptyComponents();

  const playerPaddleId = uuid();
  Components.shapes[playerPaddleId] = {width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0};
  Components.bodies[playerPaddleId] = {};
  Components.stopping[playerPaddleId] = {};
  Components.collisions[playerPaddleId] = [];
  Components.sprites[playerPaddleId] = {width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 1};
  Components.positions[playerPaddleId] = {x: Const.PADDLE_2_POSITION.X, y: Const.PADDLE_2_POSITION.Y, angle: 0};
  Components.movements[playerPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: 1, angle: 0, randomAngle: 0};
  Components.frictions[playerPaddleId] = {value: 0.003};
  Components.springPivots[playerPaddleId] = {power: 0.09};
  Components.pivotLimiters[playerPaddleId] = {minAngle: -0.15, maxAngle: 0.15};
  Components.accelerators[playerPaddleId] = { leftAccelerator: {angle: Math.PI, acceleration: 0.3},
                                              rightAccelerator: {angle: 0, acceleration: 0.3} };
  Components.rotators[playerPaddleId] = { rightRotator: {speed: 0.3, direction: 1}, leftRotator: {speed: 0.3, direction: -1} };
  Components.orders[playerPaddleId] = {playerPaddleLeft: false, confirm: false, playerPaddleRight: false};
  Components.interpreters[playerPaddleId] = { leftAccelerator: ["playerPaddleLeft", "confirm"],
                                              rightAccelerator: ["playerPaddleRight"],
                                              leftRotator: ["playerPaddleLeft", "confirm"],
                                              rightRotator: ["playerPaddleRight"],
                                             };

  const playerPointsId = uuid();
  Components.variables[playerPointsId] = {value: 0};

  const leftZoneId = uuid();
  Components.shapes[leftZoneId] = {width: Const.WORLD_WIDTH/4, height: 20, angle: 0};
  Components.collisions[leftZoneId] = [];
  Components.positions[leftZoneId] = {x: 0 /*Const.WORLD_WIDTH/4*/, y: Const.WORLD_HEIGHT - 25, angle: 0};
  Components.touchSensors[leftZoneId] = {seeking: playerPaddleId, last: false, current: false, variable: playerPointsId, operation: +1};

  const rightZoneId = uuid();
  Components.shapes[rightZoneId] = {width: Const.WORLD_WIDTH/4, height: 20, angle: 0};
  Components.collisions[rightZoneId] = [];
  Components.positions[rightZoneId] = {x: Const.WORLD_WIDTH/*Const.WORLD_WIDTH/4*3*/, y: Const.WORLD_HEIGHT - 25, angle: 0};
  Components.touchSensors[rightZoneId] = {seeking: playerPaddleId, last: false, current: false, variable: playerPointsId, operation: +1};

  const pointsNeededByPlayerId = uuid();
  Components.variables[pointsNeededByPlayerId] = {value: 1};

  const have10pointsId = uuid();
  Components.conditions[have10pointsId] = {leftVariable: playerPointsId, operator: ">=", rightVariable: pointsNeededByPlayerId};

  const victoryConditionsId = uuid();
  Components.victoryConditions[victoryConditionsId] = [have10pointsId];

  return JSON.parse(JSON.stringify(Components));
}

export default getLevel02intro;
