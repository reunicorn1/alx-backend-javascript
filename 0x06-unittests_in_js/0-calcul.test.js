const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Test calculateNumber", function() {
    it("Test rounding numbers", function () {
        assert.equal(calculateNumber(2.5, 2.5), 6)
    })
    it("Test rounding numbers 2.5", function () {
        assert.equal(calculateNumber(2.5, 2.5), 6)
    })
    it("Test rounding numbers 1.1", function () {
        assert.equal(calculateNumber(1.1, 2.5), 4)
    })
    it("Test rounding negative numbers", function () {
        assert.equal(calculateNumber(-1.4, -2.5), -4)
    })
    it("Test rounding w/ zeros", function () {
        assert.equal(calculateNumber(0.0, 5.9), 6)
    })
    it("Test rounding w/ integers", function () {
        assert.equal(calculateNumber(1, 4), 5)
    })
})