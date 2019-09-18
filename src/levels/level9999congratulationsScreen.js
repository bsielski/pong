import Const from './constants';
import LevelGenerator from './levelGenerator';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';
import {v4} from 'uuid';

function getLevel9999congratulationsScreen() {

  const level = new LevelGenerator();

  const playerPoints = level.newEntity().add("variables", { value: 0}).getUuid();
  const pointsNeededByPlayer = level.newEntity().add("variables", { value: 1}).getUuid();

  const have10points = level.newEntity()
  .add("conditions", { leftVariable: playerPoints, operator: ">=", rightVariable: pointsNeededByPlayer})
  .add("variables",  { value: null})
  .getUuid();

  const victoryConditionsId = level.newEntity()
  .add("victories", {variable: have10points})
  .getUuid();

  const paddle = level.newEntity()
  .add("shapes",       { width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0})
  .add("bodies",       { })
  .add("stopping",     { })
  .add("collisions",   [ ])
  .add("positions",    { x: Const.PADDLE_2_POSITION.X, y: Const.PADDLE_2_POSITION.Y, angle: 0})
  .add("movements",    { minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED, angle: 0, randomAngle: 0})
  .add("accelerators", {  leftAccelerator: {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION} })
  .add("orders",       { confirm: false})
  .add("interpreters", { leftAccelerator: ["confirm"] })
  .getUuid();

  level.newEntity()
  .add("shapes",       { width: Const.WORLD_WIDTH/4, height: 20, angle: 0})
  .add("collisions",   [ ])
  .add("positions",    { x: 155 /*Const.WORLD_WIDTH/4*/, y: Const.WORLD_HEIGHT - 25, angle: 0})
  .add("touchSensors", { seeking: paddle, last: false, current: false, variable: playerPoints, operation: +1})

  const gameTitle = level.newEntity()
  .add("variables", { value: "You Won!"})
  .getUuid();

  const gameTitleTextId = level.newEntity()
  .add("texts",     { size: 52, variable: gameTitle, color: 0xffffff, angle: 0, opacity: 0.6})
  .add("positions", { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4, angle: 0})
  .getUuid();

  const gameSubTitle = level.newEntity()
  .add("variables", { value: "Game Over"})
  .getUuid();

  const gameSubTitleTextId = level.newEntity()
  .add("texts",     { size: 35, variable: gameSubTitle, color: 0xffffff, angle: 0, opacity: 0.6})
  .add("positions", { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/4 + 70, angle: 0})
  .getUuid();

  return level.getComponents();
}

export default getLevel9999congratulationsScreen;
