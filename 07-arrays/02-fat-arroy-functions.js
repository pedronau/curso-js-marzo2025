//FAT ARROW FUNCTIONS//

function hola() {
    return 'Hola Mundo';
}

const resultado = hola();

//podemos hacer exactamente lo mismo que esto pero de otra forma

const hola2 = () => { //estas funciones son anonimas
    return 'Hola mundo'
}

//estas funciones tambien tienen un return implicito porque esto tambien lo podriamos escribir asi:
//pero esto del return implicito solo sirve con funciones que tengan una linea de codigo, si no hay que escribirlas como arriba
const hola3 = () => 'Hola mundo'; //tambien se les pueden meter parametros