//para poder salir del loop o saltarnos una iteracion

let i = 0;
while (i<6) {
    i++;
    if (i === 2) {
        continue; //esto lo que hace es: si i es igual a 2 vuelve a evaluar la condicion desde el principio. por lo que si hacemos console log el 2 se lo salta
    } if (i === 4) {
        break; //cuando consigue la condicion (i = 4) se para el loop. por lo que si consol log esto solo sale 1 y 3
    }
    console.log(i);
}