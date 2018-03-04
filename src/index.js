import './styles.css';

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
}

window.addEventListener('load', runGame);
