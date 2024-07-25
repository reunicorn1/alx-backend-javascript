const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");


describe("sendPaymentRequestToApi", () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(console, "log");
    });

    afterEach(function() {
        spy.restore();
    });

    it("spy on console.log method with value 100, 20", () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWith('The total is: 120')).to.be.true;
    });

    it("spy on console.log method with value 10, 10", () => {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledOnceWith('The total is: 20')).to.be.true;
    });
})