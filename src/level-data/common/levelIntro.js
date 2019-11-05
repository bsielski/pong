import FPS from './fps';
import copy from '../../level-loading/copyObject';

const level = Object.assign(
    {},
    copy(FPS),
    {
        touchSensorState: { variable: { value: "out"} },
        levelTitleText: { variable: {
            value: "Pleceholder",
        },},
        levelManualText: { variable: {
                value: "Pleceholder Pleceholder Pleceholder",
        },},
        clickEnterText: { variable: {
            value: "Press Enter to continue",
        },},

        levelTitle: {
            text: {
                size: 32,
                variable: "levelTitleText",
                color: 0xffffff,
                angle: 0,
                opacity: 0.6,
            },
            position: {
                x: 300,
                y: 40,
                angle: 0,
            },
        },
        levelManual: {
            text: {
                size: 20,
                variable: "levelManualText",
                color: 0xffffff,
                angle: 0,
                opacity: 0.6,
            },
            position: {
                x: 300,
                y: 210,
                angle: 0,
            },
        },
        clickEnter: {
            text: {
                size: 17,
                variable: "clickEnterText",
                color: 0xffffff,
                angle: 0,
                opacity: 0.6,
            },
            position: {
                x: 300,
                y: 390,
                angle: 0,
            },
        },
        haveEnoughPoints: {
            condition: {
                leftVariable: "playerPoints",
                operator: ">=",
                rightVariable: "pointsNeededByPlayer",
            },
            variable: {
                value: false,
            },
        },
        leftZone: {
            shape: {
                width: 150,
                height: 20,
                angle: 0,
            },
            collisions: [],
            position: {
                x: 155,
                y: 475,
                angle: 0,
            },
            touchSensor: {
                seeking: "playerPaddle",
                state: "touchSensorState",
                operations: ["points_incrementing"]
            },
        },
        points_incrementing: {
            operation: {
                pipe: ["incIfEntered"],
                args: ["touchSensorState", "playerPoints"],
                target: "playerPoints"
            }
        },
        playerPaddle: {
            shape: {
                width: 131,
                height: 25,
                angle: 0,
            },
            body: {},
            stop: {},
            collisions: [],
            position: {
                x: 300,
                y: 460,
                angle: 0,
            },
            movement: {
                minSpeed: 0,
                speed: 0,
                maxSpeed: 0.7,
                angle: 0,
                randomAngle: 0,
            },
            accelerator: {
                leftAccelerator: {
                    angle: 3.141592653589793,
                    acceleration: 0.15,
                }
            },
            orders: {
                confirm: false,
            },
            interpreter: {
                leftAccelerator: [
                    "confirm",
                ]
            },
        },
        playerPoints: {
            variable: {
                value: 0,
            },
        },
        pointsNeededByPlayer: {
            variable: {
                value: 1,
            },
        },
        levelExits: {
            levelExits: [
                {
                    variable: "haveEnoughPoints",
                    command: "win",
                },
            ],
        },
    }
);

export default level;
