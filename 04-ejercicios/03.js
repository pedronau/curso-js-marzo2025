function getByIdx(arr, idx) {
    return arr[idx];
}

let resultado = getByIdx([1, 2], 1)
console.log(resultado);

// ejercicio del tio:

function getByIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';
    }

    return arr[idx];
}