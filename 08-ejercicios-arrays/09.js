const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

const users = [
    { age: 22, name: 'Michael', membership: 'premium' },
    { age: 27, name: 'Kevin', membership: 'free' },
    { age: 29, name: 'Happy pig', membership: 'free' },
];

//suponer que estamos trabajando con recursos distintos

//1ero hay que unificar las estructuras de usuarios y user (hacerlos todos igual)
//fusionar los array
//oredenar por edad
//plantilla HTML:
//<li>Nombre: name, Edad: age</li>
//imprimir la lista en consola

function unificando(arr) {
    let unificados = arr.map(u => {
        return {
            edad: u.age,
            nombre: u.name,
            plan: u.membership,
        }
    });
    return unificados;
}

let objetosUnificados = unificando(users);
console.log(objetosUnificados);

let objetosCombinados = usuarios.concat(objetosUnificados);
console.log(objetosCombinados);

let objetosCombYOrdenados = objetosCombinados.sort((a, b) => b.edad - a.edad);
console.log(objetosCombYOrdenados);

let mapeado = objetosCombYOrdenados.map(u => {
    return {
        Nombre: u.nombre,
        Edad: u.edad,
    }
});
console.log(mapeado);

let plantillaHtml = mapeado.map(u => `<li>Nombre: ${u.Nombre}, Edad: ${u.Edad}</li>`);

console.log(plantillaHtml);
let plantillaHtml2 = `<ul>
    ${plantillaHtml.join(`
    `)} 
</ul>`

console.log(plantillaHtml2);

//lo he hecho!!!!! habria que refactorizar el codigo y dejarlo todo hecho dentro de una funcion pero bueno, estoy aprendiendo y lo importante es que funciona

