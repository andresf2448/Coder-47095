//MATH

//constantes
// console.log(Math.E);
// console.log(Math.PI);

//máximo y mínimo
// console.log(Math.max(1, 1, 324, 56, 56, 78, 98, 23, 2));
// console.log(Math.min(1, 1, 324, 56, 56, 78, 98, 23, 2));
// console.log(Math.max(1, 1, 324, 56, 56, Infinity, 78, 98, 23, 2));
// console.log(Math.min(1, 1, 324, 56, 56, 78, -Infinity, 98, 23, 2));

//redondeos
// console.log(Math.ceil(3.12)); //aproxima al entero más cercano hacia arriba
// console.log(Math.floor(3.8)); //aproxima al entero más cercano hacia abajo
// console.log(Math.round(3.7)); //aproxima al entero más cercano
// console.log(Math.round(3.4));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

//Números aleatorios entre cero y uno
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

//Números aleatorios entre cero y diez
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

//Math.round(Math.random() * amplitud + desplazamiento)
//Números aleatorios entre 7 y 20
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));

//Números aleatorios entre 27 y 53
// console.log(Math.round(Math.random() * 26 + 27));
// console.log(Math.round(Math.random() * 26 + 27));
// console.log(Math.round(Math.random() * 26 + 27));
// console.log(Math.round(Math.random() * 26 + 27));
// console.log(Math.round(Math.random() * 26 + 27));
// console.log(Math.round(Math.random() * 26 + 27));

//Números aleatorios entre 54 y 93
// console.log(Math.round(Math.random() * 39 + 54));
// console.log(Math.round(Math.random() * 39 + 54));
// console.log(Math.round(Math.random() * 39 + 54));
// console.log(Math.round(Math.random() * 39 + 54));
// console.log(Math.round(Math.random() * 39 + 54));
// console.log(Math.round(Math.random() * 39 + 54));

// const generarAleatorios = (amplitud, desplazamiento) => {
//   return Math.round(Math.random() * amplitud + desplazamiento);
// };

// console.log(generarAleatorios(5, 20));
// console.log(generarAleatorios(5, 20));
// console.log(generarAleatorios(5, 20));
// console.log(generarAleatorios(5, 20));
// console.log(generarAleatorios(5, 20));

//Dado un arreglo de nombres, generar una función que me devuelva nombres aleatorios, donde los nombres son los del arreglo

// const nombres = ["juanita", "pedrito", "pepito", "carlitos"];

// const generarAleatorios = (amplitud, desplazamiento) => {
// return Math.floor(Math.random() * amplitud + desplazamiento);
// };

// const generarNombre = () => {
// let index = Math.floor(Math.random() * nombres.length);
// let index = generarAleatorios(nombres.length, 0);

// return nombres[index];
// };

// console.log(`${generarNombre().toUpperCase()} eres el ganador`);

//DATE
//fecha actual
// console.log(Date());
// console.log(new Date(2023, 9, 18));
//crear fecha con parámetros
// const navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

//crear fecha con string
// const navidadUno = new Date("December 24, 2023 23:59:59");
// console.log(navidadUno);

//formatos
// const hoy = new Date("October 18, 2023");
// console.log(hoy.toDateString());
// console.log(hoy.toLocaleString());
// console.log(hoy.toLocaleDateString());
// console.log(hoy.toTimeString());

//datos específicos
// console.log(hoy.getFullYear()); //año
// console.log(hoy.getMonth()); //mes
// console.log(hoy.getDay()); //día de la semana (lunes es 1)
// console.log(hoy.getDate());

// const obtenerFecha = (ano, mes, dia) => {
//   return new Date(ano, mes - 1, dia);
// };

// console.log(obtenerFecha(2023, 10, 18));

const navidad = new Date("December 24, 2023");
const hoy = new Date("October 18, 2023");

console.log(navidad - hoy);

const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);
