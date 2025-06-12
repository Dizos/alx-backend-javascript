const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and be called once when called with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and be called once when called with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
