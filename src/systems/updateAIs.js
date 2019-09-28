function updateAIs(gameState) {

    const ball_components = gameState.currentLevel.balls;
    const ai_components = gameState.currentLevel.ai;
    const position_components = gameState.currentLevel.positions;
    const movement_components = gameState.currentLevel.movements;
    const order_components = gameState.currentLevel.orders;
    const direction = 0;

    Object.keys(ai_components).forEach(aiId => {
        let nearestBall = null;
        let west = {playerPaddleLeft: true, playerPaddleRight: false};
        let east = {playerPaddleLeft: false, playerPaddleRight: true};
        if (position_components[aiId].angle >= Math.PI ) {
            west = {playerPaddleLeft: false, playerPaddleRight: true};
            east = {playerPaddleLeft: true, playerPaddleRight: false};
        }

        Object.keys(ball_components).forEach(ballId => {
            nearestBall = ballId;
        });
        if (position_components[nearestBall].x - 45 > position_components[aiId].x) {
            order_components[aiId] = Object.assign(order_components[aiId], east);
        }
        else if (position_components[nearestBall].x + 45 < position_components[aiId].x) {
            order_components[aiId] = Object.assign(order_components[aiId], west);
        }
    });
}

export default updateAIs;
