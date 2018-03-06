import {Engine, Render, World, Bodies} from 'matter-js';

class Physics {

  constructor(body_components, position_components) {

    this.engine = Engine.create();
    this.body_components = body_components;
    this.position_components = position_components;

    this.render = Render.create({
                    element: document.getElementById("physics_container"),
                    engine: this.engine,
                    options: {
                        width: 600,
                        height: 400,
                        wireframes: true
                    }
                 });

    Object.keys(this.body_components).forEach(id => {
      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.body_components[id].width;
      const height = this.body_components[id].height;
      const body = Bodies.rectangle(x, y, width, height, { isStatic: (parseInt(id, 10) !== 3? true : false) });
      World.add(this.engine.world, [body]);
    });

    Engine.run(this.engine);
    Render.run(this.render);
  }

}

export default Physics;
