//MÉTODO DE MAP// se utiliza para poder crear nuevos arrays a partir de un array ya existente

const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

const lista = usuarios.map(u => u.nombre); //me devuelde un nuevo array solo con los nombres

console.log(lista);

//si nosotros queremos hacer un elemento <html> con una lista de los nombres...

const lista2 = usuarios.map(u => `<li>${u.nombre}</li>`); //esto es un template VER MAS EN PROFUNDIDAD
const html = `<ol>${lista2.join('')}</ol>`;

console.log(html); //ya tenemos el texto para pegarlo a huevo en un html

// tamien podemos crear nuevos objetos

const mapped = usuarios.map(u => {
    return {
        ...u, 
        mayor: u.edad > 17,
    }
});

console.log(mapped); //CREA UN ARRAY NUEVO DE OBJETOS Y A ESOS OBJETOS LES AÑADE UNA NUEVA PROPIEDAD CON UNA CONDICION

//podemos ENCADENAR métodos

const lista3 = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`); //esto es un template VER MAS EN PROFUNDIDAD
const html2 = `<ol>${lista3.join('')}</ol>`;

console.log(html2);