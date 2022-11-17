//Clone
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
console.log("============ CLONE FUNCTION ============");
const originalObject = {
  name: "Mire",
  surname: "Cano",
  country: "Spain",
};

const originalObject2 = {
  type: "car",
  brand: "Opel",
  doors: 5,
  color: "Blue",
};

const clone = (source) => ({ ...source });

console.log(clone(originalObject));
console.log(clone(originalObject2));

//Merge
//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
console.log("============ MERGE FUNCTION ============");

const a = { name: "Maria", surname: "Ibañez", country: "SPA", age: 60 };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({ ...target, ...source });

console.log(merge(a, b));
