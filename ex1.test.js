const {
    uppercase,
    callback
} = require("./ex1");

console.log(typeof uppercase);

test('test for TEST', (done) => {
    expect(uppercase('test', callback)).toBe('TEST');
    done();
})