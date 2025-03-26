 //MÉTODO DE REDUCE//

 const numeros = [1, 2, 3, 4];

 //vamos a sumar todos los elementos del array. el metodo reduce recibe dos parametros, 1n el primero el acumulador y el elemento y en el segundo donde empieza el acumulador
 //esto lo que va haciendo es iterar el array sumando sus elementos

 let suma = numeros.reduce((acc, el) => {
    return acc + el;
 }, 0);

 console.log(suma); 

 //si tenemos un array de arrays lo podemos usara para aplanarlo

 const anidado = [[1, 2], 3, [4, 5]];
 //queremos [1, 2, 3, 4, 5];
 const plano = anidado.reduce((acc, el) => acc.concat(el), []);

 console.log(plano);

 //cuando tengamos un array demasiado grande (miles de elementos) y queremos buscar un elementos, en vez de usar un find que va muy lento podemos usar

 const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});

console.log(indexado);