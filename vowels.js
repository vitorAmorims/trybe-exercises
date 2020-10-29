// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const arrayVowels = ["a", "e", "i", "o", "u"];
  let sum = 0;
  for (let index = 0; index < str.length; index++) {
    for (let i = 0; i < arrayVowels.length; i++) {
      if (str[index].toLowerCase() === arrayVowels[i]) {
        sum += 1;
      }
    }
  }
  return sum;
}
console.log(vowels("abcdefghijklmnopqrstuvwxyz"));
module.exports = vowels;
