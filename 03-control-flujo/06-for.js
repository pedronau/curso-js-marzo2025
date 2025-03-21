//el for tambien hace loops pero lo hace todo en una sola linea

// for (inicializacion; comparacion; terminariteracion) {
// }

for (let i = 2;i < 10; i++) {
    if (i % 2 == 0) {
        console.log('Número par', i);
    }
}

// for of: es otro loop. por ejemplo queremos iterar elementos de un array:

let animales = ['Cerdo', 'Dragón', 'Perrito'];

for (let animal of animales) {
    console.log(animal);
}

// for in: es otro loop. por ejemplo si queremos iterar las propiedades de un objeto

let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
}

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}