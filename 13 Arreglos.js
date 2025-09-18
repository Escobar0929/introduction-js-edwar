// Arrays en JS 

const numbers = [10, 20, 30, 80, 100];

console.log(numbers)

// Otra forma de vizualización en tabla 
console.table(numbers);

// crear un arreglo cpn el constructor
const months = new Array("May", "January", "July", "June");

console.table(months);

const miArray = ["Hello", 42, true, false, null, {mmyName: "Brahian", myJob: "Aprendiz"}, [3172293, 3147206, 3036193]]

console.log(miArray);

// consultar un elemento de un arreglo 
// console.log(numbers[2]);
// console.log(miArray[4]);

// metodo para conocer la longitud de un arreglo
console.log("Brahian tu arreglo  tiene: ", miArray.length, "Elementos");

// Un iterador con forEach
// numbers.forEach(function(numbers){
    // console.log(numbers);
// })

//  months.forEach(function(month){
//    console.log(month)
// })

miArray.forEach(function(elemnt){
    console.log(elemnt)
})

