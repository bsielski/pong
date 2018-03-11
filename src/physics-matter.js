import {Engine, Body, Render, World, Bodies, Vector} from 'matter-js';
import Config from './config';

class Physics {

  constructor(body_components, position_components, movement_components) {

    this.engine = Engine.create();
    this.render = Render.create({
      element: document.getElementById("physics_container"),
      engine: this.engine,
      options: {width: 600, height: 400, wireframes: true}
    });

    this.engine.world.gravity.y = 0;

    this.body_components = body_components;
    this.position_components = position_components;
    this.movement_components = movement_components;

    this.bouncing = {};
    this.stopping = {};

    Object.keys(this.body_components).forEach(id => {
      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.body_components[id].width;
      const height = this.body_components[id].height;
      const body = Bodies.rectangle(x, y, width, height, { isStatic: this.body_components[id].static });
      body.frictionAir = 0;
      body.id = id;
      body.friction = 0.5;
      if (this.body_components[id].type === "bouncing") {
        body.restitution = 1;
        this.bouncing[id] = body;
        body.type = "bouncing";
        this.bouncing[id] = body;
      }
      else {
        body.restitution = 0;
        this.stopping[id] = body;
        body.type = "stopping";
        this.stopping[id] = body;
      }
      World.add(this.engine.world, [body]);
    });
    this.update = this.update.bind(this);

    Render.run(this.render);
  }

  update(delta) {
    Object.keys(this.stopping).forEach(id => {
      Body.setPosition(this.stopping[id],
        {x: this.position_components[id].x, y: this.position_components[id].y}
      );
      // console.log(this.stopping[id].position);
    });
    Object.keys(this.bouncing).forEach(id => {
      Body.setVelocity(this.bouncing[id],
        Vector.create(this.movement_components[id].x * delta, this.movement_components[id].y * delta)
      );
      console.log(this.bouncing[id].position);
    });

    Engine.update(this.engine, delta);

    Object.keys(this.stopping).forEach(id => {
      this.position_components[id].x = this.stopping[id].position.x;
      this.position_components[id].y = this.stopping[id].position.y;
    });

  }
}

export default Physics;
