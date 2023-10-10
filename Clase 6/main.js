/* 
estructura de un arreglo

[valor1, valor2, ..., valorn];
*/

// const vacio = [];
// const numeros = [4, 5, 6, 7, 85, 3];
// const nombres = ["andres", "camila", "pepito", "juanita"];
// const valores = [true, false, false, true];
// const variados = [1, "andres", true];

// console.log(nombres[2]);
// console.log(numeros[0] + numeros[3]);

// const nombres = ["andres", "camila", "pepito", "juanita"];

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

//Métodos y propiedades de los arreglos
//length da la longitud o cantidad de elementos del arreglo

// const nombres = ["andres", "camila", "pepito"];

//push agrega un elemento al final del arreglo
// nombres.push("carlitos");
// console.log(nombres);

// //unshift agrega un elemento al inicio del arreglo
// nombres.unshift("juanito");
// console.log(nombres);

// //pop saca el último elemento del arreglo
// nombres.pop();
// console.log(nombres);

// //shift saca el primer elemento del arreglo
// nombres.shift();
// console.log(nombres);

// const nombres = ["andres", "camila", "pepito", "pedrito", "carlitos"];

//splice permite eliminar uno o varios elementos del arreglo en cualquier posición
// nombres.splice(2, 1);
// console.log(nombres);

//join une todos los elementos del arreglo en un string separados por el parámetro
// console.log(nombres.join("****"));

// const numerosAutenticacion = [4, 5, 6, 7];
// console.log(numerosAutenticacion.join(""));

// const nombres = ["andres", "camila", "pepito", "pedrito", "carlitos"];
//concat permite unir dos arreglos en uno solo

// const mascotas = ["firu", "max"];
// const varios = mascotas.concat(nombres);
// console.log(varios);

//slice permite hacer una copia de un fragmento de un arreglo
// const copia = nombres.slice(2, 5);
// console.log(copia);

//indexOf me dice la posicion en la que se encuentra el elemento pasado por parámetro
//si encuentra el elemento devuelve la posicioón si no devuelve -1
// console.log(nombres.indexOf("pedrito"));
// console.log(nombres.indexOf("a,sdfa"));

//includes verifica la existencia de algún elemento pasado por parámetro
// console.log(nombres.includes("juanita"));
// console.log(nombres.includes("pedrito"));

// const productos = ["camisa", "pantalon", "gorra"];
// console.log(productos.indexOf(",hjgv"));

// let nombre = prompt("Ingrese el producto a buscar su existencia");

// if (productos.includes(nombre)) {
//   alert("Producto disponible");
// } else {
//   alert("Producto no disponible");
// }

//reverse invierte el orden del arreglo
// productos.reverse();
// console.log(productos);

// const nombres = ["andres", "camila", "pepito", "pedrito", "carlitos"];

// const eliminarPorNombre = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if(index != -1){
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminarPorNombre("carlitos");

// function eliminarPorNombre(nombre){
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 377 },
//   { id: 4, nombre: "media", precio: 150 },
// ];

// for(const item of productos){
//   console.log(item.id);
//   console.log(item.nombre);
//   console.log(item.precio);
// }

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// const productos = [];

// productos.push(new Producto("camisa", 1000));
// productos.push(new Producto("gorra", 700));
// productos.push(new Producto("media", 350));
// productos.push(new Producto("pantalon", 150));

// for(const item of productos){
//   console.log(item);
// }

// let nombres = ["casdf", "asdf"];  consultar entrega posiciones

// for(const item in nombres){
//   console.log(item);
// }