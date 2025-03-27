//crear una funcion constructora. vamos a cambiar el contexto de this para que cuando

const obj = {
    nombre: 'Nicolas',
}

function Extender() {
    this.login = function () {
        console.log('logeando usuario ' + this.nombre);
    };
    this.logout = function () {
        console.log('cerrando sesion ' + this.nombre);
    };
}

Extender.call(obj);

console.log(obj);

obj.login();
obj.logout();

//lo he hecho!!!!!!