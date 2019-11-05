import Const from '../constants';

const WORLD_WIDTH = Const.WORLD_WIDTH;
const WORLD_HEIGHT = Const.WORLD_HEIGHT;

const walls = {
    west: {
        shape: {
            width: 40,
            height: WORLD_HEIGHT,
            angle: 0
        },
        body: {},
        collisions: [],
        sprite: {
            width: 40,
            height: WORLD_HEIGHT,
            angle: 0,
            image: "LOLPIXELS",
            color: 0xffffff,
            opacity: 1.0
        },
        position: {
            x: 0,
            y: WORLD_HEIGHT/2,
            angle: 0
        }
    },
    east: {
        position: {
            x: WORLD_WIDTH,
            y: WORLD_HEIGHT/2,
            angle: 0
        },
        shape: {
            width: 40,
            height: WORLD_HEIGHT,
            angle: 0
        },
        body: {},
        collisions: [],
        sprite: {
            width: 40,
            height: WORLD_HEIGHT,
            angle: 0,
            image: "LOLPIXELS",
            color: 0xffffff,
            opacity: 1.0
        }
    },
    north: {
        shape: {
            width: WORLD_WIDTH,
            height: 40,
            angle: 0
        },
        body: {},
        collisions: [],
        sprite: {
            width: WORLD_WIDTH,
            height: 40,
            angle: 0,
            image: "LOLPIXELS",
            color: 0xffffff,
            opacity: 1.0
        },
        position: {
            x: WORLD_WIDTH/2,
            y: 0,
            z: 0,
            angle: 0
        }
    },
    south: {
        shape: {
            width: WORLD_WIDTH,
            height: 40,
            angle: 0
        },
        body: {},
        collisions: [],
        sprite: {
            width: WORLD_WIDTH,
            height: 40,
            angle: 0,
            image: "LOLPIXELS",
            color: 0xffffff,
            opacity: 1.0
        },
        position: {
            x: WORLD_WIDTH/2,
            y: WORLD_HEIGHT,
            angle: 0
        },
    },
    net: {
        sprite: {
            width: WORLD_WIDTH,
            height: 10,
            angle: 0,
            image: "LOLPIXELS",
            color: 0xffffff,
            opacity: 0.2
        },
        position: {
            x: WORLD_WIDTH/2,
            y: WORLD_HEIGHT/2,
            angle: 0
        }
    }
};

export default walls;
