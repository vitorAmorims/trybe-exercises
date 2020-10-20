function sucesso(number) {
    return `Que sucesso =) nosso número foi ${number}`
}

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number > 10 || number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(number);
  })
  .then(sucesso) // function declaration 
  .then(console.log); //como o resultado da function sucesso, já está ali, não há necessidade de inserir parâmetro no console.log

//   Arrow function
//   .then(number => `Que sucesso =) nosso número foi ${number}`)
//   .then(msg => console.log(msg));
