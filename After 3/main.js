//Creación de las etiquetas
//1 paso
//creación de la etiqueta
// let div = document.createElement("div");

//2 paso
//agregado de contenido
// div.innerHTML = "Hola a todos";

//3 paso
//asignación de un padre
//1 opcion en el body
// document.body.append(div);

//2 opción en un contenedor
// let contenedor = document.getElementById("contenedor");
// contenedor.push(div);

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 700 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// const agregarProducto = (nombre, precio) => {
//   //traer datos del storage
//   let productosJson = localStorage.getItem("carrito");
//   let productos = JSON.parse(productosJson);

//   //administrar el arreglo
//   let producto = {
//     id: productos.length + 1,
//     nombre,
//     precio,
//   };

//   productos.push(producto);

//   //actualización del storage
//   localStorage.setItem("carrito", JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = Number(prompt("Ingrese el precio del producto"));

// agregarProducto(nombre, precio);

//Crear una función para eliminar un producto por su id

// const eliminarProducto = (id) => {
//   let productosJson = localStorage.getItem("carrito");
//   let productos = JSON.parse(productosJson);

//   let productosFiltrados = productos.filter((item) => item.id != id);

//   localStorage.setItem("carrito", JSON.stringify(productosFiltrados));
// };

// let id = Number(prompt("Ingrese el id del producto a eliminar"));
// eliminarProducto(id);

//una función que dado el id mmodifique el precio de un producto

const modificarPrecio = (id, precio) => {};
