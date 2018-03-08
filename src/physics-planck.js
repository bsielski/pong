import * as planck from 'planck-js';
import Config from './config';

class Physics {

  constructor(body_components, position_components, order_components) {
    this.scale = 0.1;
    this.gravity = planck.Vec2(0, 0.001);
    this.body_components = body_components;
    this.position_components = position_components;
    this.order_components = order_components;

    this.world = planck.World(this.gravity);

    this.bodies = {};
    Object.keys(this.body_components).forEach(id => {
      const x = this.position_components[id].x * this.scale;
      const y = this.position_components[id].y * this.scale;
      const width = this.body_components[id].width * this.scale;
      const height = this.body_components[id].height * this.scale;
      const body = this.world.createBody({
        type: this.body_components[id].type,
        position: planck.Vec2(x, y),
        bullet: true,
      });

      console.log("Physics position: " + body.getPosition());

      body.createFixture(planck.Box(width, height), 0.1);
      if (parseInt(id, 10) === 3) {
        body.setLinearVelocity(planck.Vec2(0.0, 0.0));
      }
      else {
      }
      body.id = id;
      this.bodies[id] = body;
    });
    this.update = this.update.bind(this);
  }

  update(delta) {
    // Object.keys(this.order_components).forEach(id => {
    //   if (this.order_components[id].leftOrder === "start" && this.order_components[id].rightOrder === "stop") {
    //     // Body.setVelocity(this.bodies[id], {x: -Config.PLAYER_PADDLE_SPEED * delta, y: 0});
    //     this.bodies[id].position = planck.Vec2((this.position_components[id].x - Config.PLAYER_PADDLE_SPEED * delta) * this.scale, this.position_components[id].y * this.scale);
    //     // Body.applyForce(this.bodies[id], this.position_components[id], {x: -Config.PLAYER_PADDLE_SPEED * 0.001 * delta, y: 0});
    //     console.log(this.bodies[id].position);
    //   }
    //   else if (this.order_components[id].leftOrder === "stop" && this.order_components[id].rightOrder === "start") {
    //     // Body.setVelocity(this.bodies[id], {x: Config.PLAYER_PADDLE_SPEED * delta, y: 0});
    //     this.bodies[id].position = planck.Vec2((this.position_components[id].x + Config.PLAYER_PADDLE_SPEED * delta) * this.scale, this.position_components[id].y * this.scale);
    //     // Body.applyForce(this.bodies[id], this.position_components[id], {x: Config.PLAYER_PADDLE_SPEED * 0.001 * delta, y: 0})
    //   }
    // });
    this.world.step(delta, 1);
    Object.keys(this.bodies).forEach(id => {
      if (id == 3) {
        console.log(this.bodies[id].getPosition());
      }

      this.position_components[id].x = Math.round(this.bodies[id].getPosition().x * 10);
      this.position_components[id].y = Math.round(this.bodies[id].getPosition().y * 10);
    });

  }
}

export default Physics;
