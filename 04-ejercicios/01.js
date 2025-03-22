function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);

/**este ejercicio se puede resolver mucho mas rapido utilizando el operador ternario: */

// function cualEsMayor(a, b) {
//     return (a > b) ? a : b;
// }