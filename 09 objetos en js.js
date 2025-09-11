// Brahian Estiben Munevar Escobar --- Objetos en JS

const productName = "sensor de humedad";
const price = 300 ;
const available = true ;


// Brahian Estiben Munevar Escobar --- Este objeto llamado product que almacena 
const product ={
    productName : "sensor de humeda",
    price: 300, 
    available :true,
}

console.log(product);
console.log(typeof product);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof available);

// Brahian Estiben Munevar Escobar --- Para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente manera:

console.log("El nombre del producto es: " + product.productName);
console.log("El precio del producto es: " + product.price);
console.log("El productoesta disponible: " + product.available);

// Brahian Estiben Munevar Escobar --- // Agregar propiedades al objeto
product.inage = "Brahian.jpg";

console.log(product);
