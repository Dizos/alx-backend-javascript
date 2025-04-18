/**
 * Represents an ALX course
 */
export default class ALXCourse {
  /**
   * Creates a new ALXCourse
   * @param {String} name - Name of the course
   * @param {Number} length - Length of the course
   * @param {Array} students - Array of student names
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of the course
   * @return {String} The course name
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course
   * @param {String} name - The name to set
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Gets the length of the course
   * @return {Number} The course length
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course
   * @param {Number} length - The length to set
   */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
   * Gets the students enrolled in the course
   * @return {Array} The array of students
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the students enrolled in the course
   * @param {Array} students - The array of students to set
   */
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    
    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    
    this._students = students;
  }
}
