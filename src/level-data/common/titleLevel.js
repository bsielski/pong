import Const from '../constants';
import FPS from './fps';
import copy from '../../level-loading/copyObject';

const WORLD_WIDTH = Const.WORLD_WIDTH;
const WORLD_HEIGHT = Const.WORLD_HEIGHT;

const level = Object.assign(
    {},
    copy(FPS),
    {
        touchSensorState: { variable: { value: "out"} },

        levelTitleText: {
            variable: {
                value: "A Placeholder!"
            }
        },
        levelSubtitleText: {
            variable: {
                value: "Placeholder!"
            }
        },
        pressEnterText: {
            variable: {
                value: "Press Placeholder to continue!"
            }
        },
        levelTitle: {
            text: {
                size: 52,
                variable: "levelTitleText",
                color: 0xffffff,
                angle: 0,
                opacity: 0.6
            },
            position: {
                x: WORLD_WIDTH/2,
                y: WORLD_HEIGHT/4,
                angle: 0
            }
        },
        levelSubtitle: {
            text: {
                size: 35,
                variable: "levelSubtitleText",
                color: 0xffffff,
                angle: 0,
                opacity: 0.6
            },
            position: {
                x: WORLD_WIDTH/2,
                y: 195,
                angle: 0
            }
        },
        pressEnter: {
            text: {
                size: 17,
                variable: "pressEnterText",
                color: 0xffffff,
                angle: 0,
                opacity: 0.6
            },
            position: {
                x: WORLD_WIDTH/2,
                y: 390,
                angle: 0
            }
        },
        have1point: {
            condition: {
                leftVariable: "playerPoints",
                operator: ">=",
                rightVariable: "pointsNeededByPlayer"
            },
            variable: {
                value: false
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
            variable: {
                value: 0
            }
        },
        pointsNeededByPlayer: {
            variable: {
                value: 1
            }
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
                    variable: "have1point",
                    command: "win"
                }
            ]
        }
    }
);

export default level;
