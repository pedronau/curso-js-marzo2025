//como crear elementos HTML

let el = document.createElement('p'); //lo creamos
el.innerHTML = 'Elemento creado'; //le cambiamos el texto y le podemos meter etiquetas HTML
el.innerText = 'Elemento creado'; //le cambiamos el texto también pero lo entiende todo como texto no se le pueden pasar etiquetas HTML
document.body.append(el); //lo agregamos al archivo HTML

el.style = 'backhround color: red;'; //le cambiamos el css
el.className = 'parrafo'; //le cambiamos la clase
el.id = 'mi-parrafo'; //le cambiamos el id

el.setAttribute('mipropiedad', 'mi propiedad'); //por si le queremos asignar una propiedad customizada. primero le pasamos como se va a llamar la propiedad y luego el valor. PERO MUCHO CUIDADO

el.getAttribute('mipropiedad'); //sacar el valor del atricuto
el.hasAttribute('mipropiedad'); //comprobar si tiene el atributo