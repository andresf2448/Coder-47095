//Spread operator ...
// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [4, 77, 92, 10, 3, -32, 54, 11];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

//paso por valor
// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "emiliano";
// console.log(nombre1);

//paso por referencia
// let persona1 = { nombre: "juan", edad: 56 };
// let persona2 = persona1;

// persona2.nombre = "emiliano";
// console.log(persona1);

// let persona1 = { nombre: "juan", edad: 56 };
// let persona2 = {...persona1};

// persona2.nombre = "emiliano";
// console.log(persona1);
// console.log(persona2);

// const nombres1 = ["Juan", "Julieta"];
// const nombres2 = ["Carlos", "Mariela"];

// const nombres = [...nombres1, ...nombres2];
// console.log(nombres);

// const usuario1 = {
//   nombre: "Juan",
//   edad: 24,
//   curso: "Javascript",
// };

// const usuario2 = {
//   ...usuario1,
//   edad: 30,
//   direccion: "AV",
// };

// console.log(usuario1);
// console.log(usuario2);

// function sumar(...numeros) {
//   console.log(numeros.reduce((acum, item) => acum + item, 0));
// }

// sumar(5, 6, 7, 9, 54, 3);
// sumar(5, 6, 7);

//Repaso
/* 
if(condicion){
  codigo cuando la condicion es verdadera
}

if(condicion){
  codigo cuando la condicion es verdadera
}else{
  codigo cuando la condicion es falsa
}

if(condicion1){
  codigo cuando la condicion1 es verdadera
}else if(condicion2){
  codigo cuando la condicion1 es verdadera
}else{
  codigo cuando la condicion es falsa
}
*/

/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

/* 
funciones

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

const nombreFuncion = (parm1, parm2, ..., parmn) => {
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

/* 
class NombreClase{
  constructor(parm1, ..., parmn){
    this.clave1 = parm1;
    .
    .
    .
    this.claven = parmn;
  }

  metodo1(){
    codigo a ejecutar por el metodo1
  }

  metodo2(){
    codigo a ejecutar por el metodo2
  }
}

const instancia1 = new NombreClase(valor1, ..., valorn);
*/
/////////////////////////////////////////////////////////////////
// class Producto {
//   constructor(id, nombre, precio) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// const productos = [
//   new Producto(1, "camisa", 1000),
//   new Producto(2, "media", 700),
//   new Producto(3, "gorra", 350),
//   new Producto(4, "pantalon", 1510),
// ];

// const agregar = (id) => {
//   const producto = productos.find((item) => item.id === id);

//   alert(`
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: $${producto.precio}
//   `);
// };

// //mostramos los productos en el dom
// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <h2>Nombre: ${item.nombre}</h2>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//     <hr />
//   `;
//   document.body.append(div);

//   //me traigo el boton personalizado para cada producto por su id
//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregar(item.id));
// });

///////////////////////////////////////////////////////////////////////////
//arreglo para guardar los productos creados
const productos = [];

//contenedor para mostrar los productos creados
let contenedor = document.getElementById("contenedor");

//funcion para mostrar los productos creados en el DOM
const renderizar = (productos) => {
  contenedor.innerHTML = "";
  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombres: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    contenedor.append(div);
  });
};

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //evitamos la recarga del formulario

  //traemos los inputs del formulario (HTMLCollection)
  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let precio = inputs[1].value;

  //id: Math.max(...productos.map(item => item.id)) + 1
  productos.push({ id: productos.length + 1, nombre, precio });
  renderizar(productos);
});
