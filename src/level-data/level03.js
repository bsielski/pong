import Template from './common/pongLevel';
import copy from '../level-loading/copyObject';

const PADDLE_MAX_SPEED = 0.7;
const PADDLE_ACCELERATION = 0.15;
const PADDLE_FRICTION = 0.006;
const PADDLE_WIDTH = 111;
const PADDLE_HEIGHT = 25;
const PADDLE_MAX_ANGLE = 0.15;
const PADDLE_SPRING_PIVOT = 0.09;
const PADDLE_ROTATOR_SPEED = 0.3;
const PADDLE_1_POSITION = {X: 300, Y: 40};
const PADDLE_2_POSITION = {X: 300, Y: 460};

const level = copy(Template);

level.pointsNeededByPlayer = { variable: { value: 7 } };
level.pointsNeededByEnemy = { variable: { value: 7 } };

level.playerPoints = { variable: { value: 0 } };
level.enemyPoints = { variable: { value: 0 } };

level.ball.position.y = 400;

level.wonByPoints = {
    condition: {
        leftVariable: "playerPoints",
        operator: ">=",
        rightVariable: "pointsNeededByPlayer"
    },
    variable: { value: null},
};

level.lostByPoints = {
    condition: {
        leftVariable: "enemyPoints",
        operator: ">=",
        rightVariable: "pointsNeededByEnemy"
    },
    variable: { value: null}
};

level.topCounter = {
    position: {
        x: 60,
        y: 220,
        angle: 0
    },
    text: {
        size: 26,
        variable: "enemyPoints",
        color: 0xff7777,
        angle: 0,
        opacity: 0.6
    }
};

level.bottomCounter = {
    position: {
        x: 60,
        y: 280,
        angle: 0
    },
    text: {
        size: 26,
        variable: "playerPoints",
        color: 0xffff77,
        angle: 0,
        opacity: 0.6
    }
};

level.aiPaddle2 = {
    position: {
        x: PADDLE_1_POSITION.X + 20,
        y: PADDLE_1_POSITION.Y + 35,
        angle: Math.PI
    },
    shape: {
        width: PADDLE_WIDTH-20,
        height: PADDLE_HEIGHT,
        angle: 0
    },
    body: { },
    stop: { },
    collisions: [ ],
    sprite: {
        width: PADDLE_WIDTH-20,
        height: PADDLE_HEIGHT,
        angle: 0,
        image: "LOLPIXELS",
        color: 0xff9999,
        opacity: 1.0
    },
    movement: {
        minSpeed: 0,
        speed: 0,
        maxSpeed: PADDLE_MAX_SPEED * 0.4,
        angle: 0,
        randomAngle: 0,
        enabled: "ballCanMove"
    },
    friction: {
        value: PADDLE_FRICTION * 0.4
    },
    springPivot: {
        power: 0.09
    },
    pivotLimiter:{
        minAngle: -0.20,
        maxAngle: 0.20
    },
    accelerator: {
        leftAccelerator: {
            angle: Math.PI,
            acceleration: PADDLE_ACCELERATION * 0.8
        },
 	rightAccelerator: {
            angle: 0,
            acceleration: PADDLE_ACCELERATION * 0.8
        }
    },
    rotator: {
        rightRotator: {
            speed: 0.3,
            direction: 1
        },
 	leftRotator: {
            speed: 0.3,
            direction: -1
        }
    },
    orders: {
        playerPaddleLeft: false,
 	playerPaddleRight: false,
 	confirm: false
    },
    interpreter: {
        leftAccelerator: ["playerPaddleLeft", "confirm"],
 	rightAccelerator: ["playerPaddleRight"],
 	leftRotator: ["playerPaddleLeft", "confirm"],
 	rightRotator: ["playerPaddleRight"]
    },
    ai: {},
};



export default level;
