/* 
Boolean(0) => false
Boolean(1) => true
Boolean("") => false
Boolean("andrees") => true

= asignación
== comparación solo de valor
=== comparación tanto de valor como de tipo (recomendable)
*/

/* 
estructura del condicional if

if(condicion o algo que representa truo o false){
  código a ejecutar cuando la condición o el valor sea verdadero
}
*/

// if (false) {
//   console.log("Entramos");
// }

// console.log("finalización del proceso");

// if ("andres") {
//   console.log("Entramos");
// }

// console.log("finalización del proceso");

// if (-1) {
//   console.log("Entramos");
// }

// console.log("finalización del proceso");

// let edad = 10;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// }

/* 
estructura del if else

if(condicion){
  código a ejecutar cuando la condición es verdadera
}else{
  código a ejecutar cuando la condición no es verdadera
}
*/

// let edad = 10;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("No eres mayor de edad");
// }

// let respuesta = prompt("Terminaste la tarea?").toLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 sea verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones sean verdaderas
}
*/

// let edad = Number(prompt("Ingrese su edad"));

// if (edad < 14) {
//   alert("No puedes entrar a la fiesta");
// } else if (edad < 18) {
//   alert("Puedes entrar a la fiesta con un adulto responsable");
// } else {
//   alert("Puedes entrar a la fiesta");
// }

/* 
valor1 && valor2 es verdadera cuando ambos valores son verdaderos, en caso contrario es falso
valor1 || valor2 es verdadera cuando al menos uno de los dos valores es verdadero
*/

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// if (nombre != "" && apellido != "") {
//   alert(`Tu nombre es ${nombre} ${apellido}`);
// } else {
//   alert("Datos requeridos");
// }

// let saludo = "hola";
// let nombre = "juan";

// console.log(saludo + " " + nombre);
// console.log(`${saludo} ${nombre}`);

// let numero = 5;

// console.log(`numero + 5`);

// let nombre = prompt("Ingrese el nombre");

// if (nombre === "ANA" || nombre === "ana") {
//   alert("Hola ANA");
// } else {
//   alert("No eres ana");
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre != "" && (nombre === "EMA" || nombre === "ema")) {
//   alert("Hola ema");
// } else {
//   alert("Datos incorrectos");
// }

let numero = "hola";

if(isNaN(numero)){
  console.log("bien");
}else{
  console.log("mal es un numero");
}