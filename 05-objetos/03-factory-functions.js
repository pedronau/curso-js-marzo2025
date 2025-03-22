//las factory functions nos permiten crear objetos de una forma sencilla y no repetitiva

let user = { 
    id: 1,
    email: 'pedro@holamundo.es',
    name: 'Pedro',
    activo: true,
    recuperarClave: function () { 
        console.log('Recuperando clave...');
    }, 
}

let user1 = { 
    id: 2,
    email: 'juan@holamundo.es',
    name: 'Juan',
    activo: false,
    recuperarClave: function () { 
        console.log('Recuperando clave...');
    }, 
}

//para crear un objeto usuario nuevo.... en vez de hacer copia pega...

function crearUsuario(name, email) {
    return { 
        email, //si tienes un nombre igual que una propiedad lo puedes dejar asi en vez de email: email, (como esta hecho el name)
        name: name,
        activo: true,
        recuperarClave: function () { 
            console.log('Recuperando clave...');
        },
    }
}

let user2 = crearUsuario('Pedro', 'pedro@gemail.com');
let user3 = crearUsuario('Felipe', 'felipe@gmail.com');