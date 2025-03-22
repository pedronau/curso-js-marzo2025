// let email = 'pedro@holamundo.es';
// let name = 'Pedro';
// let direccion = {
//     calle: 'Cazalla',
//     numero: 1,
// }

//estas variables estan relacionadas, asi que lo mejor sera agruparlas en un objeto para que sea mas facil trabajar

let user = { //esto es un objeto
    email: 'pedro@holamundo.es',
    name: 'Pedro',
    direccion: { //se pueden colocar objetos dentro de objetos
        calle: 'Cazalla',
        numero: 1,
    },
    activo: true,
    recuperarClave: function () { //una propiedad de un objeto puede ser una funcion (anonima en este caso)
        console.log('Recuperando clave...');
    }, 
}