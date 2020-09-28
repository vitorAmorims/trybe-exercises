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