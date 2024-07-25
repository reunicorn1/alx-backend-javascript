const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('testing calculateNumber', function () {
    describe('Testing the sum function', function () {
        it("Test rounding numbers", function () {
            expect(calculateNumber('SUM', 2.5, 2.5)).to.be.equal(6);
        })
        it("Test rounding numbers 2.5", function () {
            expect(calculateNumber('SUM', 2.5, 2.5)).to.be.equal(6);
        })
        it("Test rounding numbers 1.1", function () {
            expect(calculateNumber('SUM', 1.1, 2.5)).to.be.equal(4);
        })
        it("Test rounding negative numbers", function () {
            expect(calculateNumber('SUM', -1.4, -2.5)).to.be.equal(-4);
        })
        it("Test rounding w/ zeros", function () {
            expect(calculateNumber('SUM', 0.0, 5.9)).to.be.equal(6);
        })
        it("Test rounding w/ integers", function () {
            expect(calculateNumber('SUM', 1, 4)).to.be.equal(5);
        })
    });

    describe("Testing the subtract method", function() {
        it("Test subtracting negatives", function () {
            expect(calculateNumber('SUBTRACT', 3.4, -2.7)).to.be.equal(6);
        })
        it("Test subtracting from zero", function () {
            expect(calculateNumber('SUBTRACT', 2.5, 0)).to.be.equal(3);
        })
        it("Test subtracting two equal numbers which are negative", function () {
            expect(calculateNumber('SUBTRACT', -2.3, 2.3)).to.be.equal(-4);
        })
        it("Test subtracting normal numbers", function () {
            expect(calculateNumber('SUBTRACT', 2.5, 1.1)).to.be.equal(2);
        })
        it("Test rounding negative numbers", function () {
            expect(calculateNumber('SUBTRACT', -2.5, -1.4)).to.be.equal(-2);
        })
        it("Test rounding w/ zeros", function () {
            expect(calculateNumber('SUBTRACT', 0.0, 5.9)).to.be.equal(-6);
        })
        it("Test rounding w/ integers", function () {
            expect(calculateNumber('SUBTRACT', 4, 1)).to.be.equal(3);
        })
    });

    describe("Testing the divide method", function() {
        it("Test decimals division", function () {
            expect(calculateNumber('DIVIDE', 3.4, 2.7)).to.be.equal(1);
        })
        it("Test getting a value less than 1", function () {
            expect(calculateNumber('DIVIDE', 5.2, 9.5)).to.be.equal(0.5);
        })
        it("Test dividng over zero", function () {
            expect(calculateNumber('DIVIDE', 1.1, 0)).to.be.equal('Error');
        })
        it("Test dividng negative numbers", function () {
            expect(calculateNumber('DIVIDE', -2.5, -1.4)).to.be.equal(3);
        })
        it("Test dividng negative number and a positive number", function () {
            expect(calculateNumber('DIVIDE', -2.5, 1.4)).to.be.equal(-3);
        })
        it("Test testine zero over numbers", function () {
            expect(calculateNumber('DIVIDE', 10, 2.9)).to.be.equal(3.3333333333333335);
        })
        it("Test using non existing type", function () {
            expect(calculateNumber('Blah', 4, 1)).to.be.equal(undefined);
        })
    });
})