/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  código a repetir
}
*/

//i++     i = i + 1

// for(let i = 5; i <= 100; i++){
//   console.log(i);
// }

// let numero = Number(prompt("Ingrese el número"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   alert(`${numero} * ${i} = ${resultado}`);
// }

// console.log(numero * 1);
// console.log(numero * 2);
// console.log(numero * 3);
// console.log(numero * 4);
// console.log(numero * 5);
// console.log(numero * 6);
// console.log(numero * 7);
// console.log(numero * 8);
// console.log(numero * 9);
// console.log(numero * 10);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");

//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("Turnos terminados, intente mañana");

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }
// let numero;

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     numero = i;
//     continue;
//   }

//   console.log(i);
// }

// console.log(numero);

/* 
estructura del while

while(condicion){
  código a ejecutar siempre que la condición sea verdadera
}
*/

// let repetir = true;  BUCLE INFINITO

// while (repetir) {
//   console.log("Entramos");
// }

// let entrada = prompt("Ingrese el usuario");

// while (entrada != "pepito") {
//   alert("Usuario incorrecto");

//   entrada = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
estructura del do while

do{
  código a repetir por primera vez y luego siempre que la condición sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("Entramos");
// }

// do {
//   console.log("Entramos");
// } while (repetir);

// let entrada;

// do {
//   entrada = prompt("Ingrese el usuario");

// } while (entrada != "pepito");

// let numero = 0;

// do {
//   numero = prompt("ingrese un número");
// } while (parseInt(numero));

/* 
estructura switch

switch(valor){
  case valor1:
    código a ejecutar cuando el valor === valor1
    break;

  case valor2:
    código a ejecutar cuando el valor === valor2
    break;
  
    .
    .
    .

  default:
    código a ejecutar cuando el valor no coincide con ninguno de los valores anteriores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de Argentina");
//     break;

//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   default:
//     console.log("Moneda no reconocida");
//     break;
// }

// let opcion = prompt(`
//   Ingrese la opción requerida

//   1. Ropa Mujer
//   2. Ropa Hombre
// `);

// while (opcion != "salir") {
//   switch (opcion) {
//     case "1":
//       alert(`Tenemos camisas y pantalones`);
//       break;

//     case "2":
//       alert(`Tenemos zapatos y pantalones`);
//       break;

//     default:
//       alert("Opción incorrecta");
//       break;
//   }

//   opcion = prompt(`
//     Ingrese la opción requerida

//     1. Ropa Mujer
//     2. Ropa Hombre
//   `);
// }

let entrada = prompt("Ingrese un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("Hola ANA");
      break;

    case "JUAN":
      alert("Hola JUAN");
      break;

    default:
      alert("QUién eres?");
      break;
  }

  entrada = prompt("Ingrese un nombre");
}
