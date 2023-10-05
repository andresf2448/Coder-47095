// let nombre = "pepito";
// let edad = 45;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["direccion"]);
// console.log(persona["edad"]);

// let propiedad = prompt("Ingrese la propiedad que quieres consultar del objeto");
// alert(persona[propiedad]);

//el punto busca literalmente en el objeto lo que hay después de él
//los corchetes reemplazan la variable antes de buscar en el objeto

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// persona.nombre = "Luis";
// persona["edad"] = 50;

// console.log(persona);

// persona.altura = 180;
// persona["peso"] = 75;

// console.log(persona);

// funciones constructoras
// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 50, "AV1");
// console.log(persona1);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.altura = info.altura;
//   this.peso = info.peso;
// }

// const persona1 = new Persona({
//   peso: 45,
//   altura: 180,
//   nombre: "pepito",
//   direccion: "AV",
//   edad: 45,
// });

// console.log(persona1);

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.caminar = function(){console.log(`Hola soy ${this.nombre} y estoy caminando`);}
// }

// const persona1 = new Persona("pepito", 45, "AV");

// console.log(persona1);
// persona1["caminar"]();

// console.log("nombre" in persona1);
// console.log("altura" in persona1);

// for (const clave in persona1) {
//   console.log(clave);
//   console.log("valor asignado", persona1[clave]);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.caminar = function(){console.log(`Hola soy ${this.nombre} y estoy caminando`);}
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   caminar() {
//     console.log(`Hola soy ${this.nombre} y estoy caminando`);
//   }
// }

// const persona1 = new Persona("Pepito", 34, "AV");
// persona1.caminar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// const producto1 = new Producto(
//   "Monitor Dell E1916h Led 19 Negro 100v/240v Usado",
//   239999,
//   "http:as.d,fjhasf"
// )

// const producto2 = new Producto(
//   "Monitor 19 Multiples Marcas Dependiendo",
//   130000,
//   "http:asdf"
// )

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto(
//   "Monitor Dell E1916h Led 19 Negro 100v/240v Usado",
//   239999,
//   "http:as.d,fjhasf"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto {
  constructor(nombre, precio, imagen,cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto(
  "Monitor Dell E1916h Led 19 Negro 100v/240v Usado",
  239999,
  "http:as.d,fjhasf",
  5
);

console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
