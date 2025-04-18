/**
 * Represents an ALX class
 */
export default class ALXClass {
  /**
   * Creates a new ALXClass
   * @param {Number} size - The size of the class
   * @param {String} location - The location of the class
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Gets the size of the class
   * @return {Number} The size
   */
  get size() {
    return this._size;
  }

  /**
   * Sets the size of the class
   * @param {Number} size - The size to set
   */
  set size(size) {
    this._size = size;
  }

  /**
   * Gets the location of the class
   * @return {String} The location
   */
  get location() {
    return this._location;
  }

  /**
   * Sets the location of the class
   * @param {String} location - The location to set
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Custom valueOf method to return size when cast to Number
   * @return {Number} The size
   */
  valueOf() {
    return this._size;
  }

  /**
   * Custom toString method to return location when cast to String
   * @return {String} The location
   */
  toString() {
    return this._location;
  }
}
