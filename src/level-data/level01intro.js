import Template from './common/levelIntro';
import copy from '../level-loading/copyObject';

const level = copy(Template);

level.levelTitleText.variable.value = "Level 1: Regular Pong";
level.levelManualText.variable.value = "You are on the bottom of the screen,\n\
on the opposite side of the screen is your enemy (the AI).\n\n\
Whoever scores 5 points first wins.\n\nKeys:\nLeft arrow - go left\nRight arrow - go right\
\n\nGood luck.";

export default level;
