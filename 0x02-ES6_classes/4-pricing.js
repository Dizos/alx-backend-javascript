import Currency from './3-currency.js';

/**
 * Represents a price with an amount and currency
 */
export default class Pricing {
  /**
   * Creates a new Pricing
   * @param {Number} amount - The amount
   * @param {Currency} currency - The currency object
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Gets the amount
   * @return {Number} The amount
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount
   * @param {Number} amount - The amount to set
   */
  set amount(amount) {
    this._amount = amount;
  }

  /**
   * Gets the currency
   * @return {Currency} The currency object
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency
   * @param {Currency} currency - The currency to set
   */
  set currency(currency) {
    this._currency = currency;
  }

  /**
   * Returns the full price representation
   * @return {String} Full price in format: 'amount currency_name (currency_code)'
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts a price amount based on a conversion rate
   * @param {Number} amount - The amount to convert
   * @param {Number} conversionRate - The conversion rate
   * @return {Number} The converted amount
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
