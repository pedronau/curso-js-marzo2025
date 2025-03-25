//AGREGAR ELEMENTOS A UN ARRAY//

const letras = ['a', 'b'];

letras.push('c', 'r'); //agregar al final
letras.unshift('d', 'u'); //agregar al comienzo
//si queremos por ejemplo agregar un elemento detras de la letra 'a': 
letras.splice(3, 0, 1, 2); //(el 3 es la posicion en la que lo agregamos, el 0 lo que queremos borrar y a partir de ahi lo que agregamos)
console.log(letras);

//ELIMINAR ELEMENTOS DE UN ARRAY//

const letras2 = ['a', 'b', 'c', 'd'];

letras2.pop(); //saca el ultimo elemento del array y se lo asigna a una variable:
const letrasFinal = letras2.pop();
letras2.shift(); //lo mismo que el anterior pero con el primer elemento del array
const letrasFinal2 = letras2.shift();
letras2.splice(1, 1); //lo mismo que en el apartado anterior

//BUSCAR PRIMITIVOS EN UN ARRAY//

const letras3 = ['a', 'b', 'c', 'd'];

console.log(letras3.indexOf('c')); //devuelve el numero que ocupa el elemento que le pases (en este caso con la c devolveria 2) y si no tiene nada devuelve -1. si hay 2 elementos iguales te devuelve el indice del primero
console.log(letras3.lastIndexOf('c')); //si hay 2 iguales te devuelve el ultimo en vex del de arriba que te devuelve el 
console.log(letras3.includes('c')); //si incluye el elemento devuelve true y si no false
//a la hroa de buscar datos primitivos el tipo de dato es importante, no es lo mismo buscar 1 que '1'

//BUSCAR VALORES DE REFERENCIA (EN VEZ DE PRIMITIVOS) EN UN ARRAY// video 78

const usuarios = [
    { id: 1, name: 'Chanchito'},
    { id: 1, name: 'Felipe'},
    { id: 2, name: 'Feliz'},
]; 

const resultado2 = usuarios.find(function(usuario) {
    return usuario.id === 1; 
});

//a las funciones que le pasamos como argumentos o parametros otras funciones o metodos les llamamos predicate (significa funcion que devuelve true o false)
//vamos a volver a escribirlo pero con arrow function

const restultado3 = usuarios.find(usuario => usuario.id === 1); //cuando solo tiene un parametro, en una arrow function se puede poner asi sin el function(...). esto devuelve un OBJETO
const restultado4 = usuarios.findIndex(usuario => usuario.id === 1); //esto devuelve el indice donde esta el objeto

//VACIANDO ARRAYS//

let arr = [1, 2];
arr = []; //lo podemos asignar a un array vacio
arr.length = 0; //lo hacemos de longitud 0
arr.splice(0, arr.length); //lo vaciamos con splice

//COMBINANDO ARRAYS//

let arr2 = [1, 2];
let arr3 = [3, 4];

arr2.concat(arr3); //este metodo combina arrays pero no modifica ninguno, es decir crea uno nuevo
let combinados = arr2.concat(arr3); //por lo que hay que asignarselo a una nueva variable

//DIVIDIENDO ARRAYS//

let divididos = combinados.slice(1, 2); //(indice en el que empieza, indice en el que acaba)
let divididos2 = combinados.slice(1); //nuevo array que empieza desde el indice 1
let divididos3 = combinados.slice(); //es igual PERO NO ES EL MISMO ES UNA COPIA ¡¡POR SI PREGUNTAN COMO HACER COPIA!!