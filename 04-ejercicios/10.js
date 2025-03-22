/**crear un array de longitud N y que sus elementos sean numeros desde 1 hasta N */

let longitud = 7;

function crearArray(n) {
    let arrayCreado = [];
    for (let i = 1; i <= n; i++) {
       arrayCreado.push(i); 
    }
    return arrayCreado;
}

let resultado = crearArray(longitud);
console.log(resultado);

//lo he hecho bien