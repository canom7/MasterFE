//Concat
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
console.log("============ CONCAT FUNCTION ============");

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const animals = ["ant", "bison", "camel", "duck", "elephant"];

const concat = (a, b) => [...a, ...b];

console.log(concat(fruits, animals));

//Opcional
//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
console.log("============ CONCAT MORE THAN 2 ARRAYS FUNCTION ============");

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
const elements = ["Fire", "Air", "Water"];

const concatMoreThanTwo = (a, b, ...others) => {
  let newArray = [...a, ...b];

  for (const item of others) {
    newArray = [...newArray, ...item];
  }
  return newArray;
};

console.log(concatMoreThanTwo(fruits, animals, plants, elements));
