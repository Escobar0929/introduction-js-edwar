// Diferencia entre metdos y funciones
const num1 = 10;
const num2 = '20';

console.log(num1)
console.log(num2)
console.log(typeof num1);
console.log(typeof num2);

// Parsear es convertir un tipo de dato de variable a otro tipo
console.log(num1)
console.log(parseInt(num2));

// Este metodo convierte de numero  String 
console.log(num1.toString());
console.log(num1);

//===========================
// Funcion: Bloque de codigo independiente que realiza una tarea 
function greet(){
    console.log('Hello');
};

greet();

//===========================

const person ={
    userName: "Brahian",
    greet: function(){
        console.log(`Hello, I'm ${this.userName}`);
    }
}

// El metodo es una funcion asosciada a un objeto (Se llama a traves de u punto)
person.greet(); // Metodo por que pertenece a person
console.log(typeof person);

// Una funcion existe por si sola
// Un metodo es una funcion dentro de un objeto 

