//hay una funcion superior (Entidad) que tiene las propiedades id y guardar() por ejemplo
//para que otros objetos hereden sus métodos y propiedades se hace:

class usuario extends Entidad {} //esto no se usa en JS dice???

//es algo que ver con prototipos...

//cuando trabajamos con lases las propiedades se copian
//cuando trabajamos con prototipos se vinculan unos a otros y se buscan las propiedades

function User() {
    this.name = 'Hola mundo';
}

function Product() {
    this.name = 'Producto';
}

function Entidad() {}
Entidad.prototype.save = function() {
    console.log('Guardando', this.name);
}
Entidad.prototype.validate = function() {
    console.log('Validando', this.name);
}  
//video sobre como implementar herencia. es complejo. volver a ver VIDEO 124

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
console.log(user);

//no me estoy enterando de mucho