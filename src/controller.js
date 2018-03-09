import Config from './config';

class Controller {

  constructor(position_components, input_components) {

    this.position_components = position_components;
    this.input_components = input_components;

    window.addEventListener('keydown', (function(event) {
      switch (event.keyCode) {
        case 37: //left
          // console.log("LEFT");
          this.input_components[2].leftArrow = true;
        break;
        case 39: //right
          // console.log("RIGHT");
          this.input_components[2].rightArrow = true;
        break;
      }
    }).bind(this));
    window.addEventListener('keyup', (function(event) {
      switch (event.keyCode) {
        case 37: //left
          // console.log("LEFT UP");
          this.input_components[2].leftArrow = false;
        break;
        case 39: //right
          // console.log("RIGHT UP");
          this.input_components[2].rightArrow = false;
        break;
      }
    }).bind(this));

    this.update = this.update.bind(this);
  }

  update(delta) {
    Object.keys(this.input_components).forEach(id => {
      if (this.input_components[id].leftArrow === true && this.input_components[id].rightArrow === false) {
        this.position_components[id].x = this.position_components[id].x - Config.PLAYER_PADDLE_SPEED * delta;
        // console.log(this.position_components[id].x);
      }
      else if (this.input_components[id].leftArrow === false && this.input_components[id].rightArrow === true) {
        this.position_components[id].x = this.position_components[id].x + Config.PLAYER_PADDLE_SPEED * delta;
        // console.log(this.position_components[id].x);
      }
    });
  }
}

export default Controller;
