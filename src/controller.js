class Controller {

  constructor() {
    this.keyState = {
      leftArrow: false,
      rightArrow: false
    };

    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37: //left
        // console.log("LEFT");
        this.keyState.leftArrow = true;
        break;
        case 39: //right
        // console.log("RIGHT");
        this.keyState.rightArrow = true;
        break;
      }
    });
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 37: //left
        // console.log("LEFT UP");
        this.keyState.leftArrow = false;
        break;
        case 39: //right
        // console.log("RIGHT UP");
        this.keyState.rightArrow = false;
        break;
      }
    });

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.order_components = components.orders;
    this.input_components = components.inputs;
  }

  update(delta) {
    Object.keys(this.input_components).forEach(id => {
      if (this.keyState.leftArrow === true && this.keyState.rightArrow === false) {
        this.order_components[id].movement = "left";
        // console.log("ORDER: left");
      }
      else if (this.keyState.leftArrow === false && this.keyState.rightArrow === true) {
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
