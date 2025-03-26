const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

//obtener los usuarios de pago
//ordenar de mayor a menor edad
//devolver el nombre de usuario
//crear una plantilla HTML
//imprimirla en consola

/**
 * <ul>
 * <li>Felipe</li>
 * <li>Nico</li>
 * </ul>
 */

function premiumUsers(arr) {
    let dePago = arr.filter(u => u.plan != 'free');
    let ordenados = dePago.sort((a, b) => b.edad - a.edad);
    let soloNombre = ordenados.map(u => u.nombre);
    let plantillaHtml = soloNombre.map(u => `<li>${u}</li>`).join('')
    return plantillaHtml;
}

console.log(premiumUsers(usuarios));

//lo he hecho!!! el lo hace diferente pero si tengo dudas ver video 96