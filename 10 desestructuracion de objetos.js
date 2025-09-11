// Brahian Estiben Munevar Escobar 

const product ={
    productName : "sensor de humedad", 
    price : 300,
    available : true,
}

//Brahian Estiben Munevar Escobar --- Aqui un ejemplo de desestructuracion de objetos 
const productprice = product.price;
const productName = product.productName;


console.log(productprice);
console.log(product.productName);

// Brahian Estiben Munevar Escobar --- Para que sirve el destructuring? Sirve para extraer los valores de un objeto 
const {price, available} = product;

console.log(price, available);
