function suma(fn, ...rest) {
    let resultado = rest.reduce((acc, el) => acc + el);
    fn(resultado);
}

suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4);

//no lo he conseguido me pensaba que el reduce no era porque tengo apuntado por ahi que solo funciona si le metes arrays