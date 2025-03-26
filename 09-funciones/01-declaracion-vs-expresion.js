//DECLARACIÓN DE FUNCIONES// function declaration

//funcion nombrada (named function)
function nombreFuncion() {
    console.log('Soy una función.');
}

//funcion anónima (anonimous function) se ponen dentro de cosas como metodos (pone error porque para ejecutarse necesita un nombre) LO PONEMOS EN COMENTADO PARA QUE NO SE QUEJE
// function () {
//     console.log('Función anónima.');
// }

//EXPRESIÓN DE FUNCIONES// function expression

let ejemplo = function () { //expresión de función anónima
    console.log('Ejemplo 1.');
}

let ejemplo2 = function nombreFunción2() { //expresión de función nombrada
    console.log('Ejemplo 2.');
}

let ejemplo3 = () => { //arrow function. siempre van a ser anónimas
    console.log('Ejemplo 3.');
}