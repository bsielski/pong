import {Collisions, Result, Polygon} from '../collisions/Collisions';
import Config from '../config';


function removeDeletedShapes(shape_components, system, shapes) {
    Object.keys(shapes).forEach(function(id) {
        if (shape_components[id]) {
        }
        else {
            system.remove(shapes[id]);
            delete shapes[id];
        }
    });
}

function addShapeToSystem(shape_components, position_components, system, shapes, id) {
    const x = position_components[id].x;
    const y = position_components[id].y;
    const body = new Polygon(x, y, shape_components[id].verts);
    body.id = id;
    shapes[id] = body;
    body.angle = position_components[id].angle + shape_components[id].angle;
    //body.angle = 1;
    system.insert(body);
}

function updateCollisionDetectors() {

    const system = new Collisions();
    const result = system.createResult();
    const shapes = {};

    return function(gameState) {

        const shape_components = gameState.currentLevel.shapes;
        const position_components = gameState.currentLevel.positions;
        const collisions_components = gameState.currentLevel.collisions;

        removeDeletedShapes(shape_components, system, shapes);

        Object.keys(shape_components).forEach(id => {
            if (shapes[id]) {
                shapes[id].x = position_components[id].x;
                shapes[id].y = position_components[id].y;
                shapes[id].angle = position_components[id].angle + shape_components[id].angle;
            }
            else {
                addShapeToSystem(shape_components, position_components, system, shapes, id);
            }
        });

        system.update();
        Object.keys(collisions_components).forEach(id => {
            let body = shapes[id];
            collisions_components[id].collisions = [];
            let potentials = body.potentials();
            potentials.forEach(obstacle => {
                if (body.collides(obstacle, result)) {
                    collisions_components[id].collisions.push(
                        {
                            bId: result.b.id,
                            aInB: result.a_in_b,
                            overlapV: [
                                result.overlap * result.overlap_x,
                                result.overlap * result.overlap_y
                            ]
                        }
                    );
                }
            });
        });
    }
}

export default updateCollisionDetectors;
