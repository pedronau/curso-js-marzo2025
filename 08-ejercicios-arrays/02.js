//dividir un array por tipos

const miArray = [
    'Hola',
    12,
    'Mundo',
    {},
    { id: 15 },
    ['lala'],
];

function dividePorTipo(arr) {
    let filtered = { 
        string: arr.filter(el => typeof el === 'string'),
        number: arr.filter(el => typeof el === 'number'),
        object: arr.filter(el => typeof el === 'object'),
     }
    return filtered;
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);

//lo he hecho!!!
//el tio lo hace igual pero mas directo:

function dividePorTipo2(arr) {
    return { 
        string: arr.filter(el => typeof el === 'string'),
        number: arr.filter(el => typeof el === 'number'),
        object: arr.filter(el => typeof el === 'object'),
     };
}