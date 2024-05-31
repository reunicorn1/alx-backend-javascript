export default class Airport {
  static checkType(key, value, type) {
    if (type === 'string') {
      if (typeof value !== 'string') {
        throw new TypeError(`${key} must be a ${type}`);
      }
    }
  }

  constructor(name, code) {
    Airport.checkType('Name', name, 'String');
    this._name = name;
    Airport.checkType('Code', code, 'String');
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
