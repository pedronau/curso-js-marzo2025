// funcion constructora de funciones
// queremos crear un objeto asi: { id:a, recuperarClave: function(){} } (es un usuario)

function Usuario() {        //por convencion estas funciones se ponen con la primera en mayuscula
    this.id = 1;
    this.recuperarClave = function () {
        console.log('Recuperando clave...');
    }
}

/**si nosotros retornamos esta funcion asi como esta no nos devuelve nada y lo que queremos es que nos cree un nuevo usuario
 * para que nos devuelva el usuario que queremos hay que hacer:
 */

let usuario = new Usuario();
console.log(usuario);

/**SI NO ENTIENDO LA PALABRA THIS VER ESTE VIDEO */