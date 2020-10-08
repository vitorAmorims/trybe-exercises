    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

/*
Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.
*/

//criar um novo array de objetos no formato { name: nome do aluno, average: media das notas }


//Ref instrutor Isaac Asimov

function studentAverage() {
  //construir array de objetos.
  const studentsWithAverages = notas.map((notasDoAluno, index) => { //primeira construção  //inserido index, para obter as posições de cada nota e relacionar array Estudantes com respectiva nota

    // console.log(notasDoAluno); primeiro teste do exercício
    // console.log("\n");

    //Nota: importante atribuir a construção para uma variável
    const somarNotas = notasDoAluno.reduce((acumulador, notas) => { //segunda construção
        return acumulador + notas;
    });

    //calcular a media de cada aluno ok 
    const quantidadeDeNotas = notasDoAluno.length; //terceira construção
    const media = somarNotas / quantidadeDeNotas; //terceira construção

    return { 
        name: `${alunos[index]}`, average: media
    }

    console.log(`Notas de cada aluno: ${notasDoAluno}`); // primeiro retorno
    console.log(`Somatório de notas: ${somarNotas}`); //segundo retorno 
    console.log(`Média: ${media}`); //terceiro retorno
    console.log(`indice: ${index}`); //quarto retorno
    console.log(`Estudante: ${alunos[index]}`); // quinto retorno
    console.log("\n")
  });
 return studentsWithAverages; //output das informações necessárias
}
console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);