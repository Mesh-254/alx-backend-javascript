const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 3 if 0 and 3 are passed', () => {
        assert.equal(calculateNumber('SUM', 0, 3), 3);
    });
    it('should return -3 if 0 and 3 are passed', () => {
        assert.equal(calculateNumber('SUBTRACT', 0, 3), -3);
    })
    it('should return 0 if 0 and 0 are passed', () => {
        assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it('should return 0 if 0 and 0 are passed', () => {
        assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it('should return 0.5 if 1 and 2 are passed', () => {
        assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    });
    it ('should return 0.5 if 1 and 2 are passed', () => {
        assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
    });
});
