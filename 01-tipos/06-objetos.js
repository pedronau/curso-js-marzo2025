/**Personaje de TV (3 variables) */

let nombre = 'Tanjiro';
let anime = 'Demon slayer';
let edad = 16;

//esto es un objeto

let personaje = {
    nombre: 'Tanjiro',
    anime: 'Demon slayer',
    edad: 16,
};

//para acceder a las propiedades del objeto:

console.log(personaje);
console.log(personaje.anime);
console.log(personaje['anime']);

//para modificar una propiedad:

personaje.edad = 13;
personaje['edad'] = 16;

//borrar propiedad de un objeto

delete personaje.anime;