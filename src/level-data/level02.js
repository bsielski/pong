import Template from './common/pongLevel';
import copy from '../level-loading/copyObject';

const level = copy(Template);

level.topTriangleTouchSensorState = { variable: { value: "out" } };
level.bottomTriangleTouchSensorState = { variable: { value: "out" } };

level.amountOfMoney = { variable: { value: 6000 } };
level.maximumMoney = { variable: { value: 12000 } };
level.minimumMoney = { variable: { value: 0 } };
level.addedMoney = { variable: { value: 1000} };
level.subtractedMoney = { variable: { value: -1000 } };

level.ball.position.y = 400;

level.ball.movement.minSpeed *= 1.8;
level.ball.movement.speed *= 0.8;
level.ball.movement.maxSpeed *= 0.6;

level.player_points_incrementing = {
    operation: {
        pipe: ["addIfEntered"],
        args: ["topTriangleTouchSensorState", "amountOfMoney", "addedMoney"],
        target: "amountOfMoney"
    }
};

level.enemy_points_incrementing = {
    operation: {
        pipe: ["addIfEntered"],
        args: ["bottomTriangleTouchSensorState", "amountOfMoney", "subtractedMoney"],
        target: "amountOfMoney"
    }
};

level.wonByPoints = {
    condition: {
        leftVariable: "amountOfMoney",
        operator: ">=",
        rightVariable: "maximumMoney"
    },
    variable: { value: null},
};

level.lostByPoints = {
    condition: {
        leftVariable: "amountOfMoney",
        operator: "<=",
        rightVariable: "minimumMoney"
    },
    variable: { value: null}
};

level.obstacleRed = {
    position: {
        x: 145,
        y: 350,
        angle: 0
    },
    shape: {
        verts: [[ -40, -20], [40, -20], [0, 15]],
        width: 60,
        height: 80,
        angle: 0
    },
    body: { },
    collisions: [ ],
    sprite: {
        verts: [[-40, -20], [40, -20], [0, 15]],
        angle: 0,
        color: 0xff0000,
        opacity: 1
    },
    touchSensor: {
        seeking: "ball",
        state: "bottomTriangleTouchSensorState",
        operations: ["enemy_points_incrementing"]

    },
};

level.obstacleGreen = {
    position: {
        x: 445,
        y: 150,
        angle: Math.PI
    },
    shape: {
        verts: [[ -60, -20], [50, -20], [0, 30]],
        width: 60,
        height: 80,
        angle: 0
    },
    body: { },
    collisions: [ ],
    sprite: {
        verts: [[-60, -20], [50, -20], [0, 30]],
        angle: 0,
        color: 0x00ff00,
        opacity: 1
    },
    touchSensor: {
        seeking: "ball",
        state: "topTriangleTouchSensorState",
        operations: ["player_points_incrementing"]
    },
};

level.north.sprite.color = 0x00ff00;
level.south.sprite.color = 0xff0000;
level.topZone.touchSensor.operation = ["player_points_incrementing"];
level.bottomZone.touchSensor.operation = ["enemy_points_incrementing"];

level.moneyCounter = {
    position: {
        x: 60,
        y: 220,
        angle: 0
    },
    text: {
        size: 26,
        variable: "amountOfMoney",
        color: 0xffff77,
        angle: 0,
        opacity: 0.6
    }
};

export default level;
