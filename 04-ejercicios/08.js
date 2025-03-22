//crear un algoritmo que tome un array de objetos
//y debuelva un array de pares

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}]

/**lo que queremos es obtener esto:*/

let paresEjemplo = [
    [1, {id: 1, name: 'Nicolas'}],
    [2, {id: 2, name: 'Felipe'}],
    [3, {id: 3, name: 'Chanchito'}],
]

function toPairs(arr) {
    let pares = [];

    for (idx in arr) {
        let elemento = arr[idx];
        pares[idx] = [elemento.id, elemento];
    }

    return pares;
}

let resultado = toPairs(array);
console.log(resultado);

/**ni idea de como lo ha hecho
 * este ejercicio no me ha salido bien
 */