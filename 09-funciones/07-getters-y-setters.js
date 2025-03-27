//vamos a ver un posible problema que podriamos tener en nuestro codigo

//GET//

const usuario = {
    nombre: 'Chanchito',
    apellido: 'Feliz',
};
//si quisieramos ver su nombre completo pues tendriamos que acceder a cada una de las propiedades del objeto
console.log(`${usuario.nombre} ${usuario.apellido}`);

//existe otra alternativa a esto. podriamos crear un metodo dentro del objeto (metodo = funcion dentro de un objeto)
const usuario2 = {
    nombre: 'Chanchito',
    apellido: 'Feliz',
    nombreCompleto() {
        return `${usuario.nombre} ${usuario.apellido}`;
    }
};

//asi en vez de acceder a cada propiedad cada vez que queramos ver el nombre completo pues llamamos al metodo
console.log(usuario2.nombreCompleto()); //vease que para acceder al metodo hay que llamarlo como una funcion, pero si hacemos un GET...

const usuario3 = {
    nombre: 'Chanchito',
    apellido: 'Feliz',
    get nombreCompleto() {
        return `${usuario.nombre} ${usuario.apellido}`;
    }
};

console.log(usuario3.nombreCompleto); //si hacemos un GET podemos acceder directamente como si fuera una propiedad mas!!!!!!!

//SET//

//imaginemonos ahora que queremos cambiar el nombre del usuario. si intentamos hacerlo como siempre con las propiedades de los objetos no nos va a dejar:

usuario3.nombreCompleto = 'Paco Peña'; //no funciona

//lo que ocurre es que nos falta el SETTER para hacer esto. asi que...

const usuario4 = {
    nombre: 'Chanchito',
    apellido: 'Feliz',
    get nombreCompleto() {
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' '); //logica de dividir el string que le pasamos en 2 y asignar el 1º valor a nombre y el 2º a apellido
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

console.log(usuario4.nombreCompleto = 'Paco Peña'); //ahora ha cambiado el nombre de usuario al string que le hemos pasado