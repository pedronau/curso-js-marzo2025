// while (condicion) {
//     expresion 
// }

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

console.log('Fuera del loop while'); //el codigo se ejecuta cuando salimos del while

//vamos a sacar numeros pares

while (i < 10) {
    if (i % 2 == 0) {
        console.log('Número par:', i);
    }
    i++;
}

console.log('Fuera del loop while');

//hay que tener cuidado para que no se produzcan loops infinitos

//loop do while (evalua la condicion justo al final del loop en vez de al principio)

do {expresion} while (condicion);

do {} while (i < 10);