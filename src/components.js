import Config from './config';
import SKULL from './skull.png';
import LOLPIXELS from './lolpixels.png';

const Components = {
  bodies: {},
  sprites: {},
  positions: {},
  inputs: {},
  movements: {},
  texts: {},
  rulesFps: {}
}

const enemyPaddle = 1;
Components.bodies[enemyPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, static: true, type: "stopping"};
Components.sprites[enemyPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, image: LOLPIXELS, opacity: 1.0};
Components.positions[enemyPaddle] = {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y};

const playerPaddle = 2;
Components.bodies[playerPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, static: true, type: "stopping"};
Components.sprites[playerPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, image: LOLPIXELS, opacity: 1.0};
Components.positions[playerPaddle] = {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y};
Components.inputs[playerPaddle] = {leftArrow: false, rightArrow: false};

const ball = 3;
Components.bodies[ball] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, static: false, type: "bouncing"};
Components.sprites[ball] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, image: LOLPIXELS, opacity: 1.0};
Components.positions[ball] = {x: Config.BALL_POSITION.X, y: Config.BALL_POSITION.Y};
Components.movements[ball] = {x: 0.02, y: 0.3};

const leftWall = 4;
Components.bodies[leftWall] = {width: 20, height: Config.WORLD_HEIGHT, static: true, type: "immobile"};
Components.sprites[leftWall] = {width: 20, height: Config.WORLD_HEIGHT, image: LOLPIXELS, opacity: 1.0};
Components.positions[leftWall] = {x: 10, y: Config.WORLD_HEIGHT/2};

const rightWall = 5;
Components.bodies[rightWall] = {width: 20, height: Config.WORLD_HEIGHT, static: true, type: "immobile"};
Components.sprites[rightWall] = {width: 20, height: Config.WORLD_HEIGHT, image: LOLPIXELS, opacity: 1.0};
Components.positions[rightWall] = {x: Config.WORLD_WIDTH - 10, y: Config.WORLD_HEIGHT/2};

const toptWall = 6;
Components.bodies[toptWall] = {width: Config.WORLD_WIDTH, height: 20, static: true, type: "immobile"};
Components.sprites[toptWall] = {width: Config.WORLD_WIDTH, height: 20, image: LOLPIXELS, opacity: 1.0};
Components.positions[toptWall] = {x: Config.WORLD_WIDTH/2, y: 10};

const bottomWall = 7;
Components.bodies[bottomWall] = {width: Config.WORLD_WIDTH, height: 20, static: true, type: "immobile"};
Components.sprites[bottomWall] = {width: Config.WORLD_WIDTH, height: 20, image: LOLPIXELS, opacity: 1.0};
Components.positions[bottomWall] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT - 10};

const net = 8;
Components.sprites[net] = {width: Config.WORLD_WIDTH, height: 10, image: LOLPIXELS, opacity: 0.2};
Components.positions[net] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT/2};

const fpsCounter = 9;
Components.texts[fpsCounter] = {size: 12, content: "fps", opacity: 0.6};
Components.positions[fpsCounter] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT/2 -40};
Components.rulesFps[fpsCounter] = true;

const invisibleObstacle = 10;
Components.bodies[invisibleObstacle] = {width: 100, height: 10, static: true, type: "immobile"};
Components.positions[invisibleObstacle] = {x: Config.WORLD_WIDTH/2 - 100, y: Config.WORLD_HEIGHT/2};

export default Components;
