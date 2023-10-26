/* 
estructura de una función

function nombreFuncion(){
  código a ejecutar por la función
}

para ejecutar la función hacemos

nombreFuncion();
*/

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// function pedirDatos() {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Su nombre es ${nombre}`);
// }

// pedirDatos();

/* 
estructura de una función con parámetros

function nombreFuncion(parm1, parm2, ..., parmn){
  código a ejecutar por la función
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("Hola", "ezequiel");
// saludar("Bienvenida", "camila");

// function enviarCorreo(correo) {
//   alert(`Correo enviado a ${correo}`);
// }

// let correo = prompt("Ingrese su correo para enviar la información");
// enviarCorreo(correo);

// function sumar(num1, num2) {
//   return `El resultado es ${num1 + num2}`;
// }

// let resultado = sumar(5, 6);
// console.log("resultado", resultado);

// function armar(material) {
//   return `muñeco armado con ${material}`;
// }

// function pintar(munecoArmado) {
//   return `${munecoArmado} y pintado`;
// }

// function ropaBodega(munecoPintado) {
//   console.log(`${munecoPintado} vestido y enviado a bodega`);
// }

// let armado = armar("madera");
// let pintado = pintar(armado);
// ropaBodega(pintado);

// function saludar() {
//   console.log("Hola");
//   return;
//   console.log("chao");
// }

// saludar();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operación no identificada";
//       break;
//   }
// }

// let numeroUno = Number(prompt("Ingrese el número uno"));
// let numeroDos = Number(prompt("Ingrese el número dos"));

// let operacion = prompt("Ingrese la operación");

// let resultado = calculadora(numeroUno, numeroDos, operacion);

// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

//SCOPE
// let resultado;

// function sumar(numero1, numero2) {
//   resultado = numero1 + numero2;
// }

// sumar(5, 6);
// console.log(resultado);

// {
//   let nombre = "pepito";
// }

// console.log(nombre);

// let nombre = "juan";

// function saludar() {
//   nombre = "pedro";
//   console.log(nombre);
// }

// saludar();
// console.log(nombre);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

//funciones anónimas
// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(5, 6));

//arrow function
// const suma = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(suma(5, 89));

//si no tiene parámetros se dejan los paréntesis vacíos
//si solo tiene un parámetro se pueden quitar los paréntesis
//si se quitan los corchetes y el return la arrow function hace un return implícito

// const saludar = () => {
//   return "hola";
// };

// console.log(saludar());

// const saludar = (nombre) => {
//   return `Hola ${nombre}`;
// };

// let nombre = prompt("ingrese el nombre");
// alert(saludar(nombre));

// const sumar = (num1, num2) => num1 + num2;

// console.log(sumar(5, 9));

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (precio) => precio * 0.21;

let precioProducto = Number(prompt("Ingrese el valor del producto"));
let descuento = Number(prompt("Ingrese el descuento"));

// precioProducto + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// = resta(suma(1000, iva(1000)), 100);
// = resta(suma(1000, 210), 100);
// = resta(1210, 100);
// = 1110
// console.log(nuevoPrecio);

function sumar(x, y) {
  return x + y;
}

const sumar = (x, y) => x + y;
