const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");

utility = new Utils()

describe("sendPaymentRequestToApi", () => {
    it("spy on the utils calculateNumber method", () => {
        const stub = sinon.stub(utility, "calculateNumber");
        const spy = sinon.spy(console, "log")
        stub.returns(10)

        sendPaymentRequestToApi(100, 20)

        sinon.assert.calledWith(stub, 'SUM', 100, 20);
        expect(spy.calledOnceWith("The total is: 10")).to.be.true;

        spy.restore();
        stub.restore();
    })
})