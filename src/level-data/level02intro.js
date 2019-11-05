import Template from './common/levelIntro';
import copy from '../level-loading/copyObject';

const level = copy(Template);

level.levelTitleText.variable.value = "Level 2: Bitcoin trader";
level.levelManualText.variable.value = "You want to make money by trade Bitcoins.\n\
But it is not easy.\n\n\
If the ball hits red object the price is -1000.\n\
Green objects rise price by 1000.\n\n\
You will win if the price hits $12k and loose if it hits $0.\n\n\
Good luck.";

export default level;
