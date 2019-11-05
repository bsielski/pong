import Walls from './walls';
import FPS from './fps';
import Exiting from './exiting';
import copy from '../../level-loading/copyObject';

const WORLD_WIDTH = 600;
const WORLD_HEIGHT = 500;

const LEVEL_TIME_POSITION = {X: 150, Y: 12};

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

const BALL_POSITION = {X: 300, Y: 200};
const BALL_WIDTH = 19;
const BALL_HEIGHT = 19;
const BALL_MIN_SPEED = 0.15;
const BALL_SPEED = 0.7;
const BALL_MAX_SPEED = 0.8;
const BALL_ANGLE = 2;
const BALL_RANDOM_ANGLE = 10;


const level = Object.assign(
    {},
    copy(Walls),
    copy(FPS),
    copy(Exiting),
    {
        levelTimeSecondsText: { variable: { value: "0.00" } },
        topTouchSensorState: { variable: { value: "out" } },
        bottomTouchSensorState: { variable: { value: "out" } },
        levelTime: {
            position: {
                x: LEVEL_TIME_POSITION.X,
                y: LEVEL_TIME_POSITION.Y,
                z: 10,
                angle: 0
            },
            text: {
                size: 12,
                variable: "levelTimeSecondsText",
                color: 0xffffff,
                angle: 0,
                opacity: 0.6
            }
        },
        aiPaddle: {
            position:  {
                x: PADDLE_1_POSITION.X,
                y: PADDLE_1_POSITION.Y,
                angle: Math.PI
            },
            shape: {
                width: PADDLE_WIDTH,
                height: PADDLE_HEIGHT,
                angle: 0
            },
            body:  { },
            stop:  { },
            collisions: [ ],
            sprite:  {
                width: PADDLE_WIDTH,
                height: PADDLE_HEIGHT,
                angle: 0,
                image: "LOLPIXELS",
                color: 0xff7777,
                opacity: 1.0
            },
            movement:  {
                minSpeed: 0,
                speed: 0,
                maxSpeed: PADDLE_MAX_SPEED * 0.6,
                angle: 0,
                randomAngle: 0,
                enabled: "ballCanMove"
            },
            friction:  { value: PADDLE_FRICTION},
            springPivot: { power: PADDLE_SPRING_PIVOT},
            pivotLimiter: {
                minAngle: -PADDLE_MAX_ANGLE,
                maxAngle: PADDLE_MAX_ANGLE
            },
            accelerator: {
                leftAccelerator: {
                    angle: Math.PI,
                    acceleration: PADDLE_ACCELERATION
                },
                rightAccelerator: {
                    angle: 0,
                    acceleration: PADDLE_ACCELERATION
                }
            },
            rotator:  {
                rightRotator: {
                    speed: PADDLE_ROTATOR_SPEED,
                    direction: 1
                },
                leftRotator: {
                    speed: PADDLE_ROTATOR_SPEED,
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
                leftRotator:  ["playerPaddleLeft", "confirm"],
                rightRotator:  ["playerPaddleRight"]
            },
            ai: {},
        },

        playerPaddle: {
            position: {
                x: PADDLE_2_POSITION.X,
                y: PADDLE_2_POSITION.Y,
                angle: 0
            },
            shape: {
                width: PADDLE_WIDTH+10,
                height: PADDLE_HEIGHT,
                angle: 0
            },
            body: {},
            stop: {},
            collisions: [ ],
            sprite: {
                width: PADDLE_WIDTH+10,
                height: PADDLE_HEIGHT,
                angle: 0,
                image: "LOLPIXELS",
                color: 0xffff77,
                opacity: 1.0
            },
            movement: {
                minSpeed: 0,
                speed: 0,
                maxSpeed: PADDLE_MAX_SPEED,
                angle: 0,
                randomAngle: 0,
                enabled: "ballCanMove"
            },
            friction:  { value: PADDLE_FRICTION},
            springPivot: { power: PADDLE_SPRING_PIVOT},
            pivotLimiter: {
                minAngle: -PADDLE_MAX_ANGLE,
                maxAngle: PADDLE_MAX_ANGLE
            },
            accelerator: {
                leftAccelerator: {
                    angle: Math.PI,
                    acceleration: PADDLE_ACCELERATION
                },
                rightAccelerator: {
                    angle: 0,
                    acceleration: PADDLE_ACCELERATION
                }
            },
            rotator:  {
                rightRotator:  {
                    speed: PADDLE_ROTATOR_SPEED,
                    direction: 1
                },
                leftRotator: {
                    speed: PADDLE_ROTATOR_SPEED,
                    direction: -1
                }
            },
            orders:  {
                playerPaddleLeft: false,
                playerPaddleRight: false,
                confirm: false
            },
            interpreter: {
                leftAccelerator: ["playerPaddleLeft", "confirm"],
                rightAccelerator: ["playerPaddleRight"],
                leftRotator:  ["playerPaddleLeft", "confirm"],
                rightRotator:  ["playerPaddleRight"]
            },
        },

        ball: {
            shape:  {
                width: BALL_WIDTH,
                height: BALL_HEIGHT,
                angle: 0
            },
            body:  { },
            bounce: { },
            collisions: [ ],
            sprite: {
                width: BALL_WIDTH,
                height: BALL_HEIGHT,
                angle: 0,
                image: "LOLPIXELS",
                color: 0xffffff,
                opacity: 1.0
            },
            position: {
                x: 300,
                y: 400,
                angle: 0
            },
            movement: {
                minSpeed: BALL_MIN_SPEED,
                speed: BALL_SPEED,
                maxSpeed: BALL_MAX_SPEED,
                angle: BALL_ANGLE,
                randomAngle: BALL_RANDOM_ANGLE,
                enabled: "ballCanMove"},
            ball: { }
        },

        bottomZone: {
            shape: {
                width: WORLD_WIDTH,
                height: 20,
                angle: 0
            },
            collisions: [ ],
            position: {
                x: WORLD_WIDTH/2,
                y: WORLD_HEIGHT - 25,
                angle: 0
            },
            touchSensor: {
                seeking: "ball",
                state: "bottomTouchSensorState",
                operations: ["enemy_points_incrementing"]
            }
        },
        enemy_points_incrementing: {
            operation: {
                pipe: ["incIfEntered"],
                args: ["bottomTouchSensorState", "enemyPoints"],
                target: "enemyPoints"
            }
        },
        topZone: {
            shape: {
                width: WORLD_WIDTH,
                height: 20,
                angle: 0
            },
            collisions: [ ],
            position: {
                x: WORLD_WIDTH/2,
                y: 25,
                angle: 0
            },
            touchSensor: {
                seeking: "ball",
                state: "topTouchSensorState",
                operations: ["player_points_incrementing"]
            }
        },
        player_points_incrementing: {
            operation: {
                pipe: ["incIfEntered"],
                args: ["topTouchSensorState", "playerPoints"],
                target: "playerPoints"
            }
        },

        roundLevelTime: {
            operation: {
                pipe: ["roundLevelTime"],
                args: ["playLevelTimerSeconds"],
                target: "levelTimeSecondsText"
            }
        },
    }
);

export default level;
