/**
 * cogemos el mismo trozo de codigo de videos anteriores (archivo 02-cadena-de-promesas.js) pero 
 * lo modificamos para que pueda recibir argumentos:
 */

let promesa1 = (user) => new Promise((res, rej) => {
    res(user);
});

let promesa2 = (user) => new Promise((res, rej) => {
    res(user + ', Hola mundo');
});

promesa1('chanchito').then(user => promesa2(user)).then(dato => console.log(dato)); //hemos encadenado parametros. procesamiento en serie