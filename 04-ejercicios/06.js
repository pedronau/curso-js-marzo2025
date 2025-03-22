//crear algoritmo que devuelva los numeros positivos de un array

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let positivo = [];
    
    for (numero of arr) {
        if (numero > 0) {
            positivo.push(numero);
        }
    }

    return positivo;
}

let resultado = cuantosPositivos(array);
console.log(resultado);

//lo he conseguido !!!!!!!!
//solucion del tio: vaya me he equivocado y el ejercicio pedia la CANTIDAD de numeros positivos
//y no devolver los numeros positivos... pero bueno estoy contento con mi solucion porque esta bien

function cuantosPositivosTio(arr) {
    let cantidad = 0;
    for (elemento of arr) {
        if (elemento > 0) {
            cantidad++;
        }
    }
    return cantidad;
}