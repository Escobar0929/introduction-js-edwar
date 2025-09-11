let result;

result = Math.PI;
result = Math.round(2.7);
result = Math.round(2.1);
result = Math.ceil(2.1); // Redondeo hacia arriba 
result = Math.floor(2.8); // Redondeo hacia abajo
result = Math.sqrt(16); //Raiz cuadrada 
result = Math.abs(-144); // valor absoluto
result = Math.min(1, 5, 85, 65, 7); 
result = Math.max(1, 5, 85, 65, 7); 
result = Math.random();
result = Math.floor(Math.random() * 8); // imprimir numero enteros 
console.log(result)

// 4 operciones basicas con 2 numeros entero aleatorios no mayores de 100
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

let  sumar = num1 + num2;
let  restar = num1 - num2;
let  multiplicar = num1 * num2;
let  dividir = num1 / num2;

console.log(sumar);
console.log(restar);
console.log(multiplicar);
console.log(dividir);

