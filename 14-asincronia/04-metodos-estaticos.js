let promesa1 = new Promise((res, rej) => {
    res(5);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => {
    if(valor > 10) {
        return promesa2; 
    }
    return Promise.reject('Valor menor que 10'); //retorna una promesa ya rechazada. asi rompemos la cadena de promesas. inmediatamente saltamos al cath
    return Promise.resolve(555); //mas o menos lo mismo que lo de arriba pero con resolve
}).then(valor2 => {
    console.log('segunda promesa', valor2);
    return valor2;
}).catch(e => console.log(e)).finally(() => console.log('estamos en finally'));