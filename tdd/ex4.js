const assert = require('assert');
// escreva a função findTheNeedle aqui
function findTheNeedle (array, param) {
    let output;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === param) {
           output = i;
        } 
    }
    if (output === undefined) {
        output = -1;
    }
    return output;
}
let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
assert.throws(findTheNeedle, 'function');
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);