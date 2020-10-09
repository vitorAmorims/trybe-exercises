const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]
//Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
//Dica: use object destructuring.


// escreva filterPeople abaixo

//filtro século XX
const bornIn20Century = year => year >= 1901 && year <= 2000

//filtro para Australian
const isAustralian = nationality => nationality === "Australian"

//filtro no objeto people com object destructuring
const filterPeople = (people) => people.filter(
    ({ bornIn, nationality }) => bornIn20Century(bornIn) && isAustralian(nationality)
);

const filteredPeople = filterPeople(people) 
//atribuindo o resultado da função filterPeople(people) para variavel filteredPeople

for (pessoas of filteredPeople) {
    console.log(pessoas); //para confirmar os itens co array filteredPeople
}

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })