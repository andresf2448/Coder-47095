//Operador ++
// let numero = 17;
// numero = numero + 1;
// numero += 1;
// numero++;

//Operador ternario
/* 
estructura del operador ternario

condicion ? codigo a ejecutar cuando condicion verdadera : codigo a ejecutar cuando condicion falsa;
*/

// let edad = 10;

// if (edad >= 18) {
//   console.log("Eres mayor");
// } else {
//   console.log("No eres mayor de edad");
// }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

// let temperatura = 50;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// const usuario = {
//   nombre: "Andres",
//   edad: 27,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if(permiso){
//   console.log("Puedes entrar a la fiesta");
// }else{
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "Andres",
//   edad: 10,
// };

// //return implícito
// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a al fiesta") : console.log("No puedes entrar a la fiesta");

//Operadores lógicos

/* 
valor1 && valor2 retorna valor1 si este es falso, en caso contrario retorna valor2
valor1 || valor2 retorna valor1 si este es verdadero, en caso contrario retorna valor2
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

// const usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //null
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario = {
//   nombre: "pepito",
//   edad: 56,
// };

// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Acceso condicional a un objeto
// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "pepito",
//   edad: 56,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "la propiedad no existe");

// Desestructuración
// const usuario = {
//   nombre: "pedrito",
//   edad: 45,
//   direccion: "AV",
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = usuario.direccion;

// let { nombre, edad, direccion } = usuario;

// console.log(nombre);
// console.log(edad);
// console.log(direccion);

// const usuario = {
//   nombre: "pedrito",
//   edad: 45,
//   direccion: "AV",
//   telefonos: {
//     casa: 1234,
//     trabajo: 356,
//   },
// };

// let {
//   nombre,
//   direccion,
//   telefonos: { casa, trabajo },
// } = usuario;

// console.log(casa);
// console.log(trabajo);

// const usuario = {
//   nombre: "pedrito",
//   edad: 45,
//   direccion: "AV",
//   telefonos: {
//     casa: {
//       numero1: 245,
//       numero2: 345,
//     },
//     trabajo: {
//       numero1: 789,
//       numero2: 657,
//     },
//   },
// };

// let {
//   nombre,
//   direccion,
//   telefonos: {
//     casa: { numero1 },
//     trabajo: { numero1 },
//   },
// } = usuario;

// const producto = { nombre: "camisa", precio: 1000 };
// const { nombre: nombreProducto, precio: precioProducto } = producto;

// console.log(nombreProducto, precioProducto);

// const usuario = {
//   nombre: "pedrito",
//   edad: 45,
//   direccion: "AV",
//   telefonos: {
//     casa: {
//       numero1: 245,
//       numero2: 345,
//     },
//     trabajo: {
//       numero1: 789,
//       numero2: 657,
//     },
//   },
// };

// const {
//   nombre,
//   direccion,
//   telefonos: {
//     casa: { numero1: casaNumero1 },
//     trabajo: { numero1: trabajoNumero1 },
//   },
// } = usuario;

// console.log(casaNumero1);
// console.log(trabajoNumero1);

// const desestructurar = ({ nombre, precio }) => {
//   console.log(`El producto ${nombre} cuesta ${precio}`);
// };

// let producto = {
//   nombre: "pantalon",
//   precio: 678,
// };

// desestructurar(producto);

const nombres = ["Ezequiel", "Emanuel", "Fabricio", "Andrés"];

const [nombre1, , nombre3] = nombres;

console.log(nombre1);
console.log(nombre3);
