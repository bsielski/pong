import {Collisions, Result, Polygon} from './collisions/Collisions';
import Config from './config';
import Victor from 'victor';

class Physics {

  constructor(shape_components, sensor_components, position_components, movement_components) {

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute("width", Config.WORLD_WIDTH);
    this.canvas.setAttribute("height", Config.WORLD_HEIGHT);
    document.getElementById("physics_container").appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');

    this.system = new Collisions();
    this.result = this.system.createResult();

    this.shape_components = shape_components;
    this.sensor_components = sensor_components;
    this.position_components = position_components;
    this.movement_components = movement_components;

    this.bouncing = {};
    this.stopping = {};
    this.zones = {};

    Object.keys(this.shape_components).forEach(id => {

      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.shape_components[id].width;
      const height = this.shape_components[id].height;
      const verts = this.getAABBVerts(x, y, width, height);
      const shape = new Polygon(x, y, verts);
      shape.id = id;
      if (this.shape_components[id].type === "stopping") {
        this.stopping[id] = shape;
        shape.type = "stopping";
      }
      else if (this.shape_components[id].type === "bouncing") {
        this.bouncing[id] = shape;
        shape.type = "bouncing";
      }
      else if (this.shape_components[id].type === "zone") {
        this.zones[id] = shape;
        shape.type = "zone";
      }
      shape.angle = this.shape_components[id].angle;
      this.system.insert(shape);

      this.context.beginPath();
      this.context.strokeStyle = 'blue';
      shape.draw(this.context);
      this.context.stroke();
    });
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.handleCollisions = this.handleCollisions.bind(this);
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

  handleCollisions() {
    this.system.update();

    Object.keys(this.bouncing).forEach(id => {
      let shape = this.bouncing[id];
      let shape_speed = this.movement_components[id].speed;
      let shape_angle = this.movement_components[id].angle;
      let shape_vector = new Victor(shape_speed, 0).rotate(shape_angle);
      let potentials = shape.potentials();
      potentials.forEach(obstacle => {
        if(shape.collides(obstacle, this.result)) {
          if (this.result.b.type !== "zone") {
            let normal = new Victor(this.result.overlap * this.result.overlap_x, this.result.overlap * this.result.overlap_y).normalize();
            let dot = shape_vector.x * normal.x + shape_vector.y * normal.y;
            let newX = shape_vector.x - 2.0 * dot * normal.x;
            let newY = shape_vector.y - 2.0 * dot * normal.y;
            let newVector = new Victor(newX, newY);
            let newAngle = newVector.angle();

            this.movement_components[id].angle = newAngle;

            this.position_components[id].x -= this.result.overlap * this.result.overlap_x;
            this.position_components[id].y -= this.result.overlap * this.result.overlap_y;
          }
        }
      });
    });

    Object.keys(this.stopping).forEach(id => {
      let shape = this.stopping[id];
      let potentials = shape.potentials();
      potentials.forEach(obstacle => {
        if(shape.collides(obstacle, this.result)) {
          if (this.result.b.type !== "zone") {
            this.stopping[id].x -= this.result.overlap * this.result.overlap_x;
          }
        }
      });
    });

    Object.keys(this.zones).forEach(id => {
      let zone = this.zones[id];
      let potentials = zone.potentials();
      this.sensor_components[id].detected = false;
      potentials.forEach(obstacle => {
        if(zone.collides(obstacle, this.result)) {
          if (this.sensor_components[id].seeking === this.result.b.id ) {
            this.sensor_components[id].detected = true;
          }
        }
      });
    });

  }

  update(delta) {
    Object.keys(this.stopping).forEach(id => {
      this.stopping[id].x = this.position_components[id].x;
      this.stopping[id].y = this.position_components[id].y;
      this.stopping[id].angle = this.shape_components[id].angle;
    });
    Object.keys(this.bouncing).forEach(id => {
      this.bouncing[id].x = this.position_components[id].x;
      this.bouncing[id].y = this.position_components[id].y;
      this.bouncing[id].angle = this.shape_components[id].angle;
    });

    this.handleCollisions();

    Object.keys(this.stopping).forEach(id => {
      this.position_components[id].x = this.stopping[id].x;
      this.position_components[id].y = this.stopping[id].y;
    });
    this.render();
  }
}

export default Physics;
