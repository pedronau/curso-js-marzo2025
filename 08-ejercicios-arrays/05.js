//esta funcion tiene que devolver el objeto que sea el que tenga mayor edad (en este caso fernanda)

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function obtenerMayor(arr) {
    return arr.sort((a, b) => b.edad - a.edad)[0];
}

console.log(obtenerMayor(usuarios));

//lo he hecho!!. el tio lo hace con un for