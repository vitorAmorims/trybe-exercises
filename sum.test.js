const sum = require('./sum.js');
// console.log(typeof sum)
test('Verificando resultado da soma', () => {
    expect(sum(1, 2)).toBe(3);
})
