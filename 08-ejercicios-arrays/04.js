//construir 2 funciones que devuelvan un numero, el numero de cuantos hay premium y otra de cuantos hay mayores


const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function cuantosPremium(usrs) {
 return usrs.filter(u => u.plan === 'premium').length;
}

function cuantosMayores(usrs) {
    return usrs.filter(u => u.edad > 17).length;
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));

//el tio lo ha hecho con reduce y le va sumando al acumulador. el lo ha hecho mal yo diria