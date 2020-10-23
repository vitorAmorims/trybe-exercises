const ex2 = new Promise((resolve, reject) => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 50 + 1))
    }
    console.log("Números aleatórios "+numbers)
    const newNumbers = numbers.map(number => number * 3);
    console.log("Números multiplicados por 3 "+ newNumbers)
    const total = newNumbers.reduce((acc,element) => acc + element);
    console.log("Total dos Elementos: "+ total)
    if (total < 800) {
        resolve("Sucesso na operação!");
    } else {
        reject("O total dos elementos supera 800!")
    }
    return total;
})

ex2
.then((value) => console.log(value))
.catch((err) => console.log(err))
