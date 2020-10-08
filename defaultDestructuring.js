// const person = {
//     name: "João",
//     lastName: "Jr",
//     age: 34
// }

// const { nationality } = person
// console.log(nationality); //expected undefined

//E se você quisesse dar um valor padrão para nationality, caso essa propriedade não exista no objeto? Você consegue assinalar esse valor padrão via default destructuring:
// const {nationality = 'Brazilian'} = person;
// console.log(nationality);

//exemplo 
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(z) // 0

//exemplo 1

const nationality = ({ firstName = 'Nikola', nationality = 'American', genre = 'Indefinido'}) => `${firstName} is ${nationality} ${genre}`

const person = {
    firstName: "João",
    lastName: "Jr II",
    // nationality: 'Brazillian',
    genre: 'Masculino'
}

const otherPerson = {
    // firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))
