import getEmptyComponents from './getEmptyComponents';
import SKULL from './images/skull.png';
import LOLPIXELS from './images/lolpixels.png';
import {v4} from 'uuid';

class LevelGenerator {

  constructor() {
    this.uuid = v4;
    this.lastUuid = null;
    this.components = getEmptyComponents();
    this.newEntity = this.newEntity.bind(this);
    this.add = this.add.bind(this);
    this.getUuid = this.getUuid.bind(this);
    this.getComponents = this.getComponents.bind(this);
  }

  getComponents() {
    return JSON.parse(JSON.stringify(this.components));
  }

  getUuid() {
    return this.lastUuid;
  }

  newEntity() {
    this.lastUuid = this.uuid();
    return this;
  }

  add(kind, component) {
    this.components[kind][this.lastUuid] = component;
    return this;
  }

}

export default LevelGenerator;
