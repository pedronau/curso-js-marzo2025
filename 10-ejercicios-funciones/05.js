function ordenar(texto, fn) {
    let resultado = texto.toLowerCase().split('').filter(letra => letra != ' ').sort().join('');
    fn(resultado);
}

ordenar('hola mundo', console.log);

//no lo he hecho