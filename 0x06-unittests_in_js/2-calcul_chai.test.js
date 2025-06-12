const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return 6 when inputs are SUM, 1.4, 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are SUM, 0.1, -0.1', () => {
      expect(calculateNumber('SUM', 0.1, -0.1)).to.equal(0);
    });

    it('should return 3 when inputs are SUM, 1.49, 1.51', () => {
      expect(calculateNumber('SUM', 1.49, 1.51)).to.equal(3);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return -4 when inputs are SUBTRACT, 1.4, 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 1 when inputs are SUBTRACT, 0.6, -0.4', () => {
      expect(calculateNumber('SUBTRACT', 0.6, -0.4)).to.equal(1);
    });

    it('should return 0 when inputs are SUBTRACT, 1.5, 1.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });
  });

  describe('type DIVIDE', () => {
    it('should return 0.2 when inputs are DIVIDE, 1.4, 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are DIVIDE, 1.4, 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 2 when inputs are DIVIDE, 3.6, 1.7', () => {
      expect(calculateNumber('DIVIDE', 3.6, 1.7)).to.equal(2);
    });

    it('should return -1 when inputs are DIVIDE, -0.6, 0.6', () => {
      expect(calculateNumber('DIVIDE', -0.6, 0.6)).to.equal(-1);
    });
  });
});
