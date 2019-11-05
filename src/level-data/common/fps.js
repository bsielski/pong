const WORLD_WIDTH = 600;
const WORLD_HEIGHT = 500;

const level = {
    fpsNumber: {
        variable: { value: 0}
    },

    fpsText: {
        text: {
            size: 12,
            variable: "fpsNumber",
            color: 0xffffff,
            angle: 0,
            opacity: 0.6
        },
        position: {
            x: 25,
            y: 12,
            z: 10,
            angle: 0
        }
    },

    fpsCounter: {
        fpsCounter: { variable: "fpsNumber"}
    },
}

export default level;
