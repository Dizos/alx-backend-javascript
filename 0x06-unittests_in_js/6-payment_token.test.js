const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with {data: "Successful response from the API"} when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err)); // Pass any error to done to fail the test
  });

  it('should return undefined when success is false', () => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});
