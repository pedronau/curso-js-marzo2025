//crear un constructor que me devuelva un objeto con un name que sea un parametro y un id que sea generacion aleatoria

function Usuario(name) {
    this.name = name;
    this.id = Math.random();
}

let user = new Usuario('Pedro');
console.log(user);

//lo he hecho bien