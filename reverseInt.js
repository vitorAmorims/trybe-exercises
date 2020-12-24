// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let number;
    let result;
    if (Math.sign(n) === 1) {
        number = n.toString().split('').reverse().join('');
        result = Number(number);
        return result;
    } else if (Math.sign(n) === -1) {
        number = Math.abs(n).toString().split('').reverse().join('');
        result = Number(number);
        result = result * -1;
        return result;
    } else if (Math.sign(n) === 0 || Math.sign(n) === -1) {
        result = 0;
        return result;
    }
}
reverseInt(5);
module.exports = reverseInt;