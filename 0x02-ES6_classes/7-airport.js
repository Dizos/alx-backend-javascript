/**
 * Represents an Airport
 */
export default class Airport {
  /**
   * Creates a new Airport
   * @param {String} name - Airport name
   * @param {String} code - Airport code
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Gets the airport name
   * @return {String} The airport name
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the airport name
   * @param {String} name - The airport name to set
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Gets the airport code
   * @return {String} The airport code
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the airport code
   * @param {String} code - The airport code to set
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Custom string representation of the Airport
   * @return {String} String representation with airport code
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
