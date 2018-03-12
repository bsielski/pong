import Config from './config';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';

const Components = {
  bodies: {},
  sensors: {},
  sprites: {},
  positions: {},
  inputs: {},
  movements: {},
  texts: {},
  rulesFps: {},
  rulesDetectors: {}
}

const enemyPaddle = 1;
Components.bodies[enemyPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, type: "stopping"};
Components.sprites[enemyPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, image: LOLPIXELS, color: 0xff7777, opacity: 1.0};
Components.positions[enemyPaddle] = {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y};

const playerPaddle = 2;
Components.bodies[playerPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, type: "stopping"};
Components.sprites[playerPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, image: LOLPIXELS, color: 0xffff77, opacity: 1.0};
Components.positions[playerPaddle] = {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y};
Components.inputs[playerPaddle] = {leftArrow: false, rightArrow: false};

const ball = 3;
Components.bodies[ball] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, type: "bouncing"};
Components.sprites[ball] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[ball] = {x: Config.BALL_POSITION.X, y: Config.BALL_POSITION.Y};
Components.movements[ball] = {x: 0.0, y: 0.6, randomAngle: 15};

const leftWall = 4;
Components.bodies[leftWall] = {width: 40, height: Config.WORLD_HEIGHT, type: "immobile"};
Components.sprites[leftWall] = {width: 40, height: Config.WORLD_HEIGHT, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[leftWall] = {x: 0, y: Config.WORLD_HEIGHT/2};

const rightWall = 5;
Components.bodies[rightWall] = {width: 40, height: Config.WORLD_HEIGHT, type: "immobile"};
Components.sprites[rightWall] = {width: 40, height: Config.WORLD_HEIGHT, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[rightWall] = {x: Config.WORLD_WIDTH, y: Config.WORLD_HEIGHT/2};

const toptWall = 6;
Components.bodies[toptWall] = {width: Config.WORLD_WIDTH, height: 40, type: "immobile"};
Components.sprites[toptWall] = {width: Config.WORLD_WIDTH, height: 40, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[toptWall] = {x: Config.WORLD_WIDTH/2, y: 0};

const bottomWall = 7;
Components.bodies[bottomWall] = {width: Config.WORLD_WIDTH, height: 40, type: "immobile"};
Components.sprites[bottomWall] = {width: Config.WORLD_WIDTH, height: 40, image: LOLPIXELS, color: 0xffffff, opacity: 1.0};
Components.positions[bottomWall] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT};

const net = 8;
Components.sprites[net] = {width: Config.WORLD_WIDTH, height: 10, image: LOLPIXELS, color: 0xffffff, opacity: 0.2};
Components.positions[net] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT/2};

const fpsCounter = 9;
Components.texts[fpsCounter] = {size: 12, content: "fps", color: 0xffffff, opacity: 0.6};
Components.positions[fpsCounter] = {x: Config.WORLD_WIDTH/6, y: Config.WORLD_HEIGHT/2};
Components.rulesFps[fpsCounter] = true;

// const invisibleObstacle = 10;
// Components.bodies[invisibleObstacle] = {width: 100, height: 10, type: "immobile"};
// Components.positions[invisibleObstacle] = {x: Config.WORLD_WIDTH/2 - 100, y: Config.WORLD_HEIGHT/2};

const skull1 = 11;
Components.sprites[skull1] = {width: 110, height: 110, image: SKULL, color: 0xffffff, opacity: 0.4};
Components.positions[skull1] = {x: 500, y: 140};

const skull2 = 12;
Components.sprites[skull2] = {width: 110, height: 110, image: SKULL, color: 0xffffff, opacity: 0.4};
Components.positions[skull2] = {x: 500, y: 360};

const bottomZone = 13;
Components.bodies[bottomZone] = {width: Config.WORLD_WIDTH, height: 20, type: "zone"};
Components.positions[bottomZone] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT - 25};
Components.sensors[bottomZone] = {seeking: 3, detected: false};

const bottomCounter = 14;
Components.positions[bottomCounter] = {x: 60, y: 280};
Components.texts[bottomCounter] = {size: 26, content: "0", color: 0xffff77, opacity: 0.6};

const bottomDetector = 15;
Components.rulesDetectors[bottomDetector] = {zone: 13, counter: 17};

const topZone = 16;
Components.bodies[topZone] = {width: Config.WORLD_WIDTH, height: 20, type: "zone"};
Components.positions[topZone] = {x: Config.WORLD_WIDTH/2, y: 25};
Components.sensors[topZone] = {seeking: 3, detected: false};

const topCounter = 17;
Components.positions[topCounter] = {x: 60, y: 220};
Components.texts[topCounter] = {size: 26, content: "0", color: 0xff7777, opacity: 0.6};

const topDetector = 18;
Components.rulesDetectors[topDetector] = {zone: 16, counter: 14};

export default Components;
