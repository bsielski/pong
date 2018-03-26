class AI {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.ball_components = components.balls;
    this.ai_components = components.ai;
    this.position_components = components.positions;
    this.movement_components = components.movements;
    this.order_components = components.orders;
    this.direction = 0;
  }

  update(delta) {
    Object.keys(this.ai_components).forEach(aiId => {
      let nearestBall = null;
      let west = {playerPaddleLeft: true, playerPaddleRight: false};
      let east = {playerPaddleLeft: false, playerPaddleRight: true};
      if (this.position_components[aiId].angle >= Math.PI ) {
        west = {playerPaddleLeft: false, playerPaddleRight: true};
        east = {playerPaddleLeft: true, playerPaddleRight: false};
      }

      Object.keys(this.ball_components).forEach(ballId => {
        nearestBall = ballId;
      });
      if (this.position_components[nearestBall].x - 45 > this.position_components[aiId].x) {
        this.order_components[aiId] = Object.assign(this.order_components[aiId], east);
      }
      else if (this.position_components[nearestBall].x + 45 < this.position_components[aiId].x) {
        this.order_components[aiId] = Object.assign(this.order_components[aiId], west);
      }
    });
  }

}

export default AI;
