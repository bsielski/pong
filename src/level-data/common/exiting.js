import Const from '../constants';

const WORLD_WIDTH = Const.WORLD_WIDTH;
const WORLD_HEIGHT = Const.WORLD_HEIGHT;

const level = {
    zero: { variable: { value: 0} },
    beginLevelDelay: { variable: { value: 1} },
    endLevelDelay: { variable: { value: 2} },

    beginLevelDelayTimerSeconds: { variable: { value: 0} },
    beginLevelDelayTimerState: { variable: { value: "running"} },

    playLevelTimerSeconds: { variable: { value: 0} },
    playLevelTimerState: { variable: { value: "stopped"} },

    endLevelDelayTimerSeconds: { variable: { value: 0} },
    endLevelDelayTimerState: { variable: { value: "stopped"} },

    startPlayLevelTimer: {
        operation: {
            pipe: ["startTimerIfDelayIsPassed"],
            args: ["beginLevelDelayPassed", "playLevelTimerState"],
            target: "playLevelTimerState"
        }
    },

    stopPlayLevelTimer: {
        operation: {
            pipe: ["stopTimerIfLevelEndedByPoints"],
            args: ["endLevelByPoints", "playLevelTimerState"],
            target: "playLevelTimerState"
        }
    },
    
    startEndLevelDelayTimer: {
        operation: {
            pipe: ["startTimerIfDelayIsPassed"],
            args: ["endLevelByPoints", "endLevelDelayTimerState"],
            target: "endLevelDelayTimerState"
        }
    },

    beginLevelDelayTimer: {
        timer: {
            seconds: "beginLevelDelayTimerSeconds",
            state: "beginLevelDelayTimerState",
        }
    },

    playLevelTimer: {
        timer: {
            seconds: "playLevelTimerSeconds",
            state: "playLevelTimerState",
        }
    },

    endLevelDelayTimer: {
        timer: {
            seconds: "endLevelDelayTimerSeconds",
            state: "endLevelDelayTimerState",
        }
    },

    endLevelByPoints: {
        logicalOr: [ "wonByPoints", "lostByPoints" ],
        variable: { value: null}
    },

    beginLevelDelayPassed: {
        condition: {
            leftVariable: "beginLevelDelayTimerSeconds",
            operator: ">=",
            rightVariable: "beginLevelDelay"
        },
        variable: { value: false}
    },

    endLevelDelayTimerDoesntStart: {
        condition: {
            leftVariable: "endLevelDelayTimerSeconds",
            operator: "<=",
            rightVariable: "zero"
        },
        variable: { value: false}
    },

    ballCanMove: {
        logicalAnd: [ "beginLevelDelayPassed", "endLevelDelayTimerDoesntStart" ],
        variable: { value: false}
    },

    endLevelDelayPassed: {
        condition: {
            leftVariable: "endLevelDelayTimerSeconds",
            operator: ">=",
            rightVariable: "endLevelDelay"
        },
        variable: { value: false}
    },

    winAndDelay: {
        logicalAnd: [ "wonByPoints", "endLevelDelayPassed" ],
        variable: { value: false}
    },

    loseAndDelay: {
        logicalAnd: [ "lostByPoints", "endLevelDelayPassed" ],
        variable: { value: false}
    },
    levelExits: {
        levelExits: [
            {
                variable: "winAndDelay",
                command: "win"
            },
            {
                variable: "loseAndDelay",
                command: "lose"
            }
        ]
    },
};

export default level;
