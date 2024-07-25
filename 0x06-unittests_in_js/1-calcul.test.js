const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('testing calculateNumber', function () {
    describe('Testing the sum function', function () {
        it("Test rounding numbers", function () {
            assert.equal(calculateNumber(2.5, 2.5, 'SUM'), 6)
        })
        it("Test rounding numbers 2.5", function () {
            assert.equal(calculateNumber(2.5, 2.5, 'SUM'), 6)
        })
        it("Test rounding numbers 1.1", function () {
            assert.equal(calculateNumber(1.1, 2.5, 'SUM'), 4)
        })
        it("Test rounding negative numbers", function () {
            assert.equal(calculateNumber(-1.4, -2.5, 'SUM'), -4)
        })
        it("Test rounding w/ zeros", function () {
            assert.equal(calculateNumber(0.0, 5.9, 'SUM'), 6)
        })
        it("Test rounding w/ integers", function () {
            assert.equal(calculateNumber(1, 4, 'SUM'), 5)
        })
    });
    describe("Testing the subtract method", function() {
        it("Test subtracting negatives", function () {
            assert.equal(calculateNumber(3.4, -2.7, 'SUBTRACT'), 6)
        })
        it("Test rounding numbers 2.5", function () {
            assert.equal(calculateNumber(2.5, 2.5, 'SUBTRACT'), 0)
        })
        it("Test rounding numbers 1.1", function () {
            assert.equal(calculateNumber(1.1, 2.5, 'SUBTRACT'), -2)
        })
        it("Test rounding negative numbers", function () {
            assert.equal(calculateNumber(-2.5, -1.4, 'SUBTRACT'), -2)
        })
        it("Test rounding w/ zeros", function () {
            assert.equal(calculateNumber(0.0, 5.9, 'SUBTRACT'), -6)
        })
        it("Test rounding w/ integers", function () {
            assert.equal(calculateNumber(4, 1, 'SUBTRACT'), 3)
        })
    })
    describe("Testing the divide method", function() {
        it("Test decimals division", function () {
            assert.equal(calculateNumber(3.4, 2.7, 'DIVIDE'), 1)
        })
        it("Test getting a value less than 1", function () {
            assert.equal(calculateNumber(5.2, 9.5, 'DIVIDE'), 0.5)
        })
        it("Test dividng over zero", function () {
            assert.equal(calculateNumber(1.1, 0, 'DIVIDE'), "Error")
        })
        it("Test dividng negative numbers", function () {
            assert.equal(calculateNumber(-2.5, -1.4, 'DIVIDE'), 3)
        })
        it("Test dividng negative number and a positive number", function () {
            assert.equal(calculateNumber(-2.5, 1.4, 'DIVIDE'), -3)
        })
        it("Test testine zero over numbers", function () {
            assert.equal(calculateNumber(0.0, 5.9, 'DIVIDE'), 0);
        })
        it("Test using non existing type", function () {
            assert.equal(calculateNumber(4, 1, 'Blah'), undefined);
        })
    })
})