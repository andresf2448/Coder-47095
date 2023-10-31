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