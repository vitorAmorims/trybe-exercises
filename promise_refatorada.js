function sucesso(number) {
    return `Que sucesso =) nosso número foi ${number}`
}

function fracassou(number) {
    return `Fracassou =( nosso número foi ${number}`
}

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number > 10 || number <= 5) {
      return reject(number);
    }
    resolve(number);
  })

  promise
  .then(sucesso)
  .then(console.log)
  .catch(fracassou)
  .then(console.log); 

//   Arrow function
//   .then(number => `Que sucesso =) nosso número foi ${number}`)
//   .then(msg => console.log(msg));
