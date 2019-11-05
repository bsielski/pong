import FPS from './fps';
import copy from '../../level-loading/copyObject';

const level =  Object.assign(
    {},
    copy(FPS),
    {
        touchSensorState: { variable: { value: "out"} },

        levelTitle: {
            variable: { value: "You lose!" }
        },

        levelTitleTextId: {
            text: {
                size: 32,
                variable: "levelTitle",
                color: "0xffffff",
                angle: 0,
                opacity: 0.6
            },
            position: {
                x: 300,
                y: 40,
                angle: 0
            }
        },

        haveEnoughPoint: {
            condition: {
                leftVariable: "playerPoints",
                operator: ">=",
                rightVariable: "pointsNeededByPlayer"
            },
            variable: {
                value: false
            }
        },

        manualMessage: {
            variable: {
                value: "Press Enter to continue!"
            }
        },

        manualMessageTextId: {
            text: {
                size: 17,
                variable: "manualMessage",
                color: "0xffffff",
                angle: 0,
                opacity: 0.6
            },
            position: {
                x: 300,
                y: 390,
                angle: 0
            }
        },

        paddle: {
            shape: {
                width: 131,
                height: 25,
                angle: 0
            },
            body: {},
            stop: {},
            collisions: [],
            position: {
                x: 300,
                y: 460,
                angle: 0
            },
            movement: {
                minSpeed: 0,
                speed: 0,
                maxSpeed: 0.7,
                angle: 0,
                randomAngle: 0
            },
            accelerator: {
                leftAccelerator: {
                    angle: 3.141592653589793,
                    acceleration: 0.15
                }
            },
            orders: {
                confirm: false
            },
            interpreter: {
                leftAccelerator: [
                    "confirm"
                ]
            }
        },

        playerPoints: {
            variable: { value: 0 }
        },

        pointsNeededByPlayer: {
            variable: { value: 1 }
        },

        sensor: {
            shape: {
                width: 150,
                height: 20,
                angle: 0
            },
            collisions: [],
            position: {
                x: 155,
                y: 475,
                angle: 0
            },
            touchSensor: {
                seeking: "paddle",
                state: "touchSensorState",
                operations: ["points_incrementing"]
            }
        },
        points_incrementing: {
            operation: {
                pipe: ["incIfEntered"],
                args: ["touchSensorState", "playerPoints"],
                target: "playerPoints"
            }
        },
        levelExits: {
            levelExits: [
                {
                    variable: "haveEnoughPoint",
                    command: "win"
                }
            ]
        }
    }
);

export default level;
