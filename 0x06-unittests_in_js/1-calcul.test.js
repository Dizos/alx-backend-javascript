const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return 6 when inputs are SUM, 1.4, 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are SUM, 0.1, -0.1', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, -0.1), 0);
    });

    it('should return 3 when inputs are SUM, 1.49, 1.51', () => {
      assert.strictEqual(calculateNumber('SUM', 1.49, 1.51), 3);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return -4 when inputs are SUBTRACT, 1.4, 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 1 when inputs are SUBTRACT, 0.6, -0.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.6, -0.4), 1);
    });

    it('should return 0 when inputs are SUBTRACT, 1.5, 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('type DIVIDE', () => {
    it('should return 0.2 when inputs are DIVIDE, 1.4, 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when inputs are DIVIDE, 1.4, 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 2 when inputs are DIVIDE, 3.6, 1.7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.6, 1.7), 2);
    });

    it('should return -1 when inputs are DIVIDE, -0.6, 0.6', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -0.6, 0.6), -1);
    });
  });
});
