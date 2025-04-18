/**
 * Represents an abstract Building
 */
export default class Building {
  /**
   * Creates a new Building
   * @param {Number} sqft - The square footage of the building
   */
  constructor(sqft) {
    this.sqft = sqft;
    
    // Check if this is a direct instance of Building
    if (this.constructor !== Building) {
      // Check if the child class implements the evacuationWarningMessage method
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  /**
   * Gets the square footage of the building
   * @return {Number} The square footage
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building
   * @param {Number} sqft - The square footage to set
   */
  set sqft(sqft) {
    this._sqft = sqft;
  }
}
