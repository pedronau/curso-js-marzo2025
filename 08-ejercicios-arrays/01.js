//construir una funcion que recibe un array que es un listado de numeros (negativos y positivos) y nos tiene que devolver los numeros absolutos

function paraAbsoluto(arr) {
    let mapped = arr.map(el => Math.abs(el));
    return mapped;
}

const ns = [-2, 3, 5, -15];

const absoluto = paraAbsoluto(ns);
console.log(absoluto);

//lo he hecho bien!!!!