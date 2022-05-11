//- Una cadena de texto con tu Nombre
const nombre = "Mi Nombre";

//- Otra cadena de texto con tu Apellido
const apellido = "Mi Apellido";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = nombre.concat(" ", apellido)

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = estudiante.toUpperCase();

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase();

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const longitud = estudiante.length;

//- Una variable que contenga la primera letra del Nombre
const primeraLetra = nombre.charAt(0);
const inicial = nombre.at(0);

//- Otra variable que contenga la última letra del Apellido
const ultimaLetra = nombre.charAt(nombre.length-1);
const final = nombre.substring(nombre.length-1);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
const sinEspacions = estudiante.replace(/ /g,"");

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const existe = estudiante.includes(nombre);
