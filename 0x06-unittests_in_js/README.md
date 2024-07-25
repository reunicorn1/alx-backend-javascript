# 0x06. Unittests in JS

Unit testing is a method of software testing where individual units of source code are tested to determine if they are fit for use. In JavaScript, there are several libraries available for unit testing, such as Jest, Mocha, and Jasmine.

## Mocha
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
Here's a basic structure of a Mocha test:

```jsx
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```
In this example, describe is used to group related tests, and it is used to write individual test cases. The string arguments to describe and it are used to generate the report, so they should be descriptive. The assert function is used to check if the test passed or failed.

## Chai
Chai is a popular assertion library used in conjunction with a testing framework like Mocha in JavaScript. It provides functions and methods that help you compare the output of a certain test with its expected value.
Chai supports both Behavior Driven Development (BDD) and Test Driven Development (TDD) styles of writing tests. It offers three different styles of assertions: should, expect, and assert.
Here's an example of how you might use Chai with Mocha:

```jsx
var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});
```
In this example, expect is a function imported from Chai. It's used to make an assertion about the value of [1, 2, 3].indexOf(4). The to.equal(-1) part is the expected result of the test.

## Tasks/Files


|    Tasks       |     Files                     |
|----------------|-------------------------------|
|0. Basic test with Mocha and Node assertion library|``package.json``, ``0-calcul.js``, ``0-calcul.test.js``|
|1. Combining descriptions|``1-calcul.js``, ``1-calcul.test.js``|
|2. Basic test using Chai assertion library|`2-calcul_chai.js``, ``2-calcul_chai.test.js`|
|3. Spies|`utils.js``, ``3-payment.js``, ``3-payment.test.js`|
|4. Stubs|``4-payment.js``, ``4-payment.test.js``|
|5. Hooks|``5-payment.js``, ``5-payment.test.js``|
|6. Async tests with done|``6-payment_token.js``, ``6-payment_token.test.js``|
|7. Skip|``7-skip.test.js``|
|8. Basic Integration testing|``8-api/package.json``, ``8-api/api.js``, ``8-api/api.test.js``|
|9. Regex integration testing|``9-api/api.js``, ``9-api/api.test.js``, ``9-api/package.json``|
|10. Deep equality & Post integration testing| ``10-api/api.js``, ``10-api/api.test.js``, ``10-api/package.json``|



