const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  /*Crie uma função para adicionar o turno da manhã na lesson2. 
  Essa função deve possuir três parâmetros, sendo eles: 
  o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  */
 
 function adicionarTurnoManha (lesson2, chave, valor) {
     let newKey = chave;
     lesson2[newKey] = valor;
 }
adicionarTurnoManha(lesson2, "turno", "manhã");
console.log(lesson2);

/*
Crie uma função para listar as keys de um objeto. 
Essa função deve receber um objeto como parâmetro.
*/

function listarKeys (objeto) {
    let keys = Object.keys(objeto)
    console.log(keys)
}
listarKeys(lesson2)

/*
Crie uma função para mostrar o tamanho de um objeto.
*/
function tamanhoObjeto (objeto) {
    let lengthObjeto = Object.entries(objeto).length;
    console.log(lengthObjeto);
}
tamanhoObjeto(lesson2);

/*
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
*/
const valoresDoObjeto = (objeto) => {
    let valoresObj = Object.values(objeto);
    console.log(valoresObj);
}
valoresDoObjeto(lesson2);

/*
crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
Cada chave desse novo objeto será uma aula, 
sendo essas chaves: lesson1, lesson2 e lesson3. 
Ao executar o comando console.log(allLessons), a saída deverá ser todas lessons*/
let allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

/*Usando o objeto criado no exercício 5, 
crie uma função que retorne o número total de estudantes em todas as aulas.
*/
function totalEstudantes (objeto) {
    let total = 0;
    let array = Object.keys(objeto)
    for (i in array) {
        total += objeto[array[i]].numeroEstudantes;
    }
    return total;
}
console.log(totalEstudantes(allLessons));

const totalEstudantes1 = (objeto) => {
    let total = 0;
    let array = Object.keys(objeto)
    for (i in array) {
        total += objeto[array[i]].numeroEstudantes;
    }
    return total;
}
console.log(totalEstudantes1(allLessons));

/*
Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
*/
function valorChavePosicao (objeto) {
    let array = Object.values(objeto)
    for (i in array) {
        console.log(array[i]);
    }
}
valorChavePosicao(lesson2)

const valorChavePosicao1 = (objeto) => {
    let array = Object.values(objeto)
    for (i in array) {
        console.log(array[i]);
    }
}
valorChavePosicao1(lesson1)

/*
Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: 
o objeto, o nome da chave e o valor da chave.
    console.log(verifyPair(lesson3, 'turno', 'noite'));
    // Output: true,
    console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
    // Output: false
*/
function verificarPair(objeto, chave, valor) {
    if (objeto[chave] === valor) {
        console.log(true);
    } else {
        console.log(false);
    }
}
verificarPair(lesson1, "materia", "História");

const verificarPair1 = (objeto, chave, valor) => {
    if (objeto[chave] === valor) {
        console.log(true);
    } else {
        console.log(false);
    }
}
verificarPair1(lesson1, "materia", "Matemática");

/*Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. 
Use o objeto criado no exercício 5.*/
function somarAlunasAulaMatematica (objeto) {
    let total = 0;
    let array = Object.keys(allLessons);
    for ( i in array) {
        if (objeto[array[i]].materia === "Matemática") {
            total += objeto[array[i]].numeroEstudantes;
        }
    }
    return total;
}
console.log(somarAlunasAulaMatematica(allLessons, "Matemática"));

const somarAlunasAulaHistoria = (objeto) => {
    let total = 0;
    let array = Object.keys(allLessons);
    for ( i in array) {
        if (objeto[array[i]].materia === "História") {
            total += objeto[array[i]].numeroEstudantes;
        }
    }
    return total;
}
console.log(somarAlunasAulaHistoria(allLessons));

/*
Crie uma função que deverá retornar um objeto que representa o relatório do professor 
ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. 
Use o objeto criado no exercício 5:
*/
function relatorioProfessor (objeto, nome) {
let relatorio = {};
let aulas = [];
let total = 0;
let array = Object.keys(allLessons);
for (i in array) {
    if (objeto[array[i]].professor === nome){
        total += objeto[array[i]].numeroEstudantes;
        aulas.push(objeto[array[i]].materia);
        for (let i = 0; i < aulas.length - 1; i++) {
            for (let j = i + 1; j < aulas.length; j++) {
                if (aulas[i] === aulas[j]) {
                    aulas.pop();
                }
            }
        }
        relatorio.professor = nome;
        relatorio.materia = aulas;
        relatorio.estudantes = total;
    }
}
return console.log(relatorio);
}
relatorioProfessor (allLessons, "Carlos")
// console.log(allLessons);
