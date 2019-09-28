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
    system.insert(body);
}

function updateShapeRenderer() {
    const system = new Collisions();
    const shapes = {};
    const canvas = document.createElement('canvas');
    canvas.setAttribute("width", Config.WORLD_WIDTH);
    canvas.setAttribute("height", Config.WORLD_HEIGHT);
    document.getElementById("physics_container").appendChild(canvas);
    const context = canvas.getContext('2d');

    function render() {
	context.fillStyle = '#000000';
	context.strokeStyle = '#FFFFFF';
	context.fillRect(0, 0, Config.WORLD_WIDTH, Config.WORLD_HEIGHT);
	context.beginPath();
	system.draw(context);
	context.stroke();
    }

    return function(gameState) {
	const shape_components = gameState.currentLevel.shapes;
	const position_components = gameState.currentLevel.positions;

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
	render();
    }
}

export default updateShapeRenderer;
