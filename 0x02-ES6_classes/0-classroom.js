/**
 * Represents a classroom with a maximum student capacity
 */
export default class ClassRoom {
  /**
   * Creates a new ClassRoom instance
   * @param {Number} maxStudentsSize - Maximum number of students in the classroom
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
