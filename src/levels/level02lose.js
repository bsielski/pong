import Const from './constants';
import LevelGenerator from './levelGenerator';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';

function getLevel02lose() {

    const level = new LevelGenerator();


    const playerPaddle = level.newEntity()
	  .add("shapes", { width: Const.PADDLE_WIDTH+10, height: Const.PADDLE_HEIGHT, angle: 0})
	  .add("bodies", {})
	  .add("stopping", {})
	  .add("collisions", [])
	  .add("positions", {x: Const.PADDLE_2_POSITION.X, y: Const.PADDLE_2_POSITION.Y, angle: 0})
	  .add("movements", {minSpeed: 0, speed: 0, maxSpeed: Const.PADDLE_MAX_SPEED, angle: 0, randomAngle: 0, enabled: true})
	  .add("accelerators", { leftAccelerator: {angle: Math.PI, acceleration: Const.PADDLE_ACCELERATION} })
	  .add("orders", {confirm: false})
	  .add("interpreters", { leftAccelerator: ["confirm"] })
	  .getUuid();

    const playerPoints = level.newEntity()
	  .add("variables", {value: 0})
	  .getUuid();

    const leftZone = level.newEntity()
	  .add("shapes",  { width: Const.WORLD_WIDTH/4, height: 20, angle: 0})
	  .add("collisions",  [ ])
	  .add("positions",  { x: 155 /*Const.WORLD_WIDTH/4*/, y: Const.WORLD_HEIGHT - 25, angle: 0})
	  .add("touchSensors",  { seeking: playerPaddle, last: false, current: false, variable: playerPoints, operation: +1})
	  .getUuid();

    const pointsNeededByPlayer = level.newEntity()
	  .add("variables",  { value: 1})
	  .getUuid();

    const have10points = level.newEntity()
	  .add("conditions",  { leftVariable: playerPoints, operator: ">=", rightVariable: pointsNeededByPlayer})
	  .getUuid();

    const victoryConditions = level.newEntity()
	  .add("victoryConditions",  [ have10points])
	  .getUuid();

    const levelTitle = level.newEntity()
	  .add("variables",  { value: "You lose!"})
	  .getUuid();

    const gameTitleText = level.newEntity()
	  .add("texts",  { size: 32, variable: levelTitle, color: 0xffffff, angle: 0, opacity: 0.6})
	  .add("positions",  { x: Const.WORLD_WIDTH/2, y: 40, angle: 0})
	  .getUuid();

    const clickEnterMessage = level.newEntity()
	  .add("variables",  { value: "Press Enter to try again"})
	  .getUuid();

    const manualMessageText = level.newEntity()
	  .add("texts",  { size: 17, variable: clickEnterMessage, color: 0xffffff, angle: 0, opacity: 0.6})
	  .add("positions",  { x: Const.WORLD_WIDTH/2, y: 40 + 350, angle: 0})
	  .getUuid();

    return level.getComponents();
}

export default getLevel02lose;
