// ForEach map son metodoa exclusivos de arreglos 

const shoppingCart = [
    {prductName:'Smatr TV 60', price: 900},
    {prductName:'Smatr TV 50', price: 700},
    {prductName:'Tablet', price: 500},
    {prductName:'Smart phone', price: 900},
    {prductName:'Google assistand', price: 600},
    {prductName:'Sound-bar', price: 400},
    {prductName:'Play station', price: 800},
    {prductName:'Wii', price: 450},
    {prductName:'Mause', price: 50},
]

// // Recorrer un arreglo por cada elemento 
// shoppingCart.forEach(function(product){
//     console.log(product)
// }); 
// // Acceder a un elemento especifico
// shoppingCart.forEach(function(product){
//     console.log(product.price)
// }); 
// // Acceder a un elemtno especifico
// shoppingCart.forEach(function(product){
//     console.log(productName)
// }); 
// // Acceder a un elemento especifico
// shoppingCart.forEach(function(product){
//     console.log(product.color)
// }); 

// ==================================================================

// Ahora froEach con arrow fuction

// Recorrer un arreglo por cada elemento 
// shoppingCart.forEach((product)=> console.log(product))


// =============================================

const array = shoppingCart.map( product => `${product.prductName} - ${product.price}`)

console.log(array);
