let promesa1 = new Promise((res, rej) => {
    res(12);
});

let promesa2 = new Promise((res, rej) => {
    rej(15);
});

promesa1.then(valor => {
    if(valor > 10) {
        return promesa2; 
    }
}).then(valor2 => {
    return valor2;
});

//que es lo que ocurriria si ocurre un error dentro de un llamado de alguna de estas promesas (rej promesa2)
//pues da un error en chrome

//para que no ocurra tenemos que añadirle un catch, que solo se ejecuta si alguna de las promesas llega a ser rechazada

promesa1.then(valor => {
    if(valor > 10) {
        return promesa2; 
    }
}).then(valor2 => {
    return valor2;
}).catch(e => console.log(e)); //imprime el error (nos sale un 15 en al consola de chrome)

/**en este caso solo nos imprime el error si este se ejecuta en la promesa 2, si se
 * ejecuta en la promesa 1 no nos diria nada de ningun error. hay que implementarle la lógica también
 * 
 * cada vez que una cadena sea rechazada se salta el resto de promesas y llega directamente al catch
 * 
 * ademas del .catch hay otro que se llama .finally que se ejecuta siempre, hayan sido las promesas aceptadas o rechazadas
 */

promesa1.then(valor => {
    if(valor > 10) {
        return promesa2; 
    }
}).then(valor2 => {
    return valor2;
}).catch(e => console.log(e)).finally(() => console.log('estamos en finally'));

/**esto se utiliza mientras hacemos una carga de un servidor o algo */