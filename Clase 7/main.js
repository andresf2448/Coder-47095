// FUNCIONES DE ALTO ORDEN
// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(10));
// console.log(mayorQueCinco(3));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(15));
// console.log(mayorQueDiez(5));

// function operaciones(op) {
//   if (op === "sumar") {
//     return (x, y) => x + y;
//   }

//   if (op === "restar") {
//     return (x, y) => x - y;
//   }

//   if (op === "mutiplicar") {
//     return (x, y) => x * y;
//   }

//   if (op === "dividir") {
//     return (x, y) => x / y;
//   }
// }

// let sumar = operaciones("sumar"); // (x, y) => x + y;
// console.log(sumar(9, 1));

// let restar = operaciones("restar");
// console.log(restar(9, 20));

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterador([3, 4, 5, 67], console.log);

// function mostrar(nombre) {
//   console.log(`Hola soy ${nombre}`);
// }

// function iterador(arreglo, funcion) {
//   for (const nombre of arreglo) {
//     funcion(nombre);
//   }
// }

// const nombres = ["andres", "Ezequiel", "Ema", "Fabricio"];

// iterador(nombres, mostrar);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 1000 },
//   { id: 3, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "zapato", precio: 1000 },
// ];

//forEach recorre el arreglo *
// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encuentra el primer elemento que cumpla con la condición dada *
// const encontrado = productos.find((item) => item.nombre === "camisa");
// console.log(encontrado);

// let nombre = prompt("Ingrese el nombre del producto");

// const producto = productos.find((item) => item.nombre === nombre);

// if (producto) {
//   alert(`
//     Nombre: ${producto.nombre}
//     precio: $${producto.precio}
//   `);
// } else {
//   alert("Producto no encontrado");
// }

//filter encuentra todos los elementos que cumplan la condición *
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 100 },
//   { id: 3, nombre: "media", precio: 350 },
//   { id: 4, nombre: "zapato", precio: 777 },
// ];

// const filtrados = productos.filter((item) => item.precio > 500);
// console.log(filtrados);

// let precio = Number(prompt("Ingrese el precio mínimo"));

// const filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((producto) => {
//   alert(`
//     Nombre: ${producto.nombre}
//     precio: $${producto.precio}
//   `);
// });

//some verifica si existe al menos un elemento que cumpla la condición dada (true/false)
// console.log(productos.some((item) => item.nombre === "camisa"));
// console.log(productos.some((item) => item.nombre === "camiasdfdf"));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 100 },
//   { id: 3, nombre: "media", precio: 350 },
//   { id: 4, nombre: "zapato", precio: 777 },
// ];

//map mapea, transforma el arreglo (genera un nuevo arreglo con los items modificados)
// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const descuentos = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(descuentos);

// const filtrados = productos.filter((item) => item.precio > 500);

// const descuentos = filtrados.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(descuentos);

//reduce reduce un arreglo a un solo valor
//reduce(funcion, inicializadorAcumulador)
// const numeros = [4, 5, 6, 8, 9];

// const total = numeros.reduce((acum, item) => acum + item, 100 * 0.21);
// console.log(total);

/* 
item = 4, 5, 6, 8, 9
acum = 0, 4, 9, 15, 23, 32
*/

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 100 },
//   { id: 3, nombre: "media", precio: 350 },
//   { id: 4, nombre: "zapato", precio: 777 },
// ];

// const total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

//sort ordena el arreglo
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a es igual a b
    return 0;
  })
);
