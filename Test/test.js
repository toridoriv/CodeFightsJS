const expect = require('chai').expect;
const add = require('../Exercises/add/add.js');

describe('add', function () {
    it('should return the sum of two numbers', function () {
        expect(add(2, 4)).to.equal(6);
        expect(add(4, 4)).to.equal(8);
        expect(add(-2, 4)).to.equal(2);
    });
    it('should throw a message indicating the error', function () {
        expect(add("1", "2")).to.equal('One or both of the parameters are not numbers');
        expect(add(1, "2")).to.equal('One or both of the parameters are not numbers');
        expect(add([1], 2)).to.equal('One or both of the parameters are not numbers');
    });
});