import Config from './config';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import {v4, v1} from 'uuid';

function getLevel02intro() {

  const uuid = v4;

  const Components = {
    positions: {},
    shapes: {},
    bodies: {},
    collisions: {},
    bouncing: {},
    stopping: {},
    touchSensors: {},
    movements: {},
    sprites: {},
    inputs: {},
    orders: {},
    texts: {},
    fpsCounters: {},
    ai: {},
    balls: {},
    variables: {},
    conditions: {},
    victoryConditions: {}
  }

  const playerPaddleId = uuid();
  Components.shapes[playerPaddleId] = {width: Config.PADDLE_WIDTH+10, height: Config.PADDLE_HEIGHT, angle: 0};
  Components.bodies[playerPaddleId] = {};
  Components.stopping[playerPaddleId] = {};
  Components.collisions[playerPaddleId] = [];
  Components.sprites[playerPaddleId] = {width: Config.PADDLE_WIDTH+10, height: Config.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 0};
  Components.positions[playerPaddleId] = {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y};
  Components.movements[playerPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: Config.PLAYER_PADDLE_SPEED, angle: 0, randomAngle: 0};
  Components.orders[playerPaddleId] = {movement: "stop", direction: Math.PI/2};
  Components.inputs[playerPaddleId] = {leftArrow: false, rightArrow: false};
  // Components.ai[playerPaddleId] = {};

  const playerPointsId = uuid();
  Components.variables[playerPointsId] = {value: 0};

  const leftZoneId = uuid();
  Components.shapes[leftZoneId] = {width: Config.WORLD_WIDTH/4, height: 20, angle: 0};
  Components.collisions[leftZoneId] = [];
  Components.positions[leftZoneId] = {x: Config.WORLD_WIDTH/4, y: Config.WORLD_HEIGHT - 25};
  Components.touchSensors[leftZoneId] = {seeking: playerPaddleId, last: false, current: false, variable: playerPointsId, operation: +1};

  const rightZoneId = uuid();
  Components.shapes[rightZoneId] = {width: Config.WORLD_WIDTH/4, height: 20, angle: 0};
  Components.collisions[rightZoneId] = [];
  Components.positions[rightZoneId] = {x: Config.WORLD_WIDTH/4*3, y: Config.WORLD_HEIGHT - 25};
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
