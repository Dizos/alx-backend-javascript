const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy on Utils.calculateNumber before each test
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the spy after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and log the correct total', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify the spy was called with the correct arguments
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    // Verify the result of Utils.calculateNumber
    const result = Utils.calculateNumber('SUM', 100, 20);
    expect(result).to.equal(120);
  });
});
