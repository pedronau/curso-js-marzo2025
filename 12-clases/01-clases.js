//en JS no existen las clases per sé. 
//vamos a hacer lo que hemos estado haciendo hasta ahora:
function User(name) {
    this.name = name;
    this.instancia = function() {}
}

User.prototype.login = function() {
        console.log('Hola mundo!');
}

const u = new User('Chanchito');

//ahora vamos a reescribir esto de arriba pero usando la palabra reservada de class

//el constructor es un método que tienen absolutamente todas las clases, este contiene los métodos y propuiedades que le vamos a asignar al objeto que queremos construir

class User2 {
    constructor(name) { //dentro del objeto
        this.name = name;
        this.instancia = function() {}
    }

    activo = true; //dentro del objeto

    logout = () => { //dentro del objeto
        console.log('Logout...');
    }

    login() { //dentro del prototipo
        console.log('Hola mundo!!');
    }
}

const u2 = new User2('Chanchito'); 
