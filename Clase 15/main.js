//setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("Hola");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("Final");

// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 5000);
// });

// for (const letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000)
// }

// for (const letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000)
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(z) {
//   let resultado = multiply(z, z);

//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setTimeout(funcion, tiempo);

// setInterval(() => {
//   console.log("Hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

//Promesas
// new Promise((resolve, reject) => {
//   //cuerpo de la promesa
// });

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // if (valor) {
//       //   resolve("promesa resuelta");
//       // } else {
//       //   reject("promesa rechazada");
//       // }

//       valor ? resolve(["andres", "juan", "joel"]) : reject("promesa rechazada");
//     }, 3000);
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("proceso finalizado"));

/////////////////////////////////////////////////////////////////////////////// SERVIDOR
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "media", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "zapato", precio: 1000 },
];

const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(BD);
      reject("Intente luego!");
    }, 3000);
  });
};
///////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////// FRONT
obtenerProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>ID: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>
      `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = `Error: ${error}`;

    document.body.append(div);
  });
///////////////////////////////////////////////////////////////////////////////
