// Function in JS 
// ¿Que es el Hoisting
// Histing en JS es el comportamineto por defecto en el que el interprete "MUEVE" las declaraciones ( de variables y funciones) a la aprte superioir de su ambito (scope)antes de ejecutar el codigo 
// Esto significa que puede usar un funcion o variable decalrada antes de escribirla en el codigo

// Declaracion de una funcion 
// Como esta funcion esta declara se puede llamar antes o despues de su ceacion
function add (){
    console.log(10 + 10);
};

add();

//================================

// La expresion de una funcion 

const sumar2 = function(){
    console.log(3 + 3)
};

sumar2 ();

//================================
// IIFE (Inmediately Invked Function Expression), esta funcion se llama a si misma 
// Son utilis para proteger las varibles para que no se mezclen con las variables de otros archivos   
(function(){
    console.log("Esta es la funcioin IIFE")
})();


(function(name){
    console.log(`Hello ${name}`);
})('Brahian');

console.log(client);