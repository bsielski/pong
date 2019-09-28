import {Sprite, Application, Texture, Graphics, Point, TextStyle, Text} from 'pixi.js';

import lolpixels from '../levels/images/lolpixels.png';
import btcball from '../levels/images/btcball.png';

const IMAGES = {
    LOLPIXELS: lolpixels,
    BTC_BALL: btcball
};

function addSpriteToStage(sprite_components, position_components, shape_components, app, sprites, id) {
    let sprite;
    if (sprite_components[id].image) {
        sprite = new Sprite(Texture.fromImage(
            // sprite_components[id].image
            IMAGES[sprite_components[id].image]
            //LOLPIXELS
        ));
        sprite.width = sprite_components[id].width;
        sprite.height = sprite_components[id].height;
    }
    else {
        const graphics = new Graphics();
        graphics.x = position_components[id].x;
        graphics.y = position_components[id].y;
        graphics.pivot = new Point(graphics.x, graphics.y);

        const Ax = sprite_components[id].verts[0][0] + position_components[id].x;
        const Ay = sprite_components[id].verts[0][1] + position_components[id].y;
        const Bx = sprite_components[id].verts[1][0] + position_components[id].x;
        const By = sprite_components[id].verts[1][1] + position_components[id].y;
        const Cx = sprite_components[id].verts[2][0] + position_components[id].x;
        const Cy = sprite_components[id].verts[2][1] + position_components[id].y;
        graphics.beginFill(0xffffff);
        graphics.lineStyle(0, 0xffffff, 1);
        graphics.moveTo(Cx, Cy);
        graphics.lineTo(Ax, Ay);
        graphics.lineTo(Bx, By);
        graphics.lineTo(Cx, Cy);
        graphics.endFill();
        const texture = app.renderer.generateTexture(graphics);
        sprite = new Sprite(texture);
    }
    sprite.tint = sprite_components[id].color;

    sprite.x = position_components[id].x;
    sprite.y = position_components[id].y;
    sprite.alpha = sprite_components[id].opacity;
    sprite.rotation = position_components[id].angle + sprite_components[id].angle;
    if (shape_components[id]) { sprite.rotation += shape_components[id].angle }
    sprite.anchor = new Point(0.5, 0.5);
    sprite.id = id;
    sprites[id] = sprite;
    app.stage.addChild(sprite);
}

function addTextToStage(text_components, position_components, variable_components, app, texts, id) {
    const defaultStyle = new TextStyle({
        fontFamily: "Arial",
        fontSize: 36,
        fill: "white",
        stroke: '#000000',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 3,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 5,
    });
    const style = Object.assign
    (
        {},
        defaultStyle,
        {
            fontSize: text_components[id].size,
            fill: text_components[id].color,
        }
    )
    const text = new Text(variable_components[text_components[id].variable].value, style);
    text.x = position_components[id].x;
    text.y = position_components[id].y;
    text.alpha = text_components[id].opacity;
    text.anchor = new Point(0.5, 0.5);
    text.id = id;
    texts[id] = text;
    app.stage.addChild(text);
}

function removeDeletedChildren(sprite_components, text_components, app, sprites, texts) {
    app.stage.children.forEach(function(child) {
        if (child.text) {
            if (text_components[child.id]) {
            }
            else {
                app.stage.removeChild(child);
                delete texts[child.id]
            }
        }
        else {
            if (sprite_components[child.id]) {
            }
            else {
                app.stage.removeChild(child);
                delete sprites[child.id]
            }
        }
    });
}

function updateRenderer(gameState, rendererOptions) {
    const sprites = {};
    const texts = {};
    const app = new Application(rendererOptions);
    document.getElementById("game_container").appendChild(app.view);

    return function() {
        const sprite_components = gameState.currentLevel.sprites;
        const text_components = gameState.currentLevel.texts;
        const position_components = gameState.currentLevel.positions;
        const variable_components = gameState.currentLevel.variables;
        const shape_components = gameState.currentLevel.shapes;
        removeDeletedChildren(sprite_components, text_components, app, sprites, texts);
        Object.keys(text_components).forEach(id => {
            if (texts[id]) {
                texts[id].text = variable_components[text_components[id].variable].value;
            }
            else {
                addTextToStage(text_components, position_components, variable_components, app, texts, id)
            }
        });

        Object.keys(sprite_components).forEach(id => {
            if (sprites[id]) {
                sprites[id].x = position_components[id].x;
                sprites[id].y = position_components[id].y;
                sprites[id].rotation = position_components[id].angle + sprite_components[id].angle;
                if (shape_components[id]) { sprites[id].rotation += shape_components[id].angle }
            }
            else {
                addSpriteToStage(sprite_components, position_components, shape_components, app, sprites, id)
            }
        });
        app.render();
    }
}

export default updateRenderer;
