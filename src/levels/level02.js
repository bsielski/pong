import Const from './constants';
import LevelGenerator from './levelGenerator';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';
import BTC_BALL from './images/btcball.png';

function getLevel02() {

    const level = new LevelGenerator();

    const enemyPaddle = level.newEntity()
	  .add("positions", { x: Const.PADDLE_1_POSITION.X, y: Const.PADDLE_1_POSITION.Y, angle: Math.PI})
	  .add("shapes", { width: Const.PADDLE_WIDTH-10, height: Const.PADDLE_HEIGHT, angle: 0})
	  .add("bodies", { })
	  .add("stopping", { })
	  .add("collisions", [ ])
	  .add("sprites", { width: Const.PADDLE_WIDTH-10, height: Const.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xff7777, opacity: 1.0})
	  .add("movements", { minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED * 0.4, angle: 0, randomAngle: 0})
	  .add("frictions", { value: Const.PADDLE_FRICTION})
	  .add("springPivots", { power: 0.09})
	  .add("pivotLimiters", { minAngle: -0.15, maxAngle: 0.15})
	  .add("accelerators", {  leftAccelerator: {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION},
                                  rightAccelerator: {angle: 0, acceleration: Const.PADDLE_ACCELERATION} })
	  .add("rotators", {  rightRotator: {speed: 0.3, direction: 1}, leftRotator: {speed: 0.3, direction: -1} })
	  .add("orders", { playerPaddleLeft: false, playerPaddleRight: false})
	  .add("interpreters", {  leftAccelerator: ["playerPaddleLeft", "confirm"],
                                  rightAccelerator: ["playerPaddleRight"],
                                  leftRotator: ["playerPaddleLeft", "confirm"],
                                  rightRotator: ["playerPaddleRight"] })
	  .add("ai", { })
	  .getUuid();

    const playerPaddle = level.newEntity()
	  .add("shapes", { width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0})
	  .add("bodies", { })
	  .add("stopping", { })
	  .add("collisions", [ ])
	  .add("sprites", { width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffff77, opacity: 1.0})
	  .add("positions", { x: Const.PADDLE_2_POSITION.X, y: Const.PADDLE_2_POSITION.Y, angle: 0})
	  .add("movements", { minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED, angle: 0, randomAngle: 0})
	  .add("frictions", { value: Const.PADDLE_FRICTION})
	  .add("springPivots", { power: 0.09})
	  .add("pivotLimiters", { minAngle: -0.15, maxAngle: 0.15})
	  .add("accelerators", {  leftAccelerator: {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION},
                                  rightAccelerator: {angle: 0, acceleration: Const.PADDLE_ACCELERATION} })
	  .add("rotators", {  rightRotator: {speed: 0.3, direction: 1}, leftRotator: {speed: 0.3, direction: -1} })
	  .add("orders", { playerPaddleLeft: false, playerPaddleRight: false})
	  .add("interpreters", {  leftAccelerator: ["playerPaddleLeft", "confirm"],
                                  rightAccelerator: ["playerPaddleRight"],
                                  leftRotator: ["playerPaddleLeft", "confirm"],
                                  rightRotator: ["playerPaddleRight"] })
	  .getUuid();

    const ball = level.newEntity()
	  .add("shapes", { width: Const.BALL_WIDTH + 10, height: Const.BALL_HEIGHT + 10, angle: 0})
	  .add("bodies", { })
	  .add("bouncing", { })
	  .add("collisions", [ ])
	  .add("sprites", { width: Const.BALL_WIDTH + 10, height: Const.BALL_HEIGHT + 10, angle: 0, image: BTC_BALL, color: 0xffffff, opacity: 1.0})
	  .add("positions", { x: 300, y: 400, angle: 0})
	  .add("movements", { minSpeed: 0.25, speed: 0.4, maxSpeed: 0.55, angle: 2, randomAngle: 1})
	  .add("balls", { })
	  .getUuid();

    const leftWall = level.newEntity()
	  .add("shapes", { width: 40, height: Const.WORLD_HEIGHT, angle: 0})
	  .add("bodies", { })
	  .add("collisions", [ ])
	  .add("sprites", { width: 40, height: Const.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0})
	  .add("positions", { x: 0, y: Const.WORLD_HEIGHT/2, angle: 0})
	  .getUuid();

    const rightWall = level.newEntity()
	  .add("shapes", { width: 40, height: Const.WORLD_HEIGHT, angle: 0})
	  .add("bodies", { })
	  .add("collisions", [ ])
	  .add("sprites", { width: 40, height: Const.WORLD_HEIGHT, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 1.0})
	  .add("positions", { x: Const.WORLD_WIDTH, y: Const.WORLD_HEIGHT/2, angle: 0})
	  .getUuid();

    const toptWall = level.newEntity()
	  .add("shapes", { width: Const.WORLD_WIDTH, height: 40, angle: 0})
	  .add("bodies", { })
	  .add("collisions", [ ])
	  .add("sprites", { width: Const.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0x00ff00, opacity: 1.0})
	  .add("positions", { x: Const.WORLD_WIDTH/2, y: 0, angle: 0})
	  .getUuid();

    const bottomWall = level.newEntity()
	  .add("shapes", { width: Const.WORLD_WIDTH, height: 40, angle: 0})
	  .add("bodies", { })
	  .add("collisions", [ ])
	  .add("sprites", { width: Const.WORLD_WIDTH, height: 40, angle: 0, image: LOLPIXELS, color: 0xff0000, opacity: 1.0})
	  .add("positions", { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT, angle: 0})
	  .getUuid();

    const net = level.newEntity()
	  .add("sprites", { width: Const.WORLD_WIDTH, height: 10, angle: 0, image: LOLPIXELS, color: 0xffffff, opacity: 0.2})
	  .add("positions", { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT/2, angle: 0})
	  .getUuid();

    const fpsNumber = level.newEntity()
	  .add("variables", { value: 0})
	  .getUuid();

    const fpsText = level.newEntity()
	  .add("texts", { size: 12, variable: fpsNumber, color: 0xffffff, angle: 0, opacity: 0.6})
	  .add("positions", { x: Const.WORLD_WIDTH/6, y: Const.WORLD_HEIGHT/2, angle: 0})
	  .getUuid();

    const fpsCounter = level.newEntity()
	  .add("fpsCounters", { variable: fpsNumber})
	  .getUuid();

    const amountOfMoney = level.newEntity()
    .add("variables", { value: 6000})
    .getUuid();

    const obstacleRed = level.newEntity()
    .add("positions", { x: 155, y: 350, angle: 0})
    .add("shapes", { verts: [[-50, -20], [50, -20], [0, 30]], width: 60, height: 80, angle: 0})
    .add("bodies", { })
    .add("collisions", [ ])
    .add("sprites", { verts: [[-50, -20], [50, -20], [0, 30]], angle: 0, color: 0xff0000, opacity: 1})
    .add("touchSensors", { seeking: ball, last: false, current: false, variable: amountOfMoney, operation: -1000})
    .getUuid();

    const obstacleGreen = level.newEntity()
    .add("positions", { x: 455, y: 150, angle: Math.PI})
    .add("shapes", { verts: [[-50, -20], [50, -20], [0, 30]], width: 60, height: 80, angle: 0})
    .add("bodies", { })
    .add("collisions", [ ])
    .add("sprites", { verts: [[-50, -20], [50, -20], [0, 30]], angle: 0, color: 0x00ff00, opacity: 1})
    .add("touchSensors", { seeking: ball, last: false, current: false, variable: amountOfMoney, operation: +1000})
    .getUuid();

    const bottomZone = level.newEntity()
	  .add("shapes", { width: Const.WORLD_WIDTH, height: 20, angle: 0})
	  .add("collisions", [ ])
	  .add("positions", { x: Const.WORLD_WIDTH/2, y: Const.WORLD_HEIGHT - 25, angle: 0})
	  .add("touchSensors", { seeking: ball, last: false, current: false, variable: amountOfMoney, operation: -1000})
	  .getUuid();

    const moneyCounter = level.newEntity()
	  .add("positions", { x: 60, y: 220, angle: 0})
	  .add("texts", { size: 26, variable: amountOfMoney, color: 0xff7777, angle: 0, opacity: 0.6})
	  .getUuid();

    const topZone = level.newEntity()
	  .add("shapes", { width: Const.WORLD_WIDTH, height: 20, angle: 0})
	  .add("collisions", [ ])
	  .add("positions", { x: Const.WORLD_WIDTH/2, y: 25, angle: 0})
	  .add("touchSensors", { seeking: ball, last: false, current: false, variable: amountOfMoney, operation: +1000})
	  .getUuid();

    const pointsNeededByPlayer = level.newEntity()
	  .add("variables", { value: 12000})
	  .getUuid();

    const have12k = level.newEntity()
	  .add("conditions", { leftVariable: amountOfMoney, operator: ">=", rightVariable: pointsNeededByPlayer})
	  .getUuid();

    const victoryConditions = level.newEntity()
	  .add("victoryConditions", [ have12k])
	  .getUuid();

    return level.getComponents();
}

export default getLevel02;
