// const darAcceso = (mensaje, usuario) => {
//   alert(`${mensaje} ${usuario}`);
// };

// let nombre = prompt("Ingrese el nombre del usuario");

// switch (nombre) {
//   case "Ezequiel":
//     darAcceso("Eres admin", nombre);
//     break;

//   case "Emanuel":
//     darAcceso("Eres de soporte", nombre);
//     break;

//   default:
//     darAcceso("No eestás autorizado", nombre);
//     break;
// }

//STORAGE
// localStorage
// console.log(localStorage);

//setItem para guardar en el storage
// localStorage.setItem("nombre", "juanito");
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", "true");

//getItem para traer elementos del storage
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);

//   console.log(clave);
//   console.log("valor asociado", localStorage.getItem(clave));
// }

//eliminar un solo elemento por su clave
// localStorage.removeItem("nombre");

//eliminar todo el storage
// localStorage.clear();

//sessionStorage
// console.log(sessionStorage);

// sessionStorage.setItem("nombre", "juanito");
// sessionStorage.setItem("numero", 5);
// sessionStorage.setItem("valor", "true");

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = localStorage.key(i);

//   console.log(clave);
//   console.log("valor asociado", localStorage.getItem(clave));
// }

//eliminar un solo elemento por su clave
// sessionStorage.removeItem("nombre");

//eliminar todo el storage
// sessionStorage.clear();

/* 
Conclusión: 

localStorage guarda recarga de página, cerrado de página, apagado o reinicio del computador
sessionStorage guarda solo recarga de página
*/

// let persona = {
//   nombre: "andres",
//   edad: 27,
// };

// localStorage.setItem("persona", persona);

// let arreglo = [4, 4, 65, 78];
// localStorage.setItem("arreglo", arreglo);

//JSON
//JSON.stringify(elemento) dar formato json al elemento
//JSON.parse(elemento) quitar formato json al elemento

// let persona = {
//   nombre: "andres",
//   edad: 27,
// };

// localStorage.setItem("persona", JSON.stringify(persona));

// let arreglo = [4, 4, 65, 78];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let persona = localStorage.getItem("persona");
// console.log(JSON.parse(persona));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 370 },
//   { id: 4, nombre: "media", precio: 580 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardarStorage(item.id, JSON.stringify(item));
// });

// let usuario;
// //traemos el usuario del storage
// let usuarioStorage = sessionStorage.getItem("usuario");

// //si hay usuario en el storage significa que no es la primera primera vez que entra a nuestra página
// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   //como es primera vez que entra pedimos el nombre
//   usuario = prompt("Ingrese su usuario");
//   alert(`Bienvenid@ por primera vez ${usuario}`);

//   //guardamos el nombre
//   sessionStorage.setItem("usuario", usuario);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 370 },
//   { id: 4, nombre: "media", precio: 580 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

//boton para eleminar el carrito
let eliminar = document.getElementById("eliminar");
let carrito;

//traemos el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito lo seteamos si no mostramos un mensaje pertinente
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  carrito = [];

  let div = document.createElement("div");
  div.innerHTML = "No hay elementos en el carrito";

  document.body.append(div);
}

//mostramos el carrito en el dom
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//alboton eliminar le agregamos un escuchador de eventos
eliminar.addEventListener("click", () => {
  alert("Carrito eliminado");
  //borramos el storage
  localStorage.removeItem("carrito");
  //recargamos la pagina
  location.reload();
});
