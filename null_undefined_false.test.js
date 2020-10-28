const { test } = require("@jest/globals");

let number;
let sum = null;
let action = false;

test('null, undefined, false', () => {
    expect(number).toBeUndefined();
    expect(sum).toBeNull();
    expect(action).toBeFalsy();
    
});