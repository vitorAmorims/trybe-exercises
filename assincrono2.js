const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalsByType = (type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: "Não possui esse tipo de animal." });
    }, 100);
  });
// findAnimalsByType("Cão")
// .then((value) => console.log(value))
// .catch((err) => console.log(err));

const getListAnimals = (type) =>
  findAnimalsByType(type)
    .then((list) => list)
    .catch((err) => console.log(err));
// getListAnimals("cao");
// console.log(typeof getListAnimals);

module.exports = { Animals, getListAnimals, findAnimalsByType };
// module.exports =  Animals;