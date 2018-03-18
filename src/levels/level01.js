import Config from './config';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import {v4, v1} from 'uuid';

function getLevel01() {

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

  const enemyPaddleId = uuid();
  Components.shapes[enemyPaddleId] = {width: Config.PADDLE_WIDTH-10, height: Config.PADDLE_HEIGHT, angle: 0};
  Components.bodies[enemyPaddleId] = {};
  Components.stopping[enemyPaddleId] = {};
  Components.collisions[enemyPaddleId] = [];
  Components.sprites[enemyPaddleId] = {width: Config.PADDLE_WIDTH-10, height: Config.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xff7777, opacity: 1.0};
  Components.positions[enemyPaddleId] = {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y, angle: 0};
  Components.movements[enemyPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: Config.PLAYER_PADDLE_SPEED/3, angle: 0, randomAngle: 0};
  Components.orders[enemyPaddleId] = {movement: "stop", direction: Math.PI * 3/2};
  Components.ai[enemyPaddleId] = {};

  const playerPaddleId = uuid();
  Components.shapes[playerPaddleId] = {width: Config.PADDLE_WIDTH+10, height: Config.PADDLE_HEIGHT, angle: 0};
  Components.bodies[playerPaddleId] = {};
  Components.stopping[playerPaddleId] = {};
  Components.collisions[playerPaddleId] = [];
  Components.sprites[playerPaddleId] = {width: Config.PADDLE_WIDTH+10, height: Config.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 1.0};
  Components.positions[playerPaddleId] = {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y, angle: 0};
  Components.movements[playerPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: Config.PLAYER_PADDLE_SPEED, angle: 0, randomAngle: 0};
  Components.orders[playerPaddleId] = {movement: "stop", direction: Math.PI/2};
  Components.inputs[playerPaddleId] = {leftArrow: false, rightArrow: false};
  // Components.ai[playerPaddleId] = {};

  const ballId = uuid();
  Components.shapes[ballId] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, angle: 0};
  Components.bodies[ballId] = {};
  Components.bouncing[ballId] = {};
  Components.collisions[ballId] = [];
  Components.sprites[ballId] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[ballId] = {x: 300, y: 400, angle: 0};
  Components.movements[ballId] = {minSpeed: 0.25, speed: 0.4, maxSpeed: 0.55, angle: 2, randomAngle: 1};
  Components.balls[ballId] = {};

  const leftWallId = uuid();
  Components.shapes[leftWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0};
  Components.bodies[leftWallId] = {};
  Components.collisions[leftWallId] = [];
  Components.sprites[leftWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[leftWallId] = {x: 0, y: Config.WORLD_HEIGHT/2, angle: 0};

  const rightWallId = uuid();
  Components.shapes[rightWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0};
  Components.bodies[rightWallId] = {};
  Components.collisions[rightWallId] = [];
  Components.sprites[rightWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[rightWallId] = {x: Config.WORLD_WIDTH, y: Config.WORLD_HEIGHT/2, angle: 0};

  const toptWallId = uuid();
  Components.shapes[toptWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0};
  Components.bodies[toptWallId] = {};
  Components.collisions[toptWallId] = [];
  Components.sprites[toptWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[toptWallId] = {x: Config.WORLD_WIDTH/2, y: 0, angle: 0};

  const bottomWallId = uuid();
  Components.shapes[bottomWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0};
  Components.bodies[bottomWallId] = {};
  Components.collisions[bottomWallId] = [];
  Components.sprites[bottomWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[bottomWallId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT, angle: 0};

  const netId = uuid();
  Components.sprites[netId] = {width: Config.WORLD_WIDTH, height: 10, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 0.2};
  Components.positions[netId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT/2, angle: 0};

  const fpsNumberId = uuid();
  Components.variables[fpsNumberId] = {value: 0};

  const fpsTextId = uuid();
  Components.texts[fpsTextId] = {size: 12, variable: fpsNumberId, color: 0xffffff, angle: 0, opacity: 0.6};
  Components.positions[fpsTextId] = {x: Config.WORLD_WIDTH/6, y: Config.WORLD_HEIGHT/2, angle: 0};

  const fpsCounterId = uuid();
  Components.fpsCounters[fpsCounterId] = {variable: fpsNumberId};

  const enemyPointsId = uuid();
  Components.variables[enemyPointsId] = {value: 0};

  const bottomZoneId = uuid();
  Components.shapes[bottomZoneId] = {width: Config.WORLD_WIDTH, height: 20, angle: 0};
  Components.collisions[bottomZoneId] = [];
  Components.positions[bottomZoneId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT - 25, angle: 0};
  Components.touchSensors[bottomZoneId] = {seeking: ballId, last: false, current: false, variable: enemyPointsId, operation: +1};

  const topCounterId = uuid();
  Components.positions[topCounterId] = {x: 60, y: 220, angle: 0};
  Components.texts[topCounterId] = {size: 26, variable: enemyPointsId, color: 0xff7777, angle: 0, opacity: 0.6};

  const playerPointsId = uuid();
  Components.variables[playerPointsId] = {value: 0};

  const topZoneId = uuid();
  Components.shapes[topZoneId] = {width: Config.WORLD_WIDTH, height: 20, angle: 0};
  Components.collisions[topZoneId] = [];
  Components.positions[topZoneId] = {x: Config.WORLD_WIDTH/2, y: 25, angle: 0};
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
