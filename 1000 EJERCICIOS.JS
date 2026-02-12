// Ejercicio 

// Clase Padre
// class Device {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     run() {
//         return `Marca: ${this.brand}, Modelo: ${this.model}, Precio: ${this.price}`
//     }
// };

// const phone = new Device("Tecno Spark", "Kj5", "450000");

// console.log(phone.run());

// // Clase Hijo
// class Smartphone extends Device {
//     constructor(brand, model, price, camaraMP){
//         super(brand, model, price);
//         this.camaraMP = camaraMP; 
// };

// run(){
//     return `${super.run()}, Camara: ${this.camaraMP}`;
// }
// };

// const phone2 = new Smartphone("Xiaomi", "Redmi Note 14", "1200000", "250MP");

// console.log(phone2.run());




// Ejercicio 2

// Clase Padre 
// class Course {
//     constructor(name, duration, category) {
//         this.name = name;
//         this.duration = duration;
//         this.cotegory = category;
//     }

//     run(){
//         return `Curso: ${this.name}, Duración: ${this.duration}, Categoria: ${this.category}`
//     }
// };

// const curso = new Course("Analisis-y-Desarrollo-de-Software", "2-Años-y-Medio", "Sistemas");
// console.log(curso.run());

// // Clase Hijo 
// class OnlineCourse extends Course {
//     constructor(name, duration, category, platform) {
//         super(name, duration, category);
//         this.platform = platform;
//     };

//     run(){
//         return `${super.run()}, Platform: ${this.platform}`;
//     }
// };

// const Course2 = new OnlineCourse("Redes", "2-Años", "Sistemas", "Sofia-Plus");
// console.log(Course2.run());




// Ejercicio 3
// class Vehicle {
//     constructor(brand, year,color) {
//         this.brand = brand;
//         this.year = year;
//         this.color = color;
//     }
//     run(){
//         return `Marca: ${this.brand}, Año: ${this.year}, Color: ${this.color}`;
//     }
// };

// const Moto = new Vehicle("Auteco", 2023, "Black",);
// console.log(Moto.run());

// // Clase Hijo
// class ElectriVehicle extends Vehicle {
//     constructor(brand, year, color, batteryCapacity){
//         super(brand, year, color);
//         this.batteryCapacity = batteryCapacity
//     };
//     run(){
//         return `${super.run()}, Bateria: ${this.batteryCapacity} kwh`;
//     }


// calculateRange(kmPerkwh){
//     return this.batteryCapacity * kmPerkwh;
//   }
// }

// const Moto2 = new ElectriVehicle("Niu", 2026, "Red", "7");
// console.log(Moto2.run());
// console.log("Autonomia:", Moto2.calculateRange(15), "km");



// Ejercicio 4

// Clase Padre 
// class Employee {
//     constructor(name, salary) {
//         this.name = name
//         this.salary = salary
//     }

//     run(){
//         return `Nombre: ${this.name}, Salario: ${this.salary}`
//     }
// };

// const Empleado = new Employee("Brahian", 2000000);
// console.log(Empleado.run());

// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary);
//         this.department = department
//     }

//     run(){
//         return `${super.run()}, Departamento: ${this.department}`;
//     }


// calculateBonus(){
//     return this.salary * 0.10;
// }
// };


// const Empleado2 = new Manager("Estiben", 5000000, "Risaralda");
// console.log(Empleado2.run());
// console.log("Bono:", Empleado2.calculateBonus());

  

// Ejercicio 5

// Clase Padre 
// class Animal {
//     constructor(name, species, age) {
//         this.name = name;
//         this.species = species;
//         this.age = age;
//     }
//     run(){
//         return `Nombre: ${this.name}, Especie: ${this.species}, Años: ${this.age}`;
//     }
// };

// // Clase Hijo
// class Dog extends Animal {
//     constructor(name, species, age, breed) {
//         super(name, species, age);
//         this.breed = breed ;
//     }
//     run(){
//         return `${super.run()}, Raza: ${this.breed}`;
//     }


// bark () {
//      return "¡Guau guau!";
//    }
// }
   
// const perro = new Dog("Rufus", "Canino", 3, "Pitbull");
// console.log(perro.run());
// console.log(perro.bark());



// Ejercicio 6

// Clase Padre 
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     run(){
//         return `Nombre: ${this.name}, Precio: ${this.price}`;
//     }
// };


// // Clase Hijo 
// class FoodtProduct extends Product {
//     constructor(name, price, expirationDate) {
//         super(name, price)
//         this.expirationDate = new Date(expirationDate);
//     }
//     run(){
//         return `${super.run()}, Fecha de Vencimiento: ${this.expirationDate. toLocaleDateString()}`;
//     }
//     isExpired() {
//         const today = new Date();
//         return today > this.expirationDate;

//     }
// }

// const Pastel = new FoodtProduct("Pastel", 5000, "29-09-2030");
// console.log(Pastel.run());

// if (Pastel.isExpired()) {
//     console.log("El producto esta vencido");
// }else {
//     console.log("El producto NO esta vencido");
// }



// Ejercicio 7

// Clase Padre 
// class Game {
//     constructor(title, minPlayers, maxPlayers) {
//         this.title = title;
//         this.minPlayers = minPlayers;
//         this.maxPlayers = maxPlayers;
//     }
//     run(){
//         return `Titulo: ${this.title}, MinJugadores: ${this.minPlayers}, MaxJugadores ${this.maxPlayers}`;
//     }
// };


// // Clase Hijo 
// class VideoGame extends Game {
//     constructor(title, minPlayers, maxPlayers, platform) {
//         super(title, minPlayers, maxPlayers);
//         this.platform = platform
//     }
//     run(){
//         return `${super.run()}, Plataforma: ${this.platform}`;
//     }
//     isMulpliyer() {
//         return  this.maxPlayers > 1;
//     }
// }

// const Fifa = new VideoGame("FIFA 26", 1, 4, "PS5");
// console.log(Fifa.run());

// if (Fifa.isMulpliyer()) {
//     console.log("Es Multijugador");
// }else {
//     console.log("Es de un solo Jugador")
// }



// Ejercicio 8

// Clase Padre 
// class Apppliance {
//     constructor(brand, energyLevel) {
//         this.brand = brand;
//         this.energyLevel = energyLevel;
//     }
//     run() {
//         return `Marca: ${this.brand}, Nivel de Energia: ${this.energyLevel}`;
//     }
// }

// // Clase Hijo 
// class Washer extends Apppliance {
//     constructor(brand, energyLevel, capacityKg) {
//         super(brand, energyLevel)
//         this.capacityKg = capacityKg;
//     }
//     run() {
//         return `${super.run()}, CapacidadKg: ${this.capacityKg} Kg`;
//     } 


// calculateWaterUsage() {
//     return this.capacityKg * 10

// }
// }

// const lavadora = new Washer("Samsung", "A++", 8);
// console.log(lavadora.run());
// console.log("Consumo estimado de agua:", lavadora.calculateWaterUsage(), "litros");

    

// Ejercicio 9

// Clase Padre 9
// class Artist {
//     constructor(name, genre) {
//         this.name = name;
//         this.genre = genre;
//     }
//     run() {
//         return `Nombre: ${this.name}, Genero: ${this.genre}`;
//     }
// }


// // Clase Hijo
// class Singer extends Artist {
//     constructor(name, genre, albums) {
//         super(name, genre);
//         this.albums = albums;
//     }
//     run() {
//          return `${super.run()}, Álbumes: ${this.albums}`;
//     }

// addAlbum() {
//     this.albums++;
// }
// }

// const singer = new Singer("Blessd", "Trap", 10);
// console.log(singer.run());
// singer.addAlbum();
// console.log("Despues de agregar un album:");
// console.log(singer.run());



// Ejercicio 10 

// Clase Padre 
class Building {
    constructor(addres, floors) {
        this.addres = addres;
        this.floors = floors;
    }
    run() {
        return `Direccion: ${this.addres}, Pisos: ${this.floors}`;
    }
}

// Clase Hijo 
class OfficeBuilding extends Building {
    constructor(addres, floors, companiesInside) {
        super(addres, floors);
        this.companiesInside = companiesInside;
    }
    run() {
        return `${super.run()}, Empresas: ${this.companiesInside}`;
    }
    getCompanyCount() {
      return  this.companiesInside;
    }
}

const office = new OfficeBuilding("Calle 30 #32-5", 10, 20);
console.log(office.run());
console.log("Numero de Empresa:", office.getCompanyCount());