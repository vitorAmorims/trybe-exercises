//Use a atribuição de desestruturação com o parâmetro rest para realizar um efeito de Array.prototype.slice()modo que arr seja uma submatriz da matriz original source com os primeiros dois elementos omitidos.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a,b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);