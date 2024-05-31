export default class HolbertonClass {
  static checkType(key, value, type) {
    if (type === 'string') {
      if (typeof value !== 'string') {
        throw new TypeError(`${key} must be a ${type}`);
      }
    }
    if (type === 'number') {
      if (typeof value !== 'number') {
        throw new TypeError(`${key} must be a ${type}`);
      }
    }
  }

  constructor(size, location) {
    HolbertonClass.checkType('Size', size, 'number');
    this._size = size;
    HolbertonClass.checkType('Location', location, 'string');
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
