const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");

utility = new Utils()

describe("sendPaymentRequestToApi", () => {
    it("spy on the utils calculateNumber method", () => {
        const spy = sinon.spy(utility, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWith("SUM", 100, 20)).to.be.true
        expect(spy.returned(120)).to.be.true
        spy.restore()
    })
})