/**
 * Represents a Currency.
 */
export default class Currency {
  /**
   * @param {string} key - The key of the variable to be checked
   * @param {any} value - The value of the variable
   * @param {string} type = the type to be checked
   */
  static checkType(key, value) {
    if (typeof value !== 'string') {
      throw new TypeError(`${key} must be a string`);
    }
  }

  /**
   * @param {string} code - The code.
   * @param {string} name - The name.
   */
  constructor(code, name) {
    Currency.checkType('Code', code);
    this._code = code;
    Currency.checkType('Name', name);
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    Currency.checkType('Code', value);
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    Currency.checkType('Name', value);
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
