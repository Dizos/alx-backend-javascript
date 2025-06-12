const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and log "The total is: 10"', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with the correct arguments
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify console.log was called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
