//

const miArray = [
    'Hola',
    12,
    true,
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
        boolean: arr.filter(el => typeof el === 'boolean')
     }
    return filtered;
}

console.log(dividePorTipo(miArray));

//yo lo he hecho igual que el ejercicio 2 pero el tio ha hecho un reduce con el typeof