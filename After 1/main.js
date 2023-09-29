// let numero1 = Number(prompt("Ingrese un número"));
// let suma = numero1;

// for (let i = 0; i < 10; i++) {
//   let numero2 = Number(prompt("Ingrese el número a sumar"));
//   suma += numero2; // suma = suma + numero1 + numero2

//   alert(suma);
// }

/* 
numero1 = 5
suma = 0, 6, 12, 8
i = 0, 1, 2
numero2 = 1, 7, 3
*/

// let texto = prompt("Ingrese un texto");
// let resultado = texto;
// let textoConcatenar;

// while (textoConcatenar != "ESC") {
//   textoConcatenar = prompt("Ingrese un texto para concatenar");
//   resultado = resultado + " " + textoConcatenar;
//   alert(resultado);
// }

let primo = true;
let numero = 5;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    primo = false;
    break;
  }
}

if (primo) {
  console.log("El número es primo");
} else {
  console.log("El número no es primo");
}

/* 
primo = true
numero = 6
i = 2

*/