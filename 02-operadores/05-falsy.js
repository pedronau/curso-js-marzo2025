/**
 * short-circuit
 * 
 * estos valores se les conoce como los FALSY
 * 
 * falso
 * false
 * 0
 * ''
 * null
 * undefined
 * NaN (luego veremos que es esto)
 */

let nombre = '';
let username = nombre || 'Anónimo';

console.log(username); //esto me devuelve anonimo porque la variable nombre esta vacia, pero si en vez de una string vacia ('') le pongo otro valor me devuelve eso otro

//ejecutar funciones solo si una funcion anterior devuelve datos:

function fun1() {
    console.log('soy funcion 1');
    return true;
}

function fun2() {
    console.log('Soy funcion 2');
    return true;
}

let x = fun1() && fun2();

/**
 * solo se ejecuta la variable x (las dos funciones) si la primera funcion devuelve datos (es true)
 */