//LLAMAR AL CONSTRUCTOR PADRE// para ahorrar tiempo y no tener que estar copiando y pegando

function Entidad(entidad) {
    this.id = Math.random().toString('20');
    this.entidad = entidad;
}

function User() {
    Entidad.call(this, 'user');
    this.attres = {
        name: 'Chanchito',
        email: 'vhanchito@gamail.com',
    }
}

const u = new User();
console.log(u);