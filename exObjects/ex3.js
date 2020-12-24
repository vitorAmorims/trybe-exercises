/*
Faça um for/in que mostre todas as chaves do objeto.
ou 
mostre todas as chaves do objeto.
Imprimir o valor esperado em console.
*/

// aqui o objeto info está criado.
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

  //for in para mostrar todas as chaves do objeto.
for (let chaves in info){
    console.log(chaves);
}

//for in para mostrar todas keys do objeto.
for (let keys in info){
    console.log(info[keys]);
}
