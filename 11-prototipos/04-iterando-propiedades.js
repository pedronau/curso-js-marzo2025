//vamos a ver como podemos iterar todas las propiedades que tiene un objeto y tambien su prototipo

function User() {
    this.name = 'Hola mundo';
}

User.prototype.login = function() {
    console.log('Iniciando sesión', this.name);
}

let user = new User();

//si queremos iterar todas las propiedades, incluyendo las del prototipo:

for(let prop in user)
    console.log(prop);

//que pasaria si nosotros queremos imprimir solo las propiedades de la funcion constructora o solo del prototipo???

console.log(Object.keys(user)); // ['name'];