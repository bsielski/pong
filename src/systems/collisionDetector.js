import {Collisions, Result, Polygon} from '../collisions/Collisions';
import Config from '../config';

class CollisionDetector {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.system = new Collisions();
    this.result = this.system.createResult();
    this.shape_components = components.shapes;
    this.position_components = components.positions;
    this.collisions_components = components.collisions;

    this.shapes = {};

    Object.keys(this.shape_components).forEach(id => {
      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const body = new Polygon(x, y, this.shape_components[id].verts);
      body.id = id;
      this.shapes[id] = body;
      body.angle = this.position_components[id].angle + this.shape_components[id].angle;
      body.angle = 1;
      this.system.insert(body);
    });

  }

  update() {
    Object.keys(this.shapes).forEach(id => {
      this.shapes[id].x = this.position_components[id].x;
      this.shapes[id].y = this.position_components[id].y;
      this.shapes[id].angle = this.position_components[id].angle + this.shape_components[id].angle;
    });

    this.system.update();

    Object.keys(this.collisions_components).forEach(id => {
      let body = this.shapes[id];
      this.collisions_components[id] = [];
      let potentials = body.potentials();
      potentials.forEach(obstacle => {
        if (body.collides(obstacle, this.result)) {
          this.collisions_components[id].push(
            {
              bId: this.result.b.id,
              aInB: this.result.a_in_b,
              overlapV: [
                this.result.overlap * this.result.overlap_x,
                this.result.overlap * this.result.overlap_y
              ]
            }
          );
        }
      });
    });

  }
}

export default CollisionDetector;
