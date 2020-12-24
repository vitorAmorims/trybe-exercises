const assert = require('assert');

// function soma (a, b) {
//     return a+b;
// }
// const expected = soma(2,3);
// assert.notEqual(expected, 5, "valores iguais");

// function division (x, y) {
//     return x / y;
// }
// const expected = division(9,3);

//metodo assert.equal()
// assert.equal(expected, 3, "Mensagem customizada de erro equal()");
/* valor da variavel expected  3, o segundo param = 3 - assim não retornou erro. */

//metodo assert.notEqual()
// assert.notEqual(expected, 3, "Mensagem customizada de erro notEqual()");
/* valor da variavel expected  3, o segundo param = 3 - assim retornou erro. */

//método assert.ok()
// assert.ok(expected === 3, "Mensagem custoizada de erro para ok()");
/* se, valores expected for igual ao valor da comparação não aparece msg de erro*/

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [1, 2, 3, 4, 6];

// assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');
/*se, os valores dos arrays forem iguais, não aparece mensagem*/

// const person1 = { name: 'john', age: 21 };
// const person2 = { name: 'john', age: 21 };

// assert.deepEqual(person1, person2, "these two objects are the same");
// /*se, os valores dos arrays forem iguais, não aparece mensagem*/

// const person3 = { name: 'john', age: 19 };

// assert.notDeepEqual(person1, person3, "these two objects are different");
/* se, os valores dos objetos fossem iguais, a mensagem seria exibida*/
let fullname;
function nomeCompleto(nome,sobrenome) {
    fullname = `${nome} ${sobrenome}`
    return fullname;
}
const expected = nomeCompleto("Vitor","Amorin");
assert.equal(fullname,'Vitor Amorim', "Não são iguais!");