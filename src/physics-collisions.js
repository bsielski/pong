import {Collisions, Result, Circle, Polygon} from './collisions/Collisions';
import Config from './config';
import Victor from 'victor';

class Physics {

  constructor(body_components, sensor_components, position_components, movement_components) {

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute("width", Config.WORLD_WIDTH);
    this.canvas.setAttribute("height", Config.WORLD_HEIGHT);
    document.getElementById("physics_container").appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');

    this.system = new Collisions();
    this.result = this.system.createResult();

    this.body_components = body_components;
    this.sensor_components = sensor_components;
    this.position_components = position_components;
    this.movement_components = movement_components;

    this.bouncing = {};
    this.stopping = {};
    this.zones = {};

    Object.keys(this.body_components).forEach(id => {

      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.body_components[id].width;
      const height = this.body_components[id].height;
      const verts = this.getAABBVerts(x, y, width, height);
      const body = new Polygon(x, y, verts);
      body.id = id;
      if (this.body_components[id].type === "stopping") {
        this.stopping[id] = body;
        body.type = "stopping";
      }
      else if (this.body_components[id].type === "bouncing") {
        this.bouncing[id] = body;
        body.type = "bouncing";
      }
      else if (this.body_components[id].type === "zone") {
        this.zones[id] = body;
        body.type = "zone";
      }

      // console.log(body.id);
      this.system.insert(body);

      this.context.beginPath();
      this.context.strokeStyle = 'blue';
      if (parseInt(id, 10) === 3) {
        this.context.strokeStyle = 'red';
      }
      body.draw(this.context);

      if (parseInt(id, 10) === 4) {
        // console.log(body.x, body.y);
        // console.log(verts);
      }

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
      let body = this.bouncing[id];
      let potentials = body.potentials();
      potentials.forEach(obstacle => {
        if(body.collides(obstacle, this.result)) {
          if (this.result.b.type !== "zone") {
            // console.log("BEEEP");
            // console.log(this.result);
            if (this.result.overlap_x !== 0) {
              this.movement_components[id].x *= -1;
            }
            if (this.result.overlap_y !== 0) {
              this.movement_components[id].y *= -1;
            }
            const spread = this.movement_components[id].randomAngle;
            const randomAngle = Math.floor(Math.random() * spread * 2 + 1) - spread;
            const vector = new Victor(this.movement_components[id].x, this.movement_components[id].y);
            vector.rotateDeg(randomAngle);
            this.movement_components[id].x = vector.x;
            this.movement_components[id].y = vector.y;
            this.position_components[id].x -= this.result.overlap * this.result.overlap_x;
            this.position_components[id].y -= this.result.overlap * this.result.overlap_y;
          }
        }
      });
    });

    Object.keys(this.stopping).forEach(id => {
      let body = this.stopping[id];
      let potentials = body.potentials();
      potentials.forEach(obstacle => {
        if(body.collides(obstacle, this.result)) {
          if (this.result.b.type !== "zone") {
            // console.log("BEEEP");
            this.stopping[id].x -= this.result.overlap * this.result.overlap_x;
            // this.position_components[id].x -= this.result.overlap * this.result.overlap_x;
            // this.position_components[id].y -= this.result.overlap * this.result.overlap_y;
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
            console.log("DDD");
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
    });
    Object.keys(this.bouncing).forEach(id => {
      this.bouncing[id].x = this.position_components[id].x;
      this.bouncing[id].y = this.position_components[id].y;
    });


    this.handleCollisions();

    Object.keys(this.stopping).forEach(id => {
      this.position_components[id].x = this.stopping[id].x;
      this.position_components[id].y = this.stopping[id].y;
    });
    // Object.keys(this.bouncing).forEach(id => {
    //   this.position_components[id].x = this.bouncing[id].x;
    //   this.position_components[id].y = this.bouncing[id].y;
    // });

    this.render();
  }
}

export default Physics;
