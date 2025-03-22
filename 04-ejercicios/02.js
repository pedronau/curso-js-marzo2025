//coprobar el video si tengo dudas 

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
    } if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    } if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return undefined;
    }
}

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);

//lo he hehco bien :)