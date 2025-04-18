import Building from './5-building.js';

/**
 * Represents a SkyHighBuilding that extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding
   * @param {Number} sqft - The square footage of the building
   * @param {Number} floors - The number of floors in the building
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Gets the number of floors
   * @return {Number} The number of floors
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors
   * @param {Number} floors - The number of floors to set
   */
  set floors(floors) {
    this._floors = floors;
  }

  /**
   * Provides an evacuation warning message
   * @return {String} The evacuation warning message
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
