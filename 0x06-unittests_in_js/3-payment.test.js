const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");

utility = new Utils()

describe("sendPaymentRequestToApi", () => {
    const spy = sinon.spy(utility, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    it("spy on the utils calculateNumber method", () => {
        expect(spy.calledOnceWith("SUM", 100, 20)).to.be.true
    })
    it("spy on the utils calculateNumber method checking the value", () => {
        expect(spy.returned(120)).to.be.true        
    })
    spy.restore()
})