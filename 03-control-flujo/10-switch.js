let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar')
        break;
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default: //si la variable tiene algun valor que no es ni listar no guardar (valor no reconocido)
        console.log('Accion no reconocida');
}