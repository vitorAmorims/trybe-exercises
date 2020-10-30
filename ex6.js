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

const getListAnimals = (type) => findAnimalsByType(type).then((list) => list);

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalInfo = Animals.find((animal) => animal.name === name);
      if (animalInfo !== undefined) {
        return resolve(animalInfo);
      }
      const error = "Nenhum animal com este nome.";
      return reject(error);
    }, 100);
  });
// findAnimalByName("Dorminhoco") // teste  na função true ou false.
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const getAnimal = (name) => {
    return findAnimalByName(name);
    // .then((data) => (data))
    // .catch((error) => (error));
};

// getAnimal("Dorminhoc") teste true ou false.

module.exports = { Animals, findAnimalsByType, getListAnimals, findAnimalByName, getAnimal };
