import getKeyBinding from '../keyBinding';

class Controller {

  constructor(keyState) {
    this.binding = getKeyBinding();
    this.keyState = keyState;
    this.codes = {
      37: "leftArrow",
      39: "rightArrow",
      13: "enter",
    };

    window.addEventListener('keydown', event => {
      this.keyState[this.codes[event.keyCode]].lastAction = "down";
    });
    window.addEventListener('keyup', event => {
      this.keyState[this.codes[event.keyCode]].lastAction = "up";
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
          this.keyState[command.key].previousState = this.keyState[command.key].state;
          if (this.keyState[command.key].lastAction === "down") {
            this.keyState[command.key].state = true;
          }
          else {
            this.keyState[command.key].state = false;
          }
          if (command.mode === "pressed") {
            orders[order] = this.keyState[command.key].state;
          }
          else if (command.mode === "single") {
            if (this.keyState[command.key].state === true && this.keyState[command.key].previousState === false) {
              orders[order] = true;
            }
            else {
              orders[order] = false;
            }
          }
        });
      });
    });
  }
}

export default Controller;
