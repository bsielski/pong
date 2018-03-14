import * as SAT from 'sat';
import Config from './config';

class Physics {

  constructor(body_components, sensor_components, position_components, movement_components) {

    this.body_components = body_components;
    this.sensor_components = sensor_components;
    this.position_components = position_components;
    this.movement_components = movement_components;

    this.bouncing = {};
    this.stopping = {};
    this.zones = {};
    this.immobiles = {};

    this.response = new SAT.Response();

    Object.keys(this.body_components).forEach(id => {

      const x = this.position_components[id].x;
      const y = this.position_components[id].y;
      const width = this.body_components[id].width;
      const height = this.body_components[id].height;
      const verts = this.getAABBVerts(x, y, width, height);
      const body = new SAT.Polygon(new SAT.Vector(x, y), verts);
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
      else if (this.body_components[id].type === "immobile") {
        this.immobiles[id] = body;
        body.type = "immobile";
      }
      if (this.body_components[id].angle) {body.angle = this.body_components[id].angle;}
      // console.log(body.id);

    });
    this.update = this.update.bind(this);
    this.handleCollisions = this.handleCollisions.bind(this);
  }

  getAABBVerts(x, y, width, height) {
    return [
      new SAT.Vector(-width/2, -height/2),
      new SAT.Vector(width/2, -height/2),
      new SAT.Vector(width/2, height/2),
      new SAT.Vector(-width/2, height/2),
    ];
  }

  handleCollisions() {

    Object.keys(this.bouncing).forEach(aId => {
      let body = this.bouncing[aId];
      Object.keys(this.stopping).forEach(bId => {
        if (SAT.testPolygonPolygon(body, this.stopping[bId], this.response)) {
          body.x += this.response.overlapV.x;
          body.y += this.response.overlapV.y;
        }
      });
      Object.keys(this.immobiles).forEach(bId => {
        if (SAT.testPolygonPolygon(body, this.immobiles[bId], this.response)) {
          body.x += this.response.overlapV.x;
          body.y += this.response.overlapV.y;
        }
      });

    //
    //     if(body.collides(obstacle, this.result)) {
    //       if (this.result.b.type !== "zone") {
    //         // console.log("BEEEP");
    //         // console.log(this.result);
    //         if (this.result.overlap_x !== 0) {
    //           this.movement_components[id].x *= -1;
    //         }
    //         if (this.result.overlap_y !== 0) {
    //           this.movement_components[id].y *= -1;
    //         }
    //         const spread = this.movement_components[id].randomAngle;
    //         const randomAngle = Math.floor(Math.random() * spread * 2 + 1) - spread;
    //         const vector = new Victor(this.movement_components[id].x, this.movement_components[id].y);
    //         vector.rotateDeg(randomAngle);
    //         if (this.body_components[this.result.b.id].angle) {
    //           vector.rotate(this.body_components[this.result.b.id].angle);
    //         }
    //         this.movement_components[id].x = vector.x;
    //         this.movement_components[id].y = vector.y;
    //         this.position_components[id].x -= this.result.overlap * this.result.overlap_x;
    //         this.position_components[id].y -= this.result.overlap * this.result.overlap_y;
    //       }
    //     }
    //   });
    // });
    //
    // Object.keys(this.stopping).forEach(id => {
    //   let body = this.stopping[id];
    //   let potentials = body.potentials();
    //   potentials.forEach(obstacle => {
    //     if(body.collides(obstacle, this.result)) {
    //       if (this.result.b.type !== "zone") {
    //         // console.log("BEEEP");
    //         this.stopping[id].x -= this.result.overlap * this.result.overlap_x;
    //         // this.position_components[id].x -= this.result.overlap * this.result.overlap_x;
    //         // this.position_components[id].y -= this.result.overlap * this.result.overlap_y;
    //       }
    //     }
    //   });
    // });
    //
    // Object.keys(this.zones).forEach(id => {
    //   let zone = this.zones[id];
    //   let potentials = zone.potentials();
    //   this.sensor_components[id].detected = false;
    //   potentials.forEach(obstacle => {
    //     if(zone.collides(obstacle, this.result)) {
    //       if (this.sensor_components[id].seeking === this.result.b.id ) {
    //         console.log("DDD");
    //         this.sensor_components[id].detected = true;
    //       }
    //     }
    //   });
    // });
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
    Object.keys(this.bouncing).forEach(id => {
      this.position_components[id].x = this.bouncing[id].x;
      this.position_components[id].y = this.bouncing[id].y;
    });

  }
}

export default Physics;
