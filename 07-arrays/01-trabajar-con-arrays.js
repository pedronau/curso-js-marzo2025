//AGREGAR ELEMENTOS A UN ARRAY

const letras = ['a', 'b'];

letras.push('c', 'r'); //agregar al final
letras.unshift('d', 'u'); //agregar al comienzo
//si queremos por ejemplo agregar un elemento detras de la letra 'a': 
letras.splice(3, 0, 1, 2); //(el 3 es la posicion en la que lo agregamos, el 0 lo que queremos borrar y a partir de ahi lo que agregamos)
console.log(letras);

//ELIMINAR ELEMENTOS DE UN ARRAY

