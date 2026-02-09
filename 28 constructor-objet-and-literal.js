// El objeto literal 
// Esta es la forma mas comun pero no es muy dinamico que digamos 
// De esta forma el objeto tiene diferentes variables 

const product = {
    productName : "Mause",
    productprice : 50000,
    productcolor : "Red",
}
// Asi se crea un segundo objeto con el objeto literal 
const product2 = {
    productName : "Key board",
    productprice : 80000,
    productcolor : "Blue",
}

// ===============================

// Objeto constructor 
// Este objeto constructor debe contener todos los diferentes valores que van a formar parte del objeto 
// En los parentesis de la funcion llegan los parametros 

function Product(productName, productprice, productcolor) {
    this.productName = productName;
    this.productprice = productprice;
    this.productcolor = productcolor;
}

const product3 = new Product("Mause", 35000, "Green");
const product4 = new Product("Cell Phone", 45000, "Black");
const product5 = new Product("PC", 500000, "White");

console.log(product3);
console.log(product4);
console.log(product5);
