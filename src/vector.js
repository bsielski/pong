// import { Victor } from 'victor';
// import {Collisions, Result, Circle, Polygon} from './collisions/Collisions';

var coll = require('./collisions/Collisions');

function getAABBVerts(x, y, width, height) {
  return [ [-width/2, -height/2,], [-width/2, height/2], [width/2, height/2], [width/2, -height/2] ];
}
// const up = new Victor(0, -1);
// const right = new Victor(1, 0);
// const down = new Victor(0, 1);
// const left = new Victor(-1, 0);

const system = new coll.Collisions();
const result = system.createResult();

const xA = 0;
const yA = 0;
const widthA = 10;
const heightA = 10;
const vertsA = getAABBVerts(xA, yA, widthA, heightA);
const objectA = new coll.Polygon(xA, yA, vertsA);
system.insert(objectA);

const xB = 5;
const yB = 1;
const widthB = 10;
const heightB = 10;
const vertsB = getAABBVerts(xB, yB, widthB, heightB);
const objectB = new coll.Polygon(xB, yB, vertsB);
system.insert(objectB);

const potentialsA = objectA.potentials();
potentialsA.forEach(function (obstacle) {
  if(objectA.collides(obstacle, result)) {
    console.log("BEEEP A");
    console.log(result);
  }
});

const potentialsB = objectB.potentials();
potentialsB.forEach(function (obstacle) {
  if(objectB.collides(obstacle, result)) {
    console.log("BEEEP B");
    console.log(result);
  }
});
