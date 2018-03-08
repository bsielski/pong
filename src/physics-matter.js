import {Engine, Body, Render, World, Bodies} from 'matter-js';
import * as p2 from 'p2';
import Config from './config';

class Physics {

  constructor(body_components, position_components, order_components) {

    this.engine = Engine.create();
    this.engine.world.gravity.y = 0;
    this.body_components = body_components;
    this.position_components = position_components;
    this.order_components = order_components;

    this.render = Render.create({
                    element: document.getElementById("physics_container"),
                    engine: this.engine,
                    options: {
                        width: 600,
                        height: 400,
                        wireframes: true
                    }
                 });
    this.bodies = {};
    Object.keys(this.body_components).forEach(id => {
      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.body_components[id].width;
      const height = this.body_components[id].height;
      const body = Bodies.rectangle(x, y, width, height, { isStatic: this.body_components[id].static });
      if (parseInt(id, 10) === 3) {
        body.frictionAir = 0;
        body.restitution = 0;
        // Body.setMass(body, 0.01);
        // Body.setVelocity(body, {x: 0, y: -2});
        Body.applyForce(body, body.position, {x: 0, y: 0.001});
      }
      else {
        body.frictionAir = 1;
      }
      body.id = id;
      body.restitution = 0;
      this.bodies[id] = body;
      body.friction = 0.5;
      console.log(body.id);
      World.add(this.engine.world, [body]);
    });
    this.update = this.update.bind(this);

    Render.run(this.render);
  }

  update(delta) {
    Object.keys(this.order_components).forEach(id => {
      if (this.order_components[id].leftOrder === "start" && this.order_components[id].rightOrder === "stop") {
        // Body.setVelocity(this.bodies[id], {x: -Config.PLAYER_PADDLE_SPEED * delta, y: 0});
        Body.setPosition(this.bodies[id], {x: this.position_components[id].x - Config.PLAYER_PADDLE_SPEED * delta, y: this.position_components[id].y});
        // Body.applyForce(this.bodies[id], this.position_components[id], {x: -Config.PLAYER_PADDLE_SPEED * 0.001 * delta, y: 0});
        console.log(this.bodies[id].position);
      }
      else if (this.order_components[id].leftOrder === "stop" && this.order_components[id].rightOrder === "start") {
        // Body.setVelocity(this.bodies[id], {x: Config.PLAYER_PADDLE_SPEED * delta, y: 0});
        Body.setPosition(this.bodies[id], {x: this.position_components[id].x + Config.PLAYER_PADDLE_SPEED * delta, y: this.position_components[id].y});
        // Body.applyForce(this.bodies[id], this.position_components[id], {x: Config.PLAYER_PADDLE_SPEED * 0.001 * delta, y: 0})
      }
    });
    Engine.update(this.engine, delta);
    Object.keys(this.bodies).forEach(id => {
      this.position_components[id].x = this.bodies[id].position.x;
      this.position_components[id].y = this.bodies[id].position.y;
    });

  }
}

export default Physics;
