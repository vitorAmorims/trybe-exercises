    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function somarAmaiuscMinusc () {
    const namesString = names.toString();
    let soma = 0;
    for (let i in namesString) {
        if (namesString[i] === 'A' || namesString[i] === 'a') {
            soma += 1;
        }
    }
    return soma;    
}
// console.log(soma);


function containsA() {
 return names.reduce(somarAmaiuscMinusc, 0)
}

assert.deepEqual(containsA(), 20);

