//criação do objeto
let curso = {
    nome: "Curso de desenvolvimento Front-end 2019/09 - BH",
  modulos: {
    internet: {
      descricao: "Como a internet funciona",
      semana: 1,
      tipo: "teórica",
      estado: "completo"
    },
    shell: {
      descricao: "Shell Script",
      semana: 1,
      tipo: ["teórica", "prática"],
      estado: "completo"
    },
    html: {
      descricao: "HTML + CSS",
      semana: [2, 3],
      tipo: "prática",
      estado: "em andamento"
    }
  },
  quantidade_alunos: 10,
  arquivado: false
};

// Mostre o nome do curso
console.log(curso.nome);

//Mostre a descrição do módulo Internet
console.log(curso.modulos.internet);

//Mostre qual e a última semana do módulo HTML
console.log(curso.modulos.html.semana[1]);

//Mostre qual é o tipo do módulo shell

