class AI {

  constructor(ball_components, ai_components, position_components, movement_components, order_components) {
    this.ball_components = ball_components;
    this.ai_components = ai_components;
    this.position_components = position_components;
    this.movement_components = movement_components;
    this.order_components = order_components;
    this.update = this.update.bind(this);
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
