const { test } = require('@jest/globals');
const fixar = require('./fixar');

test('isDivisible', () => {
    fixar.randomNumber = jest.fn().mockReturnValue(4);
    fixar.isDivisible = jest.fn().mockReturnValue(true)
    fixar.randomNumber();
    fixar.isDivisible();
    expect(fixar.randomNumber).toHaveBeenCalled();
    expect(fixar.isDivisible).toHaveBeenCalled();
    expect(fixar.isDivisible(2)).toBe(true);
    expect(fixar.randomNumber()).toBe(4);
});