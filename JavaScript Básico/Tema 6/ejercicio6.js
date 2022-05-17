//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista_compra = ["agua", "pan", "cafe", "te", "helado"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol");

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop();

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const pelis_fav = [
  {titulo: "pelicula1", director: "director1", fecha: new Date(2000, 1, 28)},
  {titulo: "pelicula2", director: "director2", fecha: new Date(2015, 0, 31)},
  {titulo: "pelicula3", director: "director3", fecha: new Date(2021, 11, 31)}
];

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelis2 = pelis_fav.filter (valor => valor.fecha > new Date(2010, 0, 1));
//0: {titulo: 'pelicula2', director: 'director2', fecha: Sat Jan 31 2015 00:00:00 GMT+0000 (hora estándar de Europa occidental)}
//1: {titulo: 'pelicula3', director: 'director3', fecha: Fri Dec 31 2021 00:00:00 GMT+0000 (hora estándar de Europa occidental)}


//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = pelis_fav.map (valor => {
    return valor.director});   //['director1', 'director2', 'director3']

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = pelis_fav.map (valor => {
    return valor.titulo});   //['pelicula1', 'pelicula2', 'pelicula3']

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const dir_tit = directores.concat(titulos);   //['director1', 'director2', 'director3', 'pelicula1', 'pelicula2', 'pelicula3']

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const dir_tit2 = [...directores, ...titulos];   //['director1', 'director2', 'director3', 'pelicula1', 'pelicula2', 'pelicula3']
