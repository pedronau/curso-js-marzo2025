//this hace referencia a un objeto (al objeto que estamos utilizando)
//pero si this no se encuentra dentro de un objeto y se encuentra dentro de una fumcion, this hacer referencia al objeto window
//pero si usamos la palabra reservada de new hace referencia al objeto que será creado

//DENTRO DE UN OBJETO//

const user = {
    name: 'Nicolas',
    login() {
        console.log(this);
    }
}

user.login(); //me imprime el objeto user

//DENTRO DE UNA FUNCION//

function log() {
    console.log(this);
}

log(); //esto imprime el objeto window

function Log(mensaje) { //empieza con mayuscula porque hace referencia a una funcion constructora
    this.mensaje = mensaje;
    console.log(this); //hace referencia al objeto window (la imprimo en linea 31 para que se vea) A NO SER que llamemos a la funcion con new
}

const l = new Log('Hola mundo'); //cuando usamos el new hace referencia al objeto que va a crear con la funcion constructora. esto imprime el objeto creado

Log('paco'); //imprime objeto window

/**cuando usamos la palabra reservada de new ocurren 4 cosas:
 * 1) se crea un objeto literal
 * 2) se vincula este objeto a this
 * 3) se vincula el prototipo
 * 4) si no retorna nada, entonces retorna this
*/