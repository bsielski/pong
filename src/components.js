import Config from './config';

const Components = {
  bodies: {},
  positions: {},
  orders: {},
}

const enemyPaddle = 1;
Components.bodies[enemyPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, static: true, type: "static"};
Components.positions[enemyPaddle] = {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y};

const playerPaddle = 2;
Components.bodies[playerPaddle] = {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, static: true, type: "static"};
Components.positions[playerPaddle] = {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y};
Components.orders[playerPaddle] = {leftOrder: "stop", rightOrder: "stop"};

const ball = 3;
Components.bodies[ball] = {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, static: false, type: "dynamic"};
Components.positions[ball] = {x: Config.BALL_POSITION.X, y: Config.BALL_POSITION.Y};

const leftWall = 4;
Components.bodies[leftWall] = {width: 20, height: Config.WORLD_HEIGHT, static: true, type: "static"};
Components.positions[leftWall] = {x: 10, y: Config.WORLD_HEIGHT/2};

const rightWall = 5;
Components.bodies[rightWall] = {width: 20, height: Config.WORLD_HEIGHT, static: true, type: "static"};
Components.positions[rightWall] = {x: Config.WORLD_WIDTH - 10, y: Config.WORLD_HEIGHT/2};

// const toptWall = 6;
// Components.bodies[toptWall] = {width: Config.WORLD_WIDTH, height: 20, static: true, type: "static"};
// Components.positions[toptWall] = {x: Config.WORLD_WIDTH/2, y: 10};
//
// const bottomWall = 7;
// Components.bodies[bottomWall] = {width: Config.WORLD_WIDTH, height: 20, static: true, type: "static"};
// Components.positions[bottomWall] = {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT - 10};

export default Components;
