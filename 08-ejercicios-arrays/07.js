//la funcion que reciba un array y un argumento que es la propiedad por lo que queremos agruparlos

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function groupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
}

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });

//ni idea de como se hace no he entendido el ejercicio VER VIDEO 95