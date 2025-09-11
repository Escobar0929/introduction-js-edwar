// Brahian Estiben Munevar Escobar --- Metodos para los objetos 
// Brahian Estiben Munevar Escobar --- Con esta linea de codigo garantizo buenas practicas 
"use  stric";

const product ={
    productName : "sensor de humedad", 
    price : 300,
    available : true,
}

const speedMax = 80;
// speedMax = 70;
console.log(speedMax);

// Brahian Estiben Munevar Escobar --- Aunque el objeto product este declarado como constante agregar propiedades.
product.quantity= 10;
console.log(product);

// Brahain Estiben Munevar Escobar --- Con el metodo o funcon freeze bloqueamos el objeto para que no se puedan agregar mas propiedades
Object.freeze(product);

// Brahian Estiben Munevar Escobar --- Vamos a agregar una nueva propiedad color
// product.color = "red";

// Brahian Estiben Munevar Escobar --- Forma de saber si un objeti esta bloqueado
console.log("El documento esta bloqueado?: " + Object.isFrozen(product));

let response
if (Object.isFrozen(product)) {
    response = "si";
}else{
    responde = "no"
}

console.log("El documento esta loqueado?: " + response);

