/**
 * Represents a currency
 */
export default class Currency {
  /**
   * Creates a new Currency
   * @param {String} code - Currency code
   * @param {String} name - Currency name
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the currency code
   * @return {String} The currency code
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code
   * @param {String} code - The currency code to set
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Gets the currency name
   * @return {String} The currency name
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name
   * @param {String} name - The currency name to set
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Returns the full currency representation
   * @return {String} Full currency representation in format: 'name (code)'
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
