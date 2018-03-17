class Controller {

  constructor() {
    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.order_components = components.orders;
    this.input_components = components.inputs;

    Object.keys(this.input_components).forEach(id => {
      window.addEventListener('keydown', (function(event) {
        switch (event.keyCode) {
          case 37: //left
          // console.log("LEFT");
          this.input_components[id].leftArrow = true;
          break;
          case 39: //right
          // console.log("RIGHT");
          this.input_components[id].rightArrow = true;
          break;
        }
      }).bind(this));
      window.addEventListener('keyup', (function(event) {
        switch (event.keyCode) {
          case 37: //left
          // console.log("LEFT UP");
          this.input_components[id].leftArrow = false;
          break;
          case 39: //right
          // console.log("RIGHT UP");
          this.input_components[id].rightArrow = false;
          break;
        }
      }).bind(this));
    });
  }

  update(delta) {
    Object.keys(this.input_components).forEach(id => {
      if (this.input_components[id].leftArrow === true && this.input_components[id].rightArrow === false) {
        this.order_components[id].movement = "left";
        // console.log("ORDER: left");
      }
      else if (this.input_components[id].leftArrow === false && this.input_components[id].rightArrow === true) {
        this.order_components[id].movement = "right";
        // console.log("ORDER: right");
      }
      else {
        this.order_components[id].movement = "stop";
        // console.log("ORDER: stop");
      }

    });
  }
}

export default Controller;
