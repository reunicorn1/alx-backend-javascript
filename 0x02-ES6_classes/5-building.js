/**
 * Represents a Pricing.
 */
export default class Building {
  /**
   * @param {string} key - The key of the variable to be checked
   * @param {any} value - The value of the variable
   * @param {string} type = the type to be checked
   */
  static checkType(key, value, type) {
    if (type === 'number') {
      if (typeof value !== 'number') {
        throw new TypeError(`${key} must be a ${type}`);
      }
    }
  }

  /**
   * @param {number} amount - The name of the course.
   * @param {Currency} currency - The length of the course.
   */
  constructor(sqft) {
    Building.checkType('Sqft', sqft, 'number');
    this._sqft = sqft;
    if (this.constructor.name !== 'Building') {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    Building.checkType('Sqft', value, 'number');
    this._sqft = value;
  }
}
