import Config from './config';

const Components = {
  bodies: {
    1: {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT},
    2: {width: Config.PADDLE_WIDTH, height: Config.PADDLE_HEIGHT},
    3: {width: Config.BALL_WIDTH, height: Config.BALL_HEIGHT},
  },
  positions: {
    1: {x: Config.PADDLE_1_POSITION.X, y: Config.PADDLE_1_POSITION.Y},
    2: {x: Config.PADDLE_2_POSITION.X, y: Config.PADDLE_2_POSITION.Y},
    3: {x: Config.BALL_POSITION.X, y: Config.BALL_POSITION.Y},
  },
  orders: {
    2: {leftOrder: "stop", rightOrder: "stop"},
  }
}

export default Components;
