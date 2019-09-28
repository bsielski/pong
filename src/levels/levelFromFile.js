function levelFromFile(levelName) {
    const entitiesFromFile = require('./' + levelName + ".json");
    const entities = JSON.parse(JSON.stringify(entitiesFromFile));
    const level = {
        positions: {},
        shapes: {},
        bodies: {},
        collisions: {},
        conditions: {},
        logicalAnds: {},
        logicalOrs: {},
        bouncing: {},
        stopping: {},
        touchSensors: {},
        movementConditions: {},
        movements: {},
        sprites: {},
        inputs: {},
        orders: {},
        texts: {},
        fpsCounters: {},
        timers: {},
        ai: {},
        balls: {},
        variables: {},
        conditions: {},
        exitLevel: {},
        defeats: {},
        accelerators: {},
        rotators: {},
        orders: {},
        interpreters: {},
        frictions: {},
        springPivots: {},
        pivotLimiters: {},
    };

    Object.keys(entities).forEach(function(entityId) {
        entities[entityId].forEach(function(component) {
            if (component.leftVariable) {
                component.leftVariable = levelName + "-" + component.leftVariable;
            }
            if (component.rightVariable) {
                component.rightVariable = levelName + "-" + component.rightVariable;
            }
            if (component.variable) {
                component.variable = levelName + "-" + component.variable;
            }
            if (component.operands) {
                component.operands = component.operands.map(function(name){
                    return levelName + "-" + name;
                })
                
            }
            if (component.seeking) {
                component.seeking = levelName + "-" + component.seeking;
            }
            if (component.enabled) {
                component.enabled = levelName + "-" + component.enabled;
            }
            if (component.color) {
                component.color = parseInt(component.color, 16);
            }
            if (component.componentType == "exitLevel") {
                component.options.forEach(function(option) {
                    option.variable = levelName + "-" + option.variable;
                });
            }
            if (
                (
                    component.componentType == "shapes"
                        // || component.componentType == "sprites"
                )
                    && !component.verts) {
                const width = component.width;
                const height = component.height;
                const verts = [ [-width/2, -height/2,], [-width/2, height/2], [width/2, height/2], [width/2, -height/2] ];
                component.verts = verts;
            }
            level[component.componentType][levelName + "-" + entityId] = component;
        });
    });    
    return level;
}

export default levelFromFile;
