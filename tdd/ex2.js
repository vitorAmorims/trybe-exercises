const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(words) {
    let output = [];
    for (let i = 0; i < words.length; i++) {
        output.push(words[i].length);
    }
    return output;
}
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 6];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected, "msg de erro!");

