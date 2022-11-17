//Head
//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
console.log("============ HEAD FUNCTION ============");

const head = ([firstElement]) => firstElement;

console.log(head([1, 2, 3])); // 1
console.log(head([{ name: "Mire" }, true, "HI!"])); // {name:"Mire"}
console.log(head([])); // Undefined

//Tail
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
console.log("============ TAIL FUNCTION ============");

const tail = ([, ...others]) => others;

console.log(tail([1, 2, 3, 4, 5, 6])); // [2, 3, 4, 5, 6]
console.log(tail(["Mire", "Cano", 3, true])); // ["Cano", 3, true]

//Init
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
console.log("============ INIT FUNCTION ============");

const init = (array) => array.slice(0, -1);

console.log(init(["ant", "bison", "camel", "duck", "elephant"])); //['ant', 'bison', 'camel', 'duck']
console.log(init([1, 2, true, { name: "mire" }, 5, 6, 7])); // [1, 2, true, {name: "mire"}, 5, 6]

//Last
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
console.log("============ LAST FUNCTION ============");

const last = (array) => array[array.length - 1];

console.log(last([1, 2, 3, 4, 5, 6])); // 6
console.log(last(["Mire", "Cano"])); // Cano
console.log(last([true, false, { name: "Kate" }])); // {name: 'Kate'}
