function suma(a, b, ...rest) {
    console.log(rest);
}

suma(1, 2, 3, 4, 5, 6);

//esto ni idea de pa lo que es no me estoy enterando de mucho en esta seccion 
//ejemplo de la vida real si queremos imprimir los mensajes de error

const logMsg = (descripcion, ...mensajes) => {
    for (let msg of mensajes) {
        console.log(descripcion, msg);
    }
}

logMsg('Servidor;', 'Error 1', 'Petición aceptada', 'Socket activo');