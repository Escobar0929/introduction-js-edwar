// Los booleanos tinein 2 valores falsoy verdadero 

let age = 17;
// MAYOR que 
let isOlderThan = age >= 18;

console.log(isOlderThan)

// ==============================
let userName="";

let haveName = userName !== "";

console.log(haveName);
//===============================
// En JS 0 es falsy, pero cualquier numero distinto de 0 es truthy.
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-5));

//===============================
// En JS null or undefined simepre se convierte en false.
let nullValue = null
let undefinedValue

console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue));
//===============================
// Los booleanos son las bases de las decisiones en los programas.
let haveAcess = true ;

if (haveAcess){
    console.log("Welcome to system");
}else {
    console.log("Denied acess");
}
