import Template from './common/levelIntro';
import copy from '../level-loading/copyObject';

const level = copy(Template);

level.levelTitleText.variable.value = "Level 3: Unfair fight";
level.levelManualText.variable.value = "Let's check if you can win against two opponents.\n\n\
Whoever scores 7 points first wins.\n\n\
\n\nGood luck.";

export default level;
