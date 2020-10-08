const aluno = {nome : "Matheus", 
                idade : "23", 
                email : "matheushcastiglioni@gmail.com"
              };

// console.log(aluno.nome);
// console.log(aluno.idade);
// console.log(aluno.email);

//[{Variáveis}] = [Objeto em JSON];

//exemplo de declaração com destructuring
const {nome, idade, email} = aluno;

//uso 
// console.log(nome);
// console.log(idade);
// console.log(email);

//exemplo 2
const fornecedor = {razaosocial : "Alura - Cursos Online", 
                    cnpj : "00.000.000/0000-00", 
                    email1 : "suporte@alura.com.br"
                    };
const {razaosocial, cnpj, email1} = fornecedor;
console.log(razaosocial);

/*
Cuidados com a Desestruturação de Objetos
A princípio, desestruturar um objeto parece resolver todos os nossos problemas, certo? Mas e se informarmos um campo que não existe?
*/
const {endereco} = fornecedor;
console.log(endereco); //retorno undefined

//exemplo3
const json = {a : "Matheus", 
              b : "23", 
              c : "matheushcastiglioni@gmail.com"
              };
//podemos usar alias para estas variáveis a,b,c sem significado
const {a:nomeEx3, b:idadeEx3, c:emailEx3} = json;
console.log(nomeEx3, idadeEx3, emailEx3); //no console.log, estou chamando o alias criado nomeExx3, idadeEx3, emailEx3

//exemplo4 destructuring em função
function imprimeDadosDoAluno(aluno) {
    console.log(aluno.nome);
    console.log(aluno.idade);
    console.log(aluno.email);
}
imprimeDadosDoAluno(aluno);

//podemos utilizar a nova funcionalidade:
function imprimeDadosDoAluno({razaosocial, cnpj, email1}) {
    console.log(razaosocial);
    console.log(cnpj);
    console.log(email1);
}
imprimeDadosDoAluno(fornecedor)
