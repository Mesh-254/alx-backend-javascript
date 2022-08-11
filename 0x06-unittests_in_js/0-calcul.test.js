calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
    it('should return the sum of two numbers', () => {
        assert(calculateNumber(1, 2), 3);
    });
    it('should return the sum of two numbers', function () {
        assert(calculateNumber(1.5, 2.5), 4);
    });
    it('rounding up a\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(2.6, 2.0), 5);
    });
    it ('rounding up b\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(-2.0, -2.6), -5);
    });
})