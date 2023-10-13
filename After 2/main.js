//hacer un algoritmo que dado un arreglo de productos, podamos buscar un producto en particular
// siempre que la entrada del usuario sea diferente de salir

//productos de mi tienda
// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "pantalon", precio: 1000 },
// ];

// //función para encontrar un producto por su nombre
// const encontrarProducto = (nombre) => {
//   return productos.find((item) => item.nombre === nombre);
// };

// //función para mostrar un si existe y si no mostrar mensaje correspondiente
// const mostrarProducto = (producto) => {
//   if (producto) {
//     alert(`
//       Nombre: ${producto.nombre}
//       Precio: ${producto.precio}
//     `);
//   } else {
//     alert("Producto no encontrado");
//   }
// };

// //pedimos el nombre del producto a buscar
// let nombre = prompt("Ingrese el producto a buscar");

// //mientras que nombre seea diferente de salir todo se ejecuta normalmente
// while (nombre != "salir") {
//   //buscamos el producto
//   let producto = encontrarProducto(nombre);

//   //mostramos el producto
//   mostrarProducto(producto);

//   //volvemos a pedir el nombre del producto a buscar
//   nombre = prompt("Ingrese el producto a buscar");
// }

// alert("Regrese pronto!");

//forEach, find, filter y map