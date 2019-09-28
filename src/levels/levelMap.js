const LEVEL_MAP = {
    "void": {
	"start": "level00titleScreen",
    },
    "level00titleScreen": {
	"win": "level03intro",
    },
    "level01intro": {
	"win": "level01",
    },
    "level01": {
	"win": "level02intro",
	"lose": "level01lose"
    },
    "level01lose": {
	"win": "level01"
    },
    "level02intro": {
	"win": "level02",
    },
    "level02": {
	"win": "level03intro",
	"lose": "level02lose"
    },
    "level02lose": {
	"win": "level02"
    },
    "level03intro": {
	"win": "level03",
    },
    "level03": {
	"win": "level9999congratulationsScreen",
	"lose": "level03lose"
    },
    "level03lose": {
	"win": "level03"
    },
    "level9999congratulationsScreen": {
	"win": "level00titleScreen",
    }
};
export default LEVEL_MAP;
