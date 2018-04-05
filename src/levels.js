import getLevel00titleScreen from './levels/level00titleScreen';
import getLevel01intro from './levels/level01intro';
import getLevel01 from './levels/level01';
import getLevel01lose from './levels/level01lose';
import getLevel02intro from './levels/level02intro';
import getLevel02 from './levels/level02';
import getLevel02lose from './levels/level02lose';
import getLevel9999congratulationsScreen from './levels/level9999congratulationsScreen';

class Levels {

  constructor()
  {
    this.levels = {
      "title_screen": getLevel00titleScreen,

      "level_01_intro": getLevel01intro,
      "level_01": getLevel01,
      "level_01_lose": getLevel01lose,

      "level_02_intro": getLevel02intro,
      "level_02": getLevel02,
      "level_02_lose": getLevel02lose,

      "game_over": getLevel9999congratulationsScreen,
    };

    this.levelMap = {
      "title_screen": {
        "name": "title",
        "win": "level_01_intro",
       },

      "level_01_intro": {
        "name": "01 intro",
        "win": "level_01",
      },

      "level_01": {
        "name": "01",
        "win":  "level_02_intro",
        "lose": "level_01_lose",
      },

      "level_01_lose": {
        "name": "01 lose",
        "win": "level_01_intro",
      },

      "level_02_intro": {
        "name": "02 intro",
        "win": "level_02",
      },

      "level_02": {
        "name": "02",
        "win":  "game_over",
        "lose": "level_02_lose",
      },

      "level_02_lose": {
        "name": "02 lose",
        "win": "level_02_intro",
      },


    };
    this.currentLevel = this.levels["title_screen"]();
    this.currentLevelName = "title_screen";
    this.current = this.current.bind(this);
    this.win = this.win.bind(this);
    this.lose = this.lose.bind(this);

  }

  current() {
    return this.currentLevel;
  }

  win() {
    console.log("AAAAAAAAAAAA", this.levelMap[this.currentLevelName]);
    this.currentLevelName = this.levelMap[this.currentLevelName].win;
    console.log("BBBBB", this.levelMap[this.currentLevelName]);
    this.currentLevel = this.levels[this.currentLevelName]();
    return this;
  }

  lose() {
    this.currentLevelName = this.levelMap[this.currentLevelName].lose;
    this.currentLevel = this.levels[this.currentLevelName]();
    return this;
  }

}

export default Levels;
