// This es una palabra reserada del sistema, o sea que NO se puede crear ni funciones ni variiables con esta nombre.

const reservation = {
    userName: "Brahian",
    lastName: "Munevar",
    userAge: 18, 
    total: 100000,
    isPaid: false,

// Los objetos pueden contener funciones 
    information: function () {
        console.log(`El cliente ${this.userName} reservo y la cantidad a paga es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};
const reservation2 = {
    userName: "Estiben",
    lastName: "Escobar",
    userAge: 19, 
    total: 150000,
    isPaid: true,

// Los objetos pueden contener funciones 
    information: function () {
        console.log(`El cliente ${this.userName} reservo y la cantidad a paga es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};
const reservation3 = {
    userName: "Leidy",
    lastName: "Carvajal",
    userAge: 35, 
    total: 50000,
    isPaid: true,

// Los objetos pueden contener funciones 
    information: () => {
        console.log(`El cliente ${this.userName} reservo y la cantidad a paga es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
};
// This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar 
// Es obligatorio usar la funcion de esta manera, porque esta haciendo referencia al objeto que esta usando 
reservation.information();
reservation2.information();

// Si se usa arrow function no es capaz de leer los datos del contexto, dando como resultado undefined 
reservation3.information();


