/**hasta ahora hemos resulto promesas en serie (encadenadas)
 * ahora vamos a procesar promesas en paralelo
 */

const p1 = Promise.resolve(3); //resuelve inmediatamente en un valor
const p2 = 42;
const p3 = new Promise((resolve, reject) => { //resuelve 'foo' despues de 1sec
    setTimeout(resolve, 1000, 'foo');
});

//ALL//

//esto que vamos a hacer ahroa recibe un array de todas las promesas que queremos resolver. espera a que se resuelvan todas y despues se ejecuta un .then, pero si alguna de ellas se rechaza el metodo que salta es el .catch
Promise.all([p1, p2, p3]).then(valores => console.log('all', valores)).catch(e => console.log('error en all', e));

//RACE//
//este metodo estatico espera a que se resuelva la primera promesa. tambien recibe un array. cuando se resuelva CUALQUIER promesa nos devuelve el valor
//entonces para poder caer en su catch lo primero resuelto debe de ser una promesa que se rechace

Promise.race([p1, p2, p3]).then(valor => console.log('race', valor)).catch(e => console.log('error en race', e));

//ANY//
//