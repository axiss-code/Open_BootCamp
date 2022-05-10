//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
//Factorial de 10! => 10x9x8x7x6x5x4x3x2x1 = 3628800
let numero = 10;
let factorial = 1;
for (let i = numero; i > 0; i--) {
    factorial = factorial * i;
}
console.log("El factorial de "+numero+"! es "+factorial);
