const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('testing calculateNumber', function () {
    describe('Testing the sum function', function () {
        it("Test rounding numbers", function () {
            assert.equal(calculateNumber('SUM', 2.5, 2.5), 6);
        })
        it("Test rounding numbers 2.5", function () {
            assert.equal(calculateNumber('SUM', 2.5, 2.5), 6);
        })
        it("Test rounding numbers 1.1", function () {
            assert.equal(calculateNumber('SUM', 1.1, 2.5), 4);
        })
        it("Test rounding negative numbers", function () {
            assert.equal(calculateNumber('SUM', -1.4, -2.5), -4);
        })
        it("Test rounding w/ zeros", function () {
            assert.equal(calculateNumber('SUM', 0.0, 5.9), 6);
        })
        it("Test rounding w/ integers", function () {
            assert.equal(calculateNumber('SUM', 1, 4), 5);
        })
    });

    describe("Testing the subtract method", function() {
        it("Test subtracting negatives", function () {
            assert.equal(calculateNumber('SUBTRACT', 3.4, -2.7), 6);
        })
        it("Test subtracting from zero", function () {
            assert.equal(calculateNumber('SUBTRACT', 2.5, 0), 3);
        })
        it("Test subtracting two equal numbers which are negative", function () {
            assert.equal(calculateNumber('SUBTRACT', -2.3, 2.3), -4);
        })
        it("Test subtracting normal numbers", function () {
            assert.equal(calculateNumber('SUBTRACT', 2.5, 1.1), 2);
        })
        it("Test rounding negative numbers", function () {
            assert.equal(calculateNumber('SUBTRACT', -2.5, -1.4), -2);
        })
        it("Test rounding w/ zeros", function () {
            assert.equal(calculateNumber('SUBTRACT', 0.0, 5.9), -6);
        })
        it("Test rounding w/ integers", function () {
            assert.equal(calculateNumber('SUBTRACT', 4, 1), 3);
        })
    });

    describe("Testing the divide method", function() {
        it("Test decimals division", function () {
            assert.equal(calculateNumber('DIVIDE', 3.4, 2.7), 1);
        })
        it("Test getting a value less than 1", function () {
            assert.equal(calculateNumber('DIVIDE', 5.2, 9.5), 0.5);
        })
        it("Test dividng over zero", function () {
            assert.equal(calculateNumber('DIVIDE', 1.1, 0), "Error");
        })
        it("Test dividng negative numbers", function () {
            assert.equal(calculateNumber('DIVIDE', -2.5, -1.4), 3);
        })
        it("Test dividng negative number and a positive number", function () {
            assert.equal(calculateNumber('DIVIDE', -2.5, 1.4), -3);
        })
        it("Test testine zero over numbers", function () {
            assert.equal(calculateNumber('DIVIDE', 10, 2.9), 3.3333333333333335);
        })
        it("Test using non existing type", function () {
            assert.equal(calculateNumber('Blah', 4, 1), undefined);
        })
    });
})