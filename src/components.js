import Config from './config';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';
import {v4, v1} from 'uuid';

const uuid = v4;

const Components = {
  bodies: {},
  sensors: {},
  sprites: {},
  positions: {},
  inputs: {},
  orders: {},
  movements: {},
  texts: {},
  rulesFps: {},
  rulesDetectors: {},
  ai: {},
  balls: {}
}

const enemyPaddleId = uuid();
Components.bodies[enemyPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0, type: "stopping"};
Components.sprites[enemyPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xff7777, opacity: 1.0};
Components.positions[enemyPaddleId] = {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y};
Components.movements[enemyPaddleId] = {speed: 0, angle: 0, x: 0.1, y: 0.1, randomAngle: 0};
Components.orders[enemyPaddleId] = {movement: "stop", direction: -Math.PI/2};
Components.ai[enemyPaddleId] = {};

const playerPaddleId = uuid();
Components.bodies[playerPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0, type: "stopping"};
Components.sprites[playerPaddleId] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 1.0};
Components.positions[playerPaddleId] = {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y};
Components.movements[playerPaddleId] = {speed: 0, angle: 0, x: 0.1, y: 0.1, randomAngle: 0};
Components.orders[playerPaddleId] = {movement: "stop", direction: Math.PI/2};
Components.inputs[playerPaddleId] = {leftArrow: false, rightArrow: false};
// Components.ai[playerPaddleId] = {};

const ballId = uuid();
Components.bodies[ballId] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, angle: 0, type: "bouncing"};
Components.sprites[ballId] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[ballId] = {x: Config.BALL_POSITION.X, y: Config.BALL_POSITION.Y};
Components.movements[ballId] = {speed: 0.4, angle: -2, x: 0.1, y: 0.1, randomAngle: 1};
Components.balls[ballId] = {};

const leftWallId = uuid();
Components.bodies[leftWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, type: "immobile"};
Components.sprites[leftWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[leftWallId] = {x: 0, y: Config.WORLD_HEIGHT/2};

const rightWallId = uuid();
Components.bodies[rightWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, type: "immobile"};
Components.sprites[rightWallId] = {width: 40, height: Config.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[rightWallId] = {x: Config.WORLD_WIDTH, y: Config.WORLD_HEIGHT/2};

const toptWallId = uuid();
Components.bodies[toptWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, type: "immobile"};
Components.sprites[toptWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[toptWallId] = {x: Config.WORLD_WIDTH/2, y: 0};

const bottomWallId = uuid();
Components.bodies[bottomWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, type: "immobile"};
Components.sprites[bottomWallId] = {width: Config.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[bottomWallId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT};

const netId = uuid();
Components.sprites[netId] = {width: Config.WORLD_WIDTH, height: 10, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 0.2};
Components.positions[netId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT/2};

const fpsCounterId = uuid();
Components.texts[fpsCounterId] = {size: 12, content: "fps", color: 0xffffff, angle: 0, opacity: 0.6};
Components.positions[fpsCounterId] = {x: Config.WORLD_WIDTH/6, y: Config.WORLD_HEIGHT/2};
Components.rulesFps[fpsCounterId] = true;

const obstacle1Id = uuid();
Components.bodies[obstacle1Id] = {width: 100, height: 120, angle: Math.PI/5, type: "immobile"};
Components.sprites[obstacle1Id] = {width: 100, height: 120, angle: Math.PI/5, image: LOLPIXELS, color: 0xf42222, opacity: 0.6};
Components.positions[obstacle1Id] = {x: 20, y: Config.WORLD_HEIGHT/3};

const obstacle2Id = uuid();
Components.bodies[obstacle2Id] = {width: 100, height: 120, angle: 0.3, type: "immobile"};
Components.sprites[obstacle2Id] = {width: 100, height: 120, angle: 0.3, image: LOLPIXELS, color: 0xf4f2f7f, opacity: 0.6};
Components.positions[obstacle2Id] = {x: Config.WORLD_WIDTH/2+50, y: Config.WORLD_HEIGHT/2+50};

const obstacle3Id = uuid();
Components.bodies[obstacle3Id] = {width: 100, height: 30, angle: 4, type: "immobile"};
Components.sprites[obstacle3Id] = {width: 100, height: 30, angle: 4, image: LOLPIXELS, color: 0x11f2f7f, opacity: 0.6};
Components.positions[obstacle3Id] = {x: Config.WORLD_WIDTH-50, y: Config.WORLD_HEIGHT/3};

const skull1Id = uuid();
Components.sprites[skull1Id] = {width: 110, height: 110, angle: 0, image: SKULL, color: 0xffffff, opacity: 0.4};
Components.positions[skull1Id] = {x: 500, y: 140};

const skull2Id = uuid();
Components.sprites[skull2Id] = {width: 110, height: 110, angle: 0, image: SKULL, color: 0xffffff, opacity: 0.4};
Components.positions[skull2Id] = {x: 500, y: 360};

const topZoneId = uuid();
Components.bodies[topZoneId] = {width: Config.WORLD_WIDTH, height: 20, angle: 0, type: "zone"};
Components.positions[topZoneId] = {x: Config.WORLD_WIDTH/2, y: 25};
Components.sensors[topZoneId] = {seeking: ballId, detected: false};

const bottomZoneId = uuid();
Components.bodies[bottomZoneId] = {width: Config.WORLD_WIDTH, height: 20, angle: 0, type: "zone"};
Components.positions[bottomZoneId] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT - 25};
Components.sensors[bottomZoneId] = {seeking: ballId, detected: false};

const topCounterId = uuid();
Components.positions[topCounterId] = {x: 60, y: 220};
Components.texts[topCounterId] = {size: 26, content: "0", color: 0xff7777, angle: 0, opacity: 0.6};

const bottomCounterId = uuid();
Components.positions[bottomCounterId] = {x: 60, y: 280};
Components.texts[bottomCounterId] = {size: 26, content: "0", color: 0xffff77, angle: 0, opacity: 0.6};

const topDetectorId = uuid();
Components.rulesDetectors[topDetectorId] = {zone: topZoneId, counter: bottomCounterId};

const bottomDetectorId = uuid();
Components.rulesDetectors[bottomDetectorId] = {zone: bottomZoneId, counter: topCounterId};

export default Components;
