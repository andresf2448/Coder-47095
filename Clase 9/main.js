//DOM
// console.log(document);

//Conexión con el DOM

//getElementById(id);
// let aplicacion = document.getElementById("aplicacion");
// console.log(aplicacion.innerHTML); //contenido html interno
// console.log(aplicacion.innerText); //contenido texto interno

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName(clase);
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName(nombre);
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

//Modificación de nodos
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola Coder</h1>";

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion a la que desea ingresar");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
//   saludo.className = "amarillo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenid@ a los Favoritos</h1>";
//   saludo.className = "rojo";
// } else {
//   saludo.innerHTML = "<h1>Bienvenid@ a nuestra super página</h1>";
//   saludo.className = "azul";
// }

//Creación de nodos
//creación de la etiqueta
// let parrafo = document.createElement("p");

//asignación del contenido
// parrafo.innerHTML = "Hola a todos";
// parrafo.className = "amarillo";

//asignación del padre
//1 forma en el body
// document.body.append(parrafo);

//2 forma en un contendor
// let contendor = document.getElementById("contendor");
// contendor.append(parrafo);

//Eliminar un nodo
// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

// let contenedor = document.getElementById("contenedor");
// const productos = ["camisa", "pantalon", "zapato", "media"];

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = item;
//   contenedor.append(div);
// });

//traemos el contendor donde mostraremos los productos
let contenedor = document.getElementById("contenedor");
const productos = [
  { id: 1, nombre: "camisa", precio: "1000", categoria: "hombre" },
  { id: 2, nombre: "gorra", precio: "500", categoria: "mujer" },
  { id: 3, nombre: "pantalon", precio: "750", categoria: "" },
  { id: 4, nombre: "media", precio: "398", categoria: "" },
];



productos.forEach((item) => {
  //creamos la etiqueta que contendrá el contenido del producto
  let div = document.createElement("div");

  //asignamos el contenido a la etiqueta anteriormente creada
  div.innerHTML = `
    <h2 class="amarillo">Id: ${item.id}</h2>
    <p class="azul">Nombre: ${item.nombre}</p>
    <b class="rojo">$${item.precio}</b>
  `;

  //agregamos la etiqueta al contenedor de la página
  document.body.append(div);
});

// let tipo = prompt("Ingrese el modo");

// if (tipo === "negro") {
//   document.body.className = "negro";
// } else {
//   document.body.className = "blanco";
// }
