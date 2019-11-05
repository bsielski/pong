import Template from './common/titleLevel';
import copy from '../level-loading/copyObject';

const level = copy(Template);

level.levelTitleText.variable.value = "You Won";
level.levelSubtitleText.variable.value = "Game Over";
level.pressEnterText.variable.value = "";

export default level;
