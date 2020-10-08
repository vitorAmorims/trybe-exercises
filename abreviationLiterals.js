//A abreviação de propriedades trata da remoção de duplicações.

const name = "Luke";  
const age = 24;  

//objeto com key e value 

const name1 = {name, age}

console.log(name1) //impressionante!! nada de repetir código

//propriedades do método

const name2 = {
    getName() { return "luke" },
    getAge() { return 24 }
}
console.log(name2.getName())
console.log(name2.getAge())

//Computando nomes de propriedades
var getLo = () => 'lo'

var obj = {}

obj[ "hel" + getLo() ] = "world";

console.log(obj);


