// Estructura de Conrol IF
const score = Number (prompt('Ingrese el Puntaje'))

if (score == 100) {
    console.log(`Si el puntaje es 100`)
}

// =============================


const score2 = Number(prompt("Ingrese al puntaje"));

if (score = 100){
    console.log(`El puntaje es diferente de 100`);
}else {
    console.log(`Si el ountaje es 100`)
}

// =====================================
const rol = 'admin'

if(rol == 'admin') {
    console.log('Tienes acceso a todo el sistema');
}else if(rol == 'editor'){
    console.log('puedes editar funciones basicas')
}else {
    console.log('No tienes acceso al sistema')
}