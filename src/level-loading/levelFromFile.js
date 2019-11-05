import getEmptyComponents from './getEmptyComponents';

function levelFromFile(levelName) {
    const entitiesFromFile = require('../level-data/' + levelName);
    const entities = JSON.parse(JSON.stringify(entitiesFromFile.default));
    const level = getEmptyComponents();


    Object.keys(entities).forEach(function(entityId) {
        
        Object.keys(entities[entityId]).forEach(function(componentType) {
            let component = entities[entityId][componentType];
            if (component.leftVariable) {
                component.leftVariable = levelName + "-" + component.leftVariable;
            }
            if (component.rightVariable) {
                component.rightVariable = levelName + "-" + component.rightVariable;
            }
            if (component.variable) {
                component.variable = levelName + "-" + component.variable;
            }
            if (component.seconds) {
                component.seconds = levelName + "-" + component.seconds;
            }
            if (component.state) {
                component.state = levelName + "-" + component.state;
            }
            if (componentType == "logicalAnd" || componentType == "logicalOr") {
                component = component.map(function(name){
                    return levelName + "-" + name;
                })
            }
            if (component.seeking) {
                component.seeking = levelName + "-" + component.seeking;
            }
            if (component.enabled) {
                component.enabled = levelName + "-" + component.enabled;
            }
            if (component.operations) {
                component.operations = component.operations.map(function(name) {
                    return levelName + "-" + name;
                });
            }
            if (component.pipe) {
                component.pipe = component.pipe.map(function(name) {
                    const f = require('../level-data/operations/' + name).default;
                    return f;
                });
            }
            if (componentType == "levelExits") {
                component.forEach(function(option) {
                    option.variable = levelName + "-" + option.variable;
                });
            }
            if (componentType == "shape" && !component.verts) {
                const width = component.width;
                const height = component.height;
                const verts = [ [-width/2, -height/2,], [-width/2, height/2], [width/2, height/2], [width/2, -height/2] ];
                component.verts = verts;
            }
            if (componentType == "operation") {
                component.args = component.args.map(function(e) {
                    return levelName + "-" + e;
                });
                component.target = levelName + "-" + component.target;
            }
            
            level[componentType][levelName + "-" + entityId] = component;
        });
    });

    return level;
}

export default levelFromFile;
