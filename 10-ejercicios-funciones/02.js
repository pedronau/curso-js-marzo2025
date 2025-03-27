const obj = {
    nombre: 'Nicolas',
}

function extender(usuario) {
    return {
        nombre: usuario.nombre,
        login() {
            console.log('logenado usuario ' + usuario.nombre);
        },
        logout() {},
    }
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();

//lo he hecho!!!!!