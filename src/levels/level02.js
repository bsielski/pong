import Config from './config';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import {v4, v1} from 'uuid';

function getLevel02() {

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
  Components.shapes[enemyPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0};
  Components.bodies[enemyPaddleId] = {};
  Components.stopping[enemyPaddleId] = {};
  Components.collisions[enemyPaddleId] = [];
  Components.sprites[enemyPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xff7777, opacity: 1.0};
  Components.positions[enemyPaddleId] = {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y};
  Components.movements[enemyPaddleId] = {minSpeed: 0, speed: 0, maxSpeed: Config.PLAYER_PADDLE_SPEED/2, angle: 0, randomAngle: 0};
  Components.orders[enemyPaddleId] = {movement: "stop", direction: Math.PI * 3/2};
  Components.ai[enemyPaddleId] = {};

  const playerPaddleId = uuid();
  Components.shapes[playerPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0};
  Components.bodies[playerPaddleId] = {};
  Components.stopping[playerPaddleId] = {};
  Components.collisions[playerPaddleId] = [];
  Components.sprites[playerPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 1.0};
  Components.positions[playerPaddleId] = {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y};
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
  Components.positions[ballId] = {x: 300, y: 400};
  Components.movements[ballId] = {minSpeed: 0.25, speed: 0.4, maxSpeed: 0.55, angle: 2, randomAngle: 1};
  Components.balls[ballId] = {};

  const leftWallId = uuid();
  Components.shapes[leftWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0};
  Components.bodies[leftWallId] = {};
  Components.collisions[leftWallId] = [];
  Components.sprites[leftWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[leftWallId] = {x: 0, y: Config.WORLD_HEIGHT/2};

  const rightWallId = uuid();
  Components.shapes[rightWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0};
  Components.bodies[rightWallId] = {};
  Components.collisions[rightWallId] = [];
  Components.sprites[rightWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[rightWallId] = {x: Config.WORLD_WIDTH, y: Config.WORLD_HEIGHT/2};

  const toptWallId = uuid();
  Components.shapes[toptWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0};
  Components.bodies[toptWallId] = {};
  Components.collisions[toptWallId] = [];
  Components.sprites[toptWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[toptWallId] = {x: Config.WORLD_WIDTH/2, y: 0};

  const bottomWallId = uuid();
  Components.shapes[bottomWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0};
  Components.bodies[bottomWallId] = {};
  Components.collisions[bottomWallId] = [];
  Components.sprites[bottomWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
  Components.positions[bottomWallId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT};

  const netId = uuid();
  Components.sprites[netId] = {width: Config.WORLD_WIDTH, height: 10, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 0.2};
  Components.positions[netId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT/2};

  const fpsNumberId = uuid();
  Components.variables[fpsNumberId] = {value: 0};

  const fpsTextId = uuid();
  Components.texts[fpsTextId] = {size: 12, variable: fpsNumberId, color: 0xffffff, angle: 0, opacity: 0.6};
  Components.positions[fpsTextId] = {x: Config.WORLD_WIDTH/6, y: Config.WORLD_HEIGHT/2};

  const fpsCounterId = uuid();
  Components.fpsCounters[fpsCounterId] = {variable: fpsNumberId};

  const obstacle1Id = uuid();
  Components.shapes[obstacle1Id] = {width: 60, height: 80, angle: 1};
  Components.bodies[obstacle1Id] = {};
  Components.collisions[obstacle1Id] = [];
  Components.sprites[obstacle1Id] = {width: 60, height: 80, angle: 1, image: LOLPIXELS, color: 0xf42222, opacity: 0.6};
  Components.positions[obstacle1Id] = {x: 15, y: 200};

  const obstacle2Id = uuid();
  Components.shapes[obstacle2Id] = {width: 80, height: 80, angle: 0.4};
  Components.bodies[obstacle2Id] = {};
  Components.collisions[obstacle2Id] = [];
  Components.sprites[obstacle2Id] = {width: 80, height: 80, angle: 0.4, image: LOLPIXELS, color: 0xf4f2f7f, opacity: 0.6};
  Components.positions[obstacle2Id] = {x: Config.WORLD_WIDTH/2+70, y: Config.WORLD_HEIGHT/3+20};

  const obstacle3Id = uuid();
  Components.shapes[obstacle3Id] = {width: 60, height: 30, angle: 2};
  Components.bodies[obstacle3Id] = {};
  Components.collisions[obstacle3Id] = [];
  Components.sprites[obstacle3Id] = {width: 60, height: 30, angle: 2, image: LOLPIXELS, color: 0x11f2f7f, opacity: 0.6};
  Components.positions[obstacle3Id] = {x: Config.WORLD_WIDTH-50, y: Config.WORLD_HEIGHT/3};

  const skull1Id = uuid();
  Components.sprites[skull1Id] = {width: 110, height: 110, angle: 0, image: SKULL, color: 0xffffff, opacity: 0.4};
  Components.positions[skull1Id] = {x: 500, y: 140};

  const skull2Id = uuid();
  Components.sprites[skull2Id] = {width: 110, height: 110, angle: 0, image: SKULL, color: 0xffffff, opacity: 0.4};
  Components.positions[skull2Id] = {x: 500, y: 360};

  const enemyPointsId = uuid();
  Components.variables[enemyPointsId] = {value: 0};

  const bottomZoneId = uuid();
  Components.shapes[bottomZoneId] = {width: Config.WORLD_WIDTH, height: 20, angle: 0};
  Components.collisions[bottomZoneId] = [];
  Components.positions[bottomZoneId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT - 25};
  Components.touchSensors[bottomZoneId] = {seeking: ballId, last: false, current: false, variable: enemyPointsId, operation: +1};

  const topCounterId = uuid();
  Components.positions[topCounterId] = {x: 60, y: 220};
  Components.texts[topCounterId] = {size: 26, variable: enemyPointsId, color: 0xff7777, angle: 0, opacity: 0.6};

  const playerPointsId = uuid();
  Components.variables[playerPointsId] = {value: 0};

  const topZoneId = uuid();
  Components.shapes[topZoneId] = {width: Config.WORLD_WIDTH, height: 20, angle: 0};
  Components.collisions[topZoneId] = [];
  Components.positions[topZoneId] = {x: Config.WORLD_WIDTH/2, y: 25};
  Components.touchSensors[topZoneId] = {seeking: ballId, last: false, current: false, variable: playerPointsId, operation: +1};

  const bottomCounterId = uuid();
  Components.positions[bottomCounterId] = {x: 60, y: 280};
  Components.texts[bottomCounterId] = {size: 26, variable: playerPointsId, color: 0xffff77, angle: 0, opacity: 0.6};

  return JSON.parse(JSON.stringify(Components));
}

export default getLevel02;
