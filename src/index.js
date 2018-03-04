import './styles.css';
import * as PIXI from 'pixi.js'

function runGame() {
  class Dog {
    bark() {
      console.log("Woof, woof!");
    }
  }

  console.log("IS IT EVEN WORK?");
  const loltest = () => {
    console.log("LOLTEST 123?");
  };
  loltest();
  const dog = new Dog();
  dog.bark();

  let app = new PIXI.Application({
      width: 256,
      height: 256,
      antialias: true,
      transparent: false,
      resolution: 1
    }
  );

  document.body.appendChild(app.view);

  PIXI.loader
    .add("skull.png")
    .load(setup);

  function setup() {
    let skull = new PIXI.Sprite(PIXI.loader.resources["skull.png"].texture);
    app.stage.addChild(skull);
  }

}

window.addEventListener('load', runGame);
