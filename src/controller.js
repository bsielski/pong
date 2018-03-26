import getKeyBinding from './keyBinding';

class Controller {

  constructor() {
    this.binding = getKeyBinding();
    this.keyState = {
      leftArrow: false,
      rightArrow: false,
      enter: false
    };

    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37: //left
          this.keyState.leftArrow = true;
        break;
        case 39: //right
          this.keyState.rightArrow = true;
        break;
        case 13: //enter
          this.keyState.enter = true;
        break;
      }
    });
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 37: //left
          this.keyState.leftArrow = false;
        break;
        case 39: //right
          this.keyState.rightArrow = false;
        break;
        case 13: //enter
          this.keyState.enter = false;
        break;
      }
    });

    this.loadLevel = this.loadLevel.bind(this);
    this.update = this.update.bind(this);
  }

  loadLevel(components) {
    this.order_components = components.orders;
  }

  updateOrders() {

  }

  update(delta) {

    Object.keys(this.order_components).forEach(id => {
      const orders = this.order_components[id];
      Object.keys(orders).forEach(order => {
        const commands = this.binding[order];
        commands.forEach(command => {
          if (command.mode === "pressed") {
            orders[order] = this.keyState[command.key];
          }
        });
      });
    });
  }
}

export default Controller;
