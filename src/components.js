import Config from './config';

const Components = {
  bodies: {
    1: {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, static: true},
    2: {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT, static: true},
    3: {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT, static: false},
    4: {width: 20, height: Config.WORLD_HEIGHT, static: true},
    5: {width: 20, height: Config.WORLD_HEIGHT, static: true},
    6: {width: Config.WORLD_WIDTH, height: 20, static: true},
    7: {width: Config.WORLD_WIDTH, height: 20, static: true},
  },
  positions: {
    1: {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y},
    2: {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y},
    3: {x: Config.BALL_POSITION.X, y: Config.BALL_POSITION.Y},
    4: {x: 10, y: Config.WORLD_HEIGHT/2},
    5: {x: Config.WORLD_WIDTH - 10, y: Config.WORLD_HEIGHT/2},
    6: {x: Config.WORLD_WIDTH/2, y: 10,                     },
    7: {x: Config.WORLD_WIDTH/2, y: Config.WORLD_HEIGHT - 10,},
  },
  orders: {
    2: {leftOrder: "stop", rightOrder: "stop"},
  }
}

export default Components;
