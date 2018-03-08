import * as p2 from 'p2';
import Config from './config';

class Physics {

  constructor(body_components, position_components, order_components) {
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute("width", Config.WORLD_WIDTH);
    this.canvas.setAttribute("height", Config.WORLD_HEIGHT);
    document.getElementById("physics_container").appendChild(this.canvas);

    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = 0.05;
    // Init p2.js
    this.world = new p2.World();
    // Add a circle
    this.circleShape = new p2.Circle({ radius: 1 });
    this.circleBody = new p2.Body({ mass:1, position:[0,3] });
    this.circleBody.addShape(this.circleShape);
    this.world.addBody(this.circleBody);
    // Add a plane
    this.planeShape = new p2.Plane();
    this.planeBody = new p2.Body();
    this.planeBody.addShape(this.planeShape);
    this.world.addBody(this.planeBody);
    this.animate = this.animate.bind(this);
    this.render = this.render.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
    this.drawPlane = this.drawPlane.bind(this);
    requestAnimationFrame(this.animate);

    this.lastTime = 1 / 60;
    this.timeStep = 1 / 60;
    this.maxSubSteps = 5;
    this.delta = 0;
  }

  // Animation loop
  animate(time){
    requestAnimationFrame(this.animate);
    this.dt = this.lastTime ? (time - this.lastTime) / 1000 : 0;
    this.dt = Math.min(1 / 10, this.dt);
    this.lastTime = time;
    // Move physics bodies forward in time
    // Render scene
    this.render();
  }

  drawCircle(){
    this.ctx.beginPath();
    var x = this.circleBody.interpolatedPosition[0],
        y = this.circleBody.interpolatedPosition[1],
        radius = this.circleShape.radius;
    this.ctx.arc(x,y,radius,0,2*Math.PI);
    this.ctx.stroke();
  }
  drawPlane(){
    var y = this.planeBody.interpolatedPosition[1];
    this.ctx.moveTo(-this.w, y);
    this.ctx.lineTo(this.w, y);
    this.ctx.stroke();
  }
  render(){
    // Clear the this.canvas
    this.ctx.clearRect(0,0,this.w,this.h);
    // Transform the this.canvas
    // Note that we need to flip the y axis since Canvas pixel coordinates
    // goes from top to bottom, while physics does the opposite.
    this.ctx.save();
    this.ctx.translate(this.w/2, this.h/2);  // Translate to the center
    this.ctx.scale(50, -50);       // Zoom in and flip y axis
    // Draw all bodies
    this.drawCircle();
    this.drawPlane();
    // Restore transform
    this.ctx.restore();
  }

  update(delta) {
  //   Object.keys(this.order_components).forEach(id => {
  //     if (this.order_components[id].leftOrder === "start" && this.order_components[id].rightOrder === "stop") {
  //       Body.setVelocity(this.bodies[id], {x: -Config.PLAYER_PADDLE_SPEED * delta, y: 0});
  //       // Body.applyForce(this.bodies[id], this.position_components[id], {x: -Config.PLAYER_PADDLE_SPEED * delta, y: 0});
  //       console.log(this.bodies[id].force);
  //     }
  //     else if (this.order_components[id].leftOrder === "stop" && this.order_components[id].rightOrder === "start") {
  //       Body.setVelocity(this.bodies[id], {x: Config.PLAYER_PADDLE_SPEED * delta, y: 0});
  //       // Body.applyForce(this.bodies[id], this.position_components[id], {x: Config.PLAYER_PADDLE_SPEED * delta, y: 0})
  //     }
  //   });
    this.world.step(this.timeStep, delta, this.maxSubSteps);
  //   Engine.update(this.engine, delta);
  //   Object.keys(this.bodies).forEach(id => {
  //     this.position_components[id].x = this.bodies[id].position.x;
  //     this.position_components[id].y = this.bodies[id].position.y;
  //   });
  //
  }
}

export default Physics;
