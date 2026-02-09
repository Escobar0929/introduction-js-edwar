// Estructura swith
 // Permite evaluar una exprecion y ejecutar diferentes bloques de codigo segun el caso de que coincida 

 const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('pagaste con tarjeta');   
        break;
    case 'bitcoin':
        console.log('pagaste con bitcoin')
        break;
    case 'debitCard':
        console.log('pagaste con tarjeta debito')
        break;
    case 'creditCart':
        console.log('pagaste con tarjeta credito')

    default:
        break;
}
