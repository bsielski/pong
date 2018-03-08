import {Collisions, Result, Circle, Polygon} from 'collisions';
import Config from './config';

class Physics {

  constructor(body_components, position_components, order_components) {

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute("width", Config.WORLD_WIDTH);
    this.canvas.setAttribute("height", Config.WORLD_HEIGHT);
    document.getElementById("physics_container").appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');

    this.system = new Collisions();
    this.result = this.system.createResult();

    this.body_components = body_components;
    this.position_components = position_components;
    this.order_components = order_components;

    this.bodies = {};

    Object.keys(this.body_components).forEach(id => {

      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.body_components[id].width;
      const height = this.body_components[id].height;
      const verts = this.getAABBVerts(x, y, width, height);
      const body = new Polygon(x, y, verts);
      body.id = id;
      this.bodies[id] = body;
      console.log(body.id);
      this.system.insert(body);

      this.context.beginPath();
      this.context.strokeStyle = 'blue';
      if (parseInt(id, 10) === 3) {
        this.context.strokeStyle = 'red';
      }
      body.draw(this.context);

      if (parseInt(id, 10) === 4) {
        console.log(body.x, body.y);
        console.log(verts);
      }

      this.context.stroke();
    });
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
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

  update(delta) {
    Object.keys(this.order_components).forEach(id => {
      if (this.order_components[id].leftOrder === "start" && this.order_components[id].rightOrder === "stop") {
        this.bodies[id].x = this.position_components[id].x - Config.PLAYER_PADDLE_SPEED * delta;
        console.log(this.bodies[id].x);
      }
      else if (this.order_components[id].leftOrder === "stop" && this.order_components[id].rightOrder === "start") {
        this.bodies[id].x = this.position_components[id].x + Config.PLAYER_PADDLE_SPEED * delta;
        console.log(this.bodies[id].x);
      }
    });
    this.system.update();

    Object.keys(this.bodies).forEach(id => {
      this.position_components[id].x = this.bodies[id].x;
      this.position_components[id].y = this.bodies[id].y;
    });
    this.render();
  }
}

export default Physics;
