// More methodes for arrays 

const moths = new Array("May", "January", "July", "June");


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

// Recorrer el arreglo con un forEach para que muestre todos los elementos 
// En este caso moths es un parametro 
moths.forEach(function(moth){
    console.log(moth);
});

// verificar si un mes existe con un forEach 
moths.forEach(function(moth1){
    if (moth1 == 'June'){
        console.log('The moth of June exist in the array');
    }else {
        console.log("Doesn't exits");
    }
});

// Buscar en un arreglo si algo existe, si existe devuelve un true si no un false.
const result = moths.includes('May')
console.log(result);

//====================================

// En JS includes no funcionan bien con los objetos 
const result2 =shoppingCart.includes('Tablet')
console.log(result2);

const num = 5 == 5;
console.log('igualacion doble', num);

// Con igualacioin doble solo compara el valor por eso en la consola tenemos un true.
const num2 = 5 == '5';
console.log('igualacion doble', num2);

// Con igualacion trple verifica si es el mismo valor y tipo.
const num3 = 5 === '5';
console.log('igualacion triple', num3);

// //=================================
// // En conclusion para un arreglo plano se usa includes y para un arreglo de objetos se usa some.
// const result5 = shoppingCart.some(function(product){
//     return product.productName === 'Mause'
// });

// console.log(result5);

// Hce lo mismo que el codigo anterior pero mas corto con Arrow fuction
let result5 = shoppingCart.some(product => product.prductName === "Play station")
console.log(result5);

// //====================================

// Metodo reduce 
//  Sumar todos los precios del carrito de compras 
result5 = shoppingCart.reduce(function(total, product){
    return total + product.price 
 },0)

 console.log(result5);


// let resutl5 = shoppingCart.reduce ((total, product) => total + product.price, 0)
// console.log(result5);

//=======================================
// filtrar los valores menosre que 700
result5 = shoppingCart.filter(function(product){
    return product.price < 700
});

console.log(result5)


let resutl5 = shoppingCart.filter(product => product.price > 50);
console.log(result5)

// Filtrar los del mismo producto 
result5 = shoppingCart.filter(function(product){
    return product.productName === 'Sound-bar'
});

console.log(result5);

// Lo mismo pero con Arrow function
result5 = shoppingCart.filter(product => product.productName === 'Sound-bar')
console.log(result5)


