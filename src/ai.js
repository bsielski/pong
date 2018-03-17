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
  }

  update(delta) {
    Object.keys(this.ai_components).forEach(aiId => {
      let nearestBall = null;
      let west = "left";
      let east = "right";
      if (this.order_components[aiId].direction % (2 * Math.PI) > Math.PI ) {
        west = "right";
        east = "left";
      }

      Object.keys(this.ball_components).forEach(ballId => {
        nearestBall = ballId;
      });
      if (this.position_components[nearestBall].x - 45 > this.position_components[aiId].x) {
        this.order_components[aiId].movement = east;
      }
      else if (this.position_components[nearestBall].x + 45 < this.position_components[aiId].x) {
        this.order_components[aiId].movement = west;
      }
    });
  }

}

export default AI;
