import {Collisions, Result, Polygon} from '../collisions/Collisions';
import Config from '../config';

class ShapeRenderer {

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute("width", Config.WORLD_WIDTH);
    this.canvas.setAttribute("height", Config.WORLD_HEIGHT);
    document.getElementById("physics_container").appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
  }

  loadLevel(components) {
    this.system = new Collisions();
    this.shape_components = components.shapes;
    this.position_components = components.positions;

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

      this.context.fillStyle = '#000000';
      this.context.fillRect(0, 0, Config.WORLD_WIDTH, Config.WORLD_HEIGHT);
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

  update() {
    Object.keys(this.shapes).forEach(id => {
      this.shapes[id].x = this.position_components[id].x;
      this.shapes[id].y = this.position_components[id].y;
      this.shapes[id].angle = this.position_components[id].angle + this.shape_components[id].angle;
    });

    this.render();
  }
}

export default ShapeRenderer;
