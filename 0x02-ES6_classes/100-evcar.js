import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const Constructor = this.constructor[Symbol.species];
    return new Constructor();
  }
}
