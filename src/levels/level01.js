import Const from './constants';
import getEmptyComponents from './getEmptyComponents';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';
import {v4} from 'uuid';

function getLevel01() {

  const uuid = v4;
  const Components = getEmptyComponents();

  const enemyPaddleId = uuid();
  Components.positions[enemyPaddleId] = {x: Const.PADDLE_1_POSITION.X, y: Const.PADDLE_1_POSITION.Y, angle: Math.PI};
  Components.shapes[enemyPaddleId] = {width: Const.PADDLE_WIDTH-10, height: Const.PADDLE_HEIGHT, angle: 0};
  Components.bodies[enemyPaddleId] = {};
  Components.stopping[enemyPaddleId] = {};
  Components.collisions[enemyPaddleId] = [];
  Components.sprites[enemyPaddleId] = {width: Const.PADDLE_WIDTH-10, height: Const.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xff7777, opacity: 1.0};
  Components.movements[enemyPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED * 0.6, angle: 0, randomAngle: 0};
  Components.frictions[enemyPaddleId] = {value: Const.PADDLE_FRICTION};
  Components.springPivots[enemyPaddleId] = {power: 0.09};
  Components.pivotLimiters[enemyPaddleId] = {minAngle: -0.15, maxAngle: 0.15};
  Components.accelerators[enemyPaddleId] = { leftAccelerator: {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION},
                                              rightAccelerator: {angle: 0, acceleration: Const.PADDLE_ACCELERATION} };
  Components.rotators[enemyPaddleId] = { rightRotator: {speed: 0.3, direction: 1}, leftRotator: {speed: 0.3, direction: -1} };
  Components.orders[enemyPaddleId] = {playerPaddleLeft: false, playerPaddleRight: false, confirm: false};
  Components.interpreters[enemyPaddleId] = { leftAccelerator: ["playerPaddleLeft", "confirm"],
                                              rightAccelerator: ["playerPaddleRight"],
                                              leftRotator: ["playerPaddleLeft", "confirm"],
                                              rightRotator: ["playerPaddleRight"] };

  Components.ai[enemyPaddleId] = {};

  const playerPaddleId = uuid();
  Components.positions[playerPaddleId] = {x: Const.PADDLE_2_POSITION.X, y: Const.PADDLE_2_POSITION.Y, angle: 0};
  Components.shapes[playerPaddleId] = {width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0};
  Components.bodies[playerPaddleId] = {};
  Components.stopping[playerPaddleId] = {};
  Components.collisions[playerPaddleId] = [];
  Components.sprites[playerPaddleId] = {width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 1.0};
  Components.movements[playerPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED, angle: 0, randomAngle: 0};
  Components.frictions[playerPaddleId] = {value: Const.PADDLE_FRICTION};
  Components.springPivots[playerPaddleId] = {power: 0.09};
  Components.pivotLimiters[playerPaddleId] = {minAngle: -0.15, maxAngle: 0.15};
  Components.accelerators[playerPaddleId] = { leftAccelerator: {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION},
                                              rightAccelerator: {angle: 0, acceleration: Const.PADDLE_ACCELERATION} }
  Components.rotators[playerPaddleId] = { rightRotator: {speed: 0.3, direction: 1}, leftRotator: {speed: 0.3, direction: -1} };
  Components.orders[playerPaddleId] = {playerPaddleLeft: false, playerPaddleRight: false, confirm: false};
  Components.interpreters[playerPaddleId] = { leftAccelerator: ["playerPaddleLeft", "confirm"],
                                              rightAccelerator: ["playerPaddleRight"],
                                              leftRotator: ["playerPaddleLeft", "confirm"],
                                              rightRotator: ["playerPaddleRight"] };

  const ballId = uuid();
  Components.shapes[ballId] = {width: Const.BALL_WIDTH, height: Const.BALL_HEIGHT, angle: 0};
  Components.bodies[ballId] = {};
  Components.bouncing[ballId] = {};
  Components.collisions[ballId] = [];
  Components.sprites[ballId] = {width: Const.BALL_WIDTH, height: Const.BALL_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[ballId] = {x: 300, y: 400, angle: 0};
  Components.movements[ballId] = {minSpeed: 0.15, speed: 0.7, maxSpeed: 0.8, angle: 2, randomAngle: 1};
  Components.balls[ballId] = {};

  const leftWallId = uuid();
  Components.shapes[leftWallId] = {width: 40, height: Const.WORLD_HEIGHT, angle: 0};
  Components.bodies[leftWallId] = {};
  Components.collisions[leftWallId] = [];
  Components.sprites[leftWallId] = {width: 40, height: Const.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[leftWallId] = {x: 0, y: Const.WORLD_HEIGHT/2, angle: 0};

  const rightWallId = uuid();
  Components.shapes[rightWallId] = {width: 40, height: Const.WORLD_HEIGHT, angle: 0};
  Components.bodies[rightWallId] = {};
  Components.collisions[rightWallId] = [];
  Components.sprites[rightWallId] = {width: 40, height: Const.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[rightWallId] = {x: Const.WORLD_WIDTH, y: Const.WORLD_HEIGHT/2, angle: 0};

  const toptWallId = uuid();
  Components.shapes[toptWallId] = {width: Const.WORLD_WIDTH, height: 40, angle: 0};
  Components.bodies[toptWallId] = {};
  Components.collisions[toptWallId] = [];
  Components.sprites[toptWallId] = {width: Const.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[toptWallId] = {x: Const.WORLD_WIDTH/2, y: 0, angle: 0};

  const bottomWallId = uuid();
  Components.shapes[bottomWallId] = {width: Const.WORLD_WIDTH, height: 40, angle: 0};
  Components.bodies[bottomWallId] = {};
  Components.collisions[bottomWallId] = [];
  Components.sprites[bottomWallId] = {width: Const.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[bottomWallId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT, angle: 0};

  const netId = uuid();
  Components.sprites[netId] = {width: Const.WORLD_WIDTH, height: 10, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 0.2};
  Components.positions[netId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/2, angle: 0};

  const fpsNumberId = uuid();
  Components.variables[fpsNumberId] = {value: 0};

  const fpsTextId = uuid();
  Components.texts[fpsTextId] = {size: 12, variable: fpsNumberId, color: 0xffffff, angle: 0, opacity: 0.6};
  Components.positions[fpsTextId] = {x: Const.WORLD_WIDTH/6, y: Const.WORLD_HEIGHT/2, angle: 0};

  const fpsCounterId = uuid();
  Components.fpsCounters[fpsCounterId] = {variable: fpsNumberId};

  const enemyPointsId = uuid();
  Components.variables[enemyPointsId] = {value: 0};

  const bottomZoneId = uuid();
  Components.shapes[bottomZoneId] = {width: Const.WORLD_WIDTH, height: 20, angle: 0};
  Components.collisions[bottomZoneId] = [];
  Components.positions[bottomZoneId] = {x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT - 25, angle: 0};
  Components.touchSensors[bottomZoneId] = {seeking: ballId, last: false, current: false, variable: enemyPointsId, operation: +1};

  const topCounterId = uuid();
  Components.positions[topCounterId] = {x: 60, y: 220, angle: 0};
  Components.texts[topCounterId] = {size: 26, variable: enemyPointsId, color: 0xff7777, angle: 0, opacity: 0.6};

  const playerPointsId = uuid();
  Components.variables[playerPointsId] = {value: 0};

  const topZoneId = uuid();
  Components.shapes[topZoneId] = {width: Const.WORLD_WIDTH, height: 20, angle: 0};
  Components.collisions[topZoneId] = [];
  Components.positions[topZoneId] = {x: Const.WORLD_WIDTH/2, y: 25, angle: 0};
  Components.touchSensors[topZoneId] = {seeking: ballId, last: false, current: false, variable: playerPointsId, operation: +1};

  const bottomCounterId = uuid();
  Components.positions[bottomCounterId] = {x: 60, y: 280, angle: 0};
  Components.texts[bottomCounterId] = {size: 26, variable: playerPointsId, color: 0xffff77, angle: 0, opacity: 0.6};

  const pointsNeededByPlayerId = uuid();
  Components.variables[pointsNeededByPlayerId] = {value: 5};

  const have10pointsId = uuid();
  Components.conditions[have10pointsId] = {leftVariable: playerPointsId, operator: ">=", rightVariable: pointsNeededByPlayerId};

  const victoryConditionsId = uuid();
  Components.victoryConditions[victoryConditionsId] = [have10pointsId];

  return JSON.parse(JSON.stringify(Components));
}

export default getLevel01;
