//crear un archivo JavaScript donde crees una variable la cual contenga una cadena de texto
let cadena = "primera cadena";

//Después crearás una función, dentro de ella crearas una variable que se llame igual que la primera que has creado
//y le asignaras una cadena de texto diferente a la primera y mostrarás la variable por consola.
function miFuncion() {
  let cadena = "segunda cadena";
  console.log (cadena);
}

//Por último, fuera de la función tendrás que realizar la llamada a la función y mostrarás por consola la primera variable que has creado.
miFuncion();
console.log (cadena);
