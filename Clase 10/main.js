//EVENTOS
// let boton = document.getElementById("click");

// const saludar = () => {
//   console.log("Hola click");
// };

// Primera forma para definir un evento
// el addEventListener recibe el nombre del evento y la DECLARACIÓN de una funcion
// boton.addEventListener("click", saludar);

//Segunda forma para definir un evento
// boton.onclick = saludar;

// let evento = prompt("Ingrese el evento");

// boton.addEventListener(evento, saludar);

// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// let nombre = prompt("Ingrese el nombre");

// boton.addEventListener("click", () => saludar(nombre));

//EVENTOS MAS COMUNES
//MOUSE

// let boton = document.getElementById("click");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// // boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("click");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "verde";
// });

//TECLADO
// let nombre = document.getElementById("nombre");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "amarillo";
//   } else if (e.key === "s") {
//     saludo.className = "rojo";
//   } else if (e.key === "d") {
//     saludo.className = "azul";
//   } else if (e.key === "f") {
//     saludo.className = "verde";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  // console.log(inputs[0].value);
  // console.log(inputs[1].value);

  if (!inputs[0].value.includes("@")) {
    alert("El campo debe ser un email");
    inputs[0].value = "";
  }
});
