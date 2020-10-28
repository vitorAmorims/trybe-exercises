const { inheritInnerComments } = require("@babel/types");
const { test } = require("@jest/globals");
const arr = [1,2,3];
const obj = {a: 1, b: 2, c: 3};
const teste = {};
Object.assign(teste, obj);
test('array e object iguais', () => {
    const arr = [1,2,3];
    const obj = {a: 1, b: 2, c: 3};
    expect(arr).toEqual([1,2,3]);
    expect(obj).toEqual(teste);
});
