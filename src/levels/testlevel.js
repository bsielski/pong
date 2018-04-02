import Const from './constants';
import LevelGenerator from './levelGenerator';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';

function getTestLevel() {

  const level = new LevelGenerator();

  level.newEntity()
  .add("positions",     { x: Const.PADDLE_1_POSITION.X, y: Const.PADDLE_1_POSITION.Y, angle: Math.PI})
  .add("shapes",        { width: Const.PADDLE_WIDTH-10, height: Const.PADDLE_HEIGHT, angle: 0})
  .add("bodies",        { })
  .add("stopping",      { })
  .add("collisions",    [ ])
  .add("sprites",       { width: Const.PADDLE_WIDTH-10, height: Const.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xff7777, opacity: 1.0})
  .add("movements",     { minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED * 0.6, angle: 0, randomAngle: 0})
  .add("frictions",     { value: Const.PADDLE_FRICTION})
  .add("springPivots",  { power: 0.09})
  .add("pivotLimiters", { minAngle: -0.15, maxAngle: 0.15})
  .add("accelerators",  { leftAccelerator:  {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION},
                          rightAccelerator: {angle: 0, acceleration: Const.PADDLE_ACCELERATION} })
  .add("rotators",      { rightRotator: {speed: 0.3, direction: 1},
                          leftRotator:  {speed: 0.3, direction: -1} })
  .add("orders",        { playerPaddleLeft: false,
                          playerPaddleRight: false,
                          confirm: false})
  .add("interpreters",  { leftAccelerator:  ["playerPaddleLeft", "confirm"],
                          rightAccelerator: ["playerPaddleRight"],
                          leftRotator:      ["playerPaddleLeft", "confirm"],
                          rightRotator:     ["playerPaddleRight"] })
  .add("ai",            { });

  level.newEntity()
  .add("positions",     { x: Const.PADDLE_2_POSITION.X, y: Const.PADDLE_2_POSITION.Y, angle: 0})
  .add("shapes",        { width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0})
  .add("bodies",        { })
  .add("stopping",      { })
  .add("collisions",    [ ])
  .add("sprites",       { width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 1.0})
  .add("movements",     { minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED, angle: 0, randomAngle: 0})
  .add("frictions",     { value: Const.PADDLE_FRICTION})
  .add("springPivots",  { power: 0.09})
  .add("pivotLimiters", { minAngle: -0.15, maxAngle: 0.15})
  .add("accelerators",  { leftAccelerator:  { angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION },
                          rightAccelerator: { angle: 0, acceleration: Const.PADDLE_ACCELERATION } })
  .add("rotators",      { rightRotator:     { speed: 0.3, direction: 1},
                          leftRotator: {speed: 0.3, direction: -1} })
  .add("orders",        { playerPaddleLeft: false,
                          playerPaddleRight: false,
                          confirm: false})
  .add("interpreters",  { leftAccelerator:  ["playerPaddleLeft", "confirm"],
                          rightAccelerator: ["playerPaddleRight"],
                          leftRotator:      ["playerPaddleLeft", "confirm"],
                          rightRotator:     ["playerPaddleRight"] });

  const ball = level.newEntity()
  .add("shapes",     { width: Const.BALL_WIDTH, height: Const.BALL_HEIGHT, angle: 0})
  .add("bodies",     { })
  .add("bouncing",   { })
  .add("collisions", [ ])
  .add("sprites",    { width: Const.BALL_WIDTH, height: Const.BALL_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0})
  .add("positions",  { x: 300, y: 400, angle: 0})
  .add("movements",  { minSpeed: 0.15, speed: 0.7, maxSpeed: 0.8, angle: 2, randomAngle: 1})
  .add("balls",      { })
  .getUuid();

  level.newEntity()
  .add("shapes",     { width: 40, height: Const.WORLD_HEIGHT, angle: 0})
  .add("bodies",     { })
  .add("collisions", [ ])
  .add("sprites",    { width: 40, height: Const.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0})
  .add("positions",  { x: 0, y: Const.WORLD_HEIGHT/2, angle: 0});

  const eastWall = level.newEntity()
  .add("positions",  { x: Const.WORLD_WIDTH, y: Const.WORLD_HEIGHT/2, angle: 0})
  .add("shapes",     { width: 40, height: Const.WORLD_HEIGHT, angle: 0})
  .add("bodies",     { })
  .add("collisions", [ ])
  .add("sprites",    { width: 40, height: Const.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0})
  .getUuid();

  level.newEntity()
  .add("shapes",     { width: Const.WORLD_WIDTH, height: 40, angle: 0})
  .add("bodies",     { })
  .add("collisions", [ ])
  .add("sprites",    { width: Const.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0})
  .add("positions",  { x: Const.WORLD_WIDTH/2, y: 0, angle: 0});

  level.newEntity()
  .add("shapes",     { width: Const.WORLD_WIDTH, height: 40, angle: 0})
  .add("bodies",     { })
  .add("collisions", [ ])
  .add("sprites",    { width: Const.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0})
  .add("positions",  { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT, angle: 0});

  level.newEntity() // net
  .add("sprites",    { width: Const.WORLD_WIDTH, height: 10, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 0.2})
  .add("positions",  { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/2, angle: 0});

  const fpsNumber = level.newEntity() // fpsNumber
  .add("variables",  { value: 0})
  .getUuid();

  const fpsText = level.newEntity() // fpsText
  .add("texts",     { size: 12, variable: fpsNumber, color: 0xffffff, angle: 0, opacity: 0.6})
  .add("positions", { x: Const.WORLD_WIDTH/6, y: Const.WORLD_HEIGHT/2, angle: 0})
  .getUuid();

  const fpsCounter = level.newEntity() // fpsCounter
  .add("fpsCounters", { variable: fpsNumber})
  .getUuid();

  const enemyPoints = level.newEntity() // enemyPoints
  .add("variables", { value: 0})
  .getUuid();

  const bottomZone = level.newEntity() // bottomZone
  .add("shapes",       { width: Const.WORLD_WIDTH, height: 20, angle: 0})
  .add("collisions",   [ ])
  .add("positions",    { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT - 25, angle: 0})
  .add("touchSensors", { seeking: ball, last: false, current: false, variable: enemyPoints, operation: +1})
  .getUuid();

  const topCounter = level.newEntity() // topCounter
  .add("positions",  { x: 60, y: 220, angle: 0})
  .add("texts",      { size: 26, variable: enemyPoints, color: 0xff7777, angle: 0, opacity: 0.6})
  .getUuid();

  const playerPoints = level.newEntity() // playerPoints
  .add("variables", { value: 0})
  .getUuid();

  const topZone = level.newEntity() // topZone
  .add("shapes",       { width: Const.WORLD_WIDTH, height: 20, angle: 0})
  .add("collisions",   [ ])
  .add("positions",    { x: Const.WORLD_WIDTH/2, y: 25, angle: 0})
  .add("touchSensors", { seeking: ball, last: false, current: false, variable: playerPoints, operation: +1})
  .getUuid();

  const bottomCounter = level.newEntity() // bottomCounter
  .add("positions", { x: 60, y: 280, angle: 0})
  .add("texts",     { size: 26, variable: playerPoints, color: 0xffff77, angle: 0, opacity: 0.6})
  .getUuid();


  const pointsNeededByPlayer = level.newEntity()
  .add("variables",  { value: 5})
  .getUuid();

  const have10points = level.newEntity()
  .add("conditions", { leftVariable: playerPoints, operator: ">=", rightVariable: pointsNeededByPlayer})
  .getUuid();

  const victoryConditions = level.newEntity()
  .add("victoryConditions",  [ have10points])
  .getUuid();


  return level.getComponents();
}

export default getTestLevel;
