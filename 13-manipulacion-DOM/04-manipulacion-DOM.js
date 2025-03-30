let el = document.createElement('p');
el.innerText = 'Elemento creado';

document.body.append(el); //lo agrega al final del HTML. puede recibir texto y tambien nodos (el)

el.remove(); //elimina el elemento

document.body.prepend(el); //agrega el elemento pero al comienzo

//las referencias son unicas

let div = document.createElement('div');
div.innerText = 'Soy un div';

el.replaceWith(div); //reemplaza el por el nuevo div que hemos creado. hay otra forma:

document.body.replaceChild(el, div);
document.body.removeChild(el);
document.body.appendChild(el); //solo recibe nodos

document.body.insertBefore(div, el); //inserta el elemento antes del elemento que nosotros le digamos
document.body.insertAdjacentElement('beforebegin', div); //inserta antes de la etieuqte. hay otros 3 valores para este metodo
