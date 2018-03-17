import {Collisions, Result, Polygon} from './collisions/Collisions';
import Config from './config';

class CollisionDetector {

  constructor() {

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute("width", Config.WORLD_WIDTH);
    this.canvas.setAttribute("height", Config.WORLD_HEIGHT);
    document.getElementById("physics_container").appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');

    this.system = new Collisions();
    this.result = this.system.createResult();

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
  }

  loadLevel(components) {
    this.shape_components = components.shapes;
    this.position_components = components.positions;
    this.collisions_components = components.collisions;

    this.shapes = {};

    Object.keys(this.shape_components).forEach(id => {
      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.shape_components[id].width;
      const height = this.shape_components[id].height;
      const verts = this.getAABBVerts(x, y, width, height);
      const body = new Polygon(x, y, verts);
      body.id = id;
      this.shapes[id] = body;
      body.angle = this.shape_components[id].angle;
      this.system.insert(body);

      this.context.beginPath();
      this.context.strokeStyle = 'blue';
      body.draw(this.context);
      this.context.stroke();
    });

  }

  render() {
    this.context.fillStyle = '#000000';
		this.context.strokeStyle = '#FFFFFF';
    this.context.fillRect(0, 0, Config.WORLD_WIDTH, Config.WORLD_HEIGHT);
		this.context.beginPath();
		this.system.draw(this.context);
		this.context.stroke();
		if(false) {
			this.context.strokeStyle = '#00FF00';
			this.context.beginPath();
			this.system.drawBVH(this.context);
			this.context.stroke();
		}
  }

  getAABBVerts(x, y, width, height) {
    return [ [-width/2, -height/2,], [-width/2, height/2], [width/2, height/2], [width/2, -height/2] ];
  }

  update() {
    Object.keys(this.shapes).forEach(id => {
      this.shapes[id].x = this.position_components[id].x;
      this.shapes[id].y = this.position_components[id].y;
      this.shapes[id].angle = this.shape_components[id].angle;
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

    this.render();
  }
}

export default CollisionDetector;
