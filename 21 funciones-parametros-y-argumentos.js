// Funciones parametros y argumentos 

// Los parametros se pasan en los parentesis de la funcion 
function add(num1, num2){
    return console.log(num1+num2);
};

add(5, 15) // Estos valores que se envian a la funcion se llaman argumentos 
add(7, 85)
add(3, 20)
add(7, 7)
add(5,5)

//===============================
// Ejercicio con la Expresion de una funcion 
const sumar= (function(num1, num2){
    console.log(num1 + num2)
});

sumar(4,7)
sumar(2,6)
sumar(6,33)
sumar(67,23)

//==============================

// Ejemplo cuando no se coloca argumentos, se coloca por defecto los valores en los parametros 
function add2(num7 = 35, num8 = 10){
    return console.log(num7 - num8);
}
add2();

// Funcion que retorna un valor 
function add4 (num9, num10){
    return num9 * num10
};

const result = add4(4, 5)
console.log(result);

// Ejemplo mas avanzado 
let total = 0;
// Funcion para sumar productos 
function addShoppingCart(price){
    return total += price 
};

// Funcion para agregar el impesto a pagar 
function calculateTax(Total){
    return 1.19 * total;
};

total = addShoppingCart(800);
total = addShoppingCart(500);
total = addShoppingCart(200);
total = addShoppingCart(900);

console.log(`La suma de los productos es: ${total}`);

const totalToPay = calculateTax(total);

console.log(`La suma de los productos mas el impuesto es: ${totalToPay}`);