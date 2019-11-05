import getEmptyComponents from './getEmptyComponents';

function getInitGameState() {

    return {
        global: {
            levelTrace: ["void"],
            exitLevelCommand: "start"
        },
        currentLevel: getEmptyComponents()
    };
}

export default getInitGameState;
