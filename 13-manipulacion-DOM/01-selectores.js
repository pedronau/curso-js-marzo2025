//nos permiten seleccionar/obtener documentos en nuestro HTML, para ello hay que modificar tambien el HTML para poner etiquetas y cosas
//queremos seleccionar la etiqueta que acabamos de crear, hacemos:

let htmlElement = document.getElementById('cuerpo'); //me devuelve la etiqueta HTML completa si lo pongo en la consola
//esto nos devuelve en consola una cosa que se llama HTMElement. SE ACTUALIZA

let elementosRed = document.getElementsByClassName('red'); //los html que tengan la clae red
//esto nos devuelve en consola una cosa que se llama HTMLCollection, que se parece a un array pero no lo es. SE ACTUALIZA

let elementosChanchito = document.getElementsByName('chanchito');
//esto nos devuelve en consola una cosa que se llama NodeList. SE ACTUALIZA

let parrafos = document.getElementsByTagName('p');

let el = document.querySelector('#cuerpo'); //buscando por el ID de cuerpo. este nos devuelve solo un elemento METODO LENTO. NO SE ACTUALIZA

let els = document.querySelectorAll('p'); //busca todos los elementos que pueda encontrar METODO LENTO. NO SE ACTUALIZA