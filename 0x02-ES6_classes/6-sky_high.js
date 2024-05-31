import Building from './5-building';

export default class SkyHighBuilding extends Building {
  static checkType(key, value, type) {
    if (type === 'string') {
      if (typeof value !== 'string') {
        throw new TypeError(`${key} must be a ${type}`);
      }
    }
  }

  constructor(sqft, floors) {
    super(sqft);
    SkyHighBuilding.checkType('Floors', floors, 'numbbr');
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    SkyHighBuilding.checkType('Floors', value, 'numbbr');
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
