import Template from './common/pongLevel';
import copy from '../level-loading/copyObject';

const level = copy(Template);

level.ball.position.y = 400;

level.playerPoints = { variable: { value: 0}};
level.enemyPoints = { variable: { value: 0}};

level.pointsNeededByPlayer = { variable: { value: 5}};
level.pointsNeededByEnemy = { variable: { value: 5}};



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

export default level;
