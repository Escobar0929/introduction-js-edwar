// String o cadena de texto 
const sensor1 = "Temperatura"
const sensor2 = "PH"

console.log(sensor1);
console.log(sensor2);

const sensor3 = String("Presion");
const sensor4 = new String("Humedad");

console.log(sensor3);
console.log(sensor4);

// para saber el tipo de dato de cualquier variable 
console.log(typeof sensor3);

let product = ("Televisor de 32\"");
let product2 = ("Televisor de 58\"");
console.log(product);
console.log(product2);

// Metodos con String
console.log(product2.length);

let name1 = "Brahian Estiben Munevar Escobar";
console.log(name1.length);


// Sirve para saber si una cadena de texto existe en un frase 
// indexof nos muestra la posicion en al que se encuentra la cadena de texto 
// Si la cadena no existe muestra un resultado menor que cero(0)
let phrase = "Aqui vamos a buscar la palabra SENA";
console.log(phrase.indexOf("sena"));
console.log(phrase.indexOf("Brahian"));
