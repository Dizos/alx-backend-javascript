const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return status code 200', (done) => {
    request.get(url, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the message "Welcome to the payment system"', (done) => {
    request.get(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return content type text/html', (done) => {
    request.get(url, (error, response) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status code 200 when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the message "Payment methods for cart :id" when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is not a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  const url = 'http://localhost:7865/available_payments';

  it('should return status code 200', (done) => {
    request.get(url, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods object', (done) => {
    request.get(url, (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  const url = 'http://localhost:7865/login';

  it('should return status code 200', (done) => {
    request.post(
      {
        url,
        body: { userName: 'Betty' },
        json: true
      },
      (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('should return the message "Welcome :username"', (done) => {
    request.post(
      {
        url,
        body: { userName: 'Betty' },
        json: true
      },
      (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
