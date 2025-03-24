//lo mismo que el ejercicio anterior pero con las factory functions en vez de con un constructor

function createUsuario(name) {
    return {
        name: name,
        id: Math.random(),
    }
}

let user = createUsuario('Pedrito');
console.log(user);

//lo he hecho bien