let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let resultado = [Math.min(...arr), Math.max(...arr)];
    return resultado;
}

let numeros = getMenorMayor(array);
console.log(numeros);

//este resultado que he puesto no vale porque he consultado una documentacion que
//tenia yo de js y se supone que hay que hacerlo con los recursos que te da
//este curso por lo que he hecho trampa. voy a poner la solucion del tio:

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);

/**el tio dice que esto suele ser pregunta de entrevista tecnica asi que OJO!!! */