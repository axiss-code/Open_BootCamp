//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
//Factorial de 10! => 10x9x8x7x6x5x4x3x2x1 = 3628800
let numero = 10;
let factorial = 1;
while (true) {
  if (numero === 0) {
    break;
  } else {
    factorial = factorial * numero;
    numero--;
  }
}
console.log("El factorial es "+factorial);

