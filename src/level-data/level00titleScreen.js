import Template from './common/titleLevel';
import copy from '../level-loading/copyObject';

const level = copy(Template);

level.levelTitleText.variable.value = "A Pong";
level.levelSubtitleText.variable.value = "The Game";
level.pressEnterText.variable.value = "Press Enter to continue.";

export default level;
