/**
 * Represents a HolbertonCourse.
 */
export default class HolbertonCourse {
  /**
   * @param {string} key - The key of the variable to be checked
   * @param {any} value - The value of the variable
   * @param {string} type = the type to be checked
   */
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
    if (Array.isArray(value)) {
      if (!value.every((v) => typeof (v) === 'string')) {
        throw new TypeError(`${key} must be a ${type}`);
      }
    }
  }

  /**
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course.
   * @param (string[]) students = the students names
   */
  constructor(name, length, students) {
    HolbertonCourse.checkType('Name', name, 'string');
    this._name = name;
    HolbertonCourse.checkType('Length', length, 'number');
    this._length = length;
    HolbertonCourse.checkType('Students', students, 'object');
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    HolbertonCourse.checkType('Name', value, 'string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    HolbertonCourse.checkType('Length', value, 'number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    HolbertonCourse.checkType('Students', value, 'object');
    this._students = value;
  }
}
