//- Una variable que contenga tu altura en centímetros (entero)
const altura_cms = 177;

//- Una variable que contenga tu altura en metros (número de coma flotante)
const altura_mts = 1.77;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
const peso_kgs = 72.8;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
const alto_redondeado1 = Math.round(altura_mts);
const alto_redondeado2 = Math.ceil(altura_mts);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const peso_redondeado1 = Math.trunc(peso_kgs);
const peso_redondeado2 = Math.floor(peso_kgs);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const variable = Number("Number.MAX_VALUE+1") === Number.MAX_VALUE; //false
const variable = "Number.MAX_VALUE+1" === Number.MAX_VALUE; //false
const variable = Number(Number.MAX_VALUE+1) === Number.MAX_VALUE; //true
const variable = Number.MAX_VALUE+1 === Number.MAX_VALUE; //true
