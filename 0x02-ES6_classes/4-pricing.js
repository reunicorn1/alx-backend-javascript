import Currency from './3-currency';

/**
 * Represents a Pricing.
 */
export default class Pricing {
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
    if (type === 'currency') {
      if (!(value instanceof Currency)) {
        throw new TypeError(`${key} must be a ${type}`);
      }
    }
  }

  /**
   * @param {number} amount - The name of the course.
   * @param {Currency} currency - The length of the course.
   */
  constructor(amount, currency) {
    Pricing.checkType('Amount', amount, 'number');
    this._amount = amount;
    Pricing.checkType('Currency', currency, 'currency');
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    Pricing.checkType('Amount', value, 'number');
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    Pricing.checkType('Currency', value, 'currency');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    Pricing.checkType('Amount', amount, 'number');
    Pricing.checkType('ConversionRate', conversionRate, 'number');
    return amount * conversionRate;
  }
}
