import Victor from 'victor';

function updateBouncings(gameState) {

    function bouncingVector(approachingVector, normalVector) {
        const dot = approachingVector.x * normalVector.x + approachingVector.y * normalVector.y;
        const newX = approachingVector.x - 2.0 * dot * normalVector.x;
        const newY = approachingVector.y - 2.0 * dot * normalVector.y;
        return new Victor(newX, newY);
    }

    const bouncing_components = gameState.currentLevel.bounce;
    const collision_components = gameState.currentLevel.collisions;
    const body_components = gameState.currentLevel.body;
    const position_components = gameState.currentLevel.position;
    const movement_components = gameState.currentLevel.movement;

    Object.keys(bouncing_components).forEach(id => {
        let bouncingBody = bouncing_components[id];
        let bouncingBody_speed = movement_components[id].speed;
        let bouncingBody_angle = movement_components[id].angle;
        let bouncingBody_vector = new Victor(bouncingBody_speed, 0).rotate(bouncingBody_angle);

        collision_components[id].forEach(collision => {
            if (body_components[collision.bId]) {

                const normal = Victor.fromArray(collision.overlapV).normalize();
                const newVector = bouncingVector(bouncingBody_vector, normal);
                const newAngle = newVector.angle();

                movement_components[id].angle = newAngle;

                position_components[id].x -= collision.overlapV[0];
                position_components[id].y -= collision.overlapV[1];
            }
        });
    });
}

export default updateBouncings;
