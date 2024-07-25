const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe("getPaymentTokenFromAPI", () => {
    it("Async tests with done", (done) => {
        getPaymentTokenFromAPI(true).then((result) => {
            expect(result)
                .which.is.an("object")
                .have.a.property("data")
                .is.a("string")
                .and.equals('Successful response from the API');
                done()
        })
    })
})