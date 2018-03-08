import * as chipmunk from 'chipmunk';
import Config from './config';

class Physics {

  constructor(body_components, position_components, order_components) {
    this.gravity = chipmunk.v(0, 1);
    this.space = new chipmunk.Space();
    this.space.iterations = 15;
    this.space.gravity = this.gravity;

    this.body_components = body_components;
    this.position_components = position_components;
    this.order_components = order_components;

    this.bodies = {};
    Object.keys(this.body_components).forEach(id => {
      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.body_components[id].width;
      const height = this.body_components[id].height;
      const body = new chipmunk.Body(1, chipmunk.momentForBox(1, width, height));
      body.p = chipmunk.v(x, y);
      const verts = [-height/2, -width/2,   -height/2, width/2,   height/2, width/2,   height/2, -width/2 ]
      const shape = new chipmunk.PolyShape(body, verts, chipmunk.v(0, 0));
      // if (parseInt(id, 10) === 3) {
      //   body.frictionAir = 0;
      //   body.restitution = 0;
        // Body.setMass(body, 0.01);
        // Body.setVelocity(body, {x: 0, y: -2});
        // Body.applyForce(body, body.position, {x: 0, y: 0.001});
      // }
      // else {
      //   body.frictionAir = 1;
      // }
      body.id = id;
      // body.restitution = 0;
      this.bodies[id] = body;
      // body.friction = 0.5;
      console.log(body.id);
      this.space.addBody(body);
      this.space.addShape(shape);
      // console.log(body);
    });
    this.update = this.update.bind(this);
  }

  update(delta) {
    // Object.keys(this.order_components).forEach(id => {
    //   if (this.order_components[id].leftOrder === "start" && this.order_components[id].rightOrder === "stop") {
    //     // Body.setVelocity(this.bodies[id], {x: -Config.PLAYER_PADDLE_SPEED * delta, y: 0});
    //     Body.setPosition(this.bodies[id], {x: this.position_components[id].x - Config.PLAYER_PADDLE_SPEED * delta, y: this.position_components[id].y});
    //     // Body.applyForce(this.bodies[id], this.position_components[id], {x: -Config.PLAYER_PADDLE_SPEED * 0.001 * delta, y: 0});
    //     console.log(this.bodies[id].position);
    //   }
    //   else if (this.order_components[id].leftOrder === "stop" && this.order_components[id].rightOrder === "start") {
    //     // Body.setVelocity(this.bodies[id], {x: Config.PLAYER_PADDLE_SPEED * delta, y: 0});
    //     Body.setPosition(this.bodies[id], {x: this.position_components[id].x + Config.PLAYER_PADDLE_SPEED * delta, y: this.position_components[id].y});
    //     // Body.applyForce(this.bodies[id], this.position_components[id], {x: Config.PLAYER_PADDLE_SPEED * 0.001 * delta, y: 0})
    //   }
    // });
    this.space.step(delta);
    // Object.keys(this.bodies).forEach(id => {
    //   if (id == 3) {
    //     console.log(this.bodies[id].p);
    //   }
    //   this.position_components[id].x = this.bodies[id].p.x;
    //   this.position_components[id].y = this.bodies[id].p.y;
    // });

  }
}

export default Physics;
