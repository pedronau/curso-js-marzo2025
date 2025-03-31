//LAS PROMESAS PUEDEN SER ENCADENADAS. es lo que se conoce como cadena de promesas

let promesa1 = new Promise((res, rej) => {
    res(12);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => { //then te devuelve una promesa por lo que puedes volver a pasarle then. 
    console.log(valor);
}).then(() => {
    console.log('la segunda promesa');
});

//estas promesas se resuelven pero con ningun valor. pero podemos retornar algo en la primera parte de la cadena y entonces lo toma la segunda parte como valor

promesa1.then(valor => { //then te devuelve una promesa por lo que puedes volver a pasarle then. 
    return valor + 18;
}).then(valor2 => {
    console.log('la segunda promesa', valor2);
});

promesa1.then(valor => {
    if(valor > 10) {
        return promesa2; //si resuelve se le injecta a valor2 (aqui pero mas abajo)
    }
}).then(valor2 => {
    console.log('la segunda promesa', valor2);
});

promesa1.then(valor => {
    if(valor > 10) {
        return promesa2; 
    }
}).then(valor2 => {
    return valor2;
});