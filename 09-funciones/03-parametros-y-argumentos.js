function suma (a, b) {
    return a + b;
}

console.log(suma(1)); //esto debe devolver el resultado NaN (not a number) estamos intentado sumar 1 + undefined. si no le pasamos nada pues lo mismo

function suma2 (a, b) {
    console.log(arguments);
}

console.log(suma2(1, 2, 3, 4));