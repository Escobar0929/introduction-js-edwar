
// Cuando se unen 2 objetos lo ideal es NO modificar ninguno de lo 2 objetos

const product = {
    productName : "sensor de humedad", 
    price : 300,
    available : true,
}

Object.freeze(product);

const measurements = {
    weight : "1 kg",
    measurements : "10cm"
}

// Rest operator, consta de (...)

const newProduct = {...product, ...measurements};

// console.log(product);

// console.log(newProduct)


const Vehiculo = {
    length : "3m",
    brand : "Ford"
}

const Moto = {
    length : "1.5m",
    brand : "yamaha"
}

const newVehiculo = {...Vehiculo, ...Moto};

console.log(Vehiculo); 
console.log(Moto); 

