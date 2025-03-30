//VIDEO 144!!!! aunque en la vida real vamos a usar frameworks como angular es importante conocer como funcionan los formularios en JS

let validate = data => {
    let errors = {};
    if(!data.name) {
        errors.name = 'Campo obligatorio';
    }
    if(!data.lastname) {
        errors.lastname = 'Campo obligatorio';
    }
    return errors;
}

let initialValues = {
    name: '',
    lastname: '',
}
let render = ({ data, errors }) => {
    return `
    <form name="formulario">
        <div>
            <label>Nombre:</label>
            <input name="name" value="${data.name}" />
            ${errors.name || ''}
        </div>
        <div>
            <label>Apellido:</label>
            <input name="lastname" value="${data.lastname}" />
            ${errors.lastname || ''}
        </div>
        <div><button>Enviar</button></div>
    </form>
    `
}

let form = document.createElement('form');
form.innerHTML = render({ data: initialValues, errors: {} });
document.body.append(form);

//queremos que cada vez que este formulario se vaya a enviar, prevenir ese envio, tomar los datos que se encuentren en los campos
//validarlos y dependiendo del resultado de esta validacion si le mostramos un error al usuario o si los guardamos en nuestra API o bbdd

form.addEventListener('submit', e => {
    e.preventDefault();
    let data = Array.from(e.target.elements).reduce((acc, el) => {
        if(!el.name) return acc;
        acc[el.name] = el.value;
        return acc
    }, {})
    const errors = validate(data);
    
    if (Object.keys(errors).length > 0) {
        let html = render({ errors, data });
        form.innerHTML = html;
        return;
    }
    /**aqui ahora deberiamos usar promesas o asincronias para enviar los datos al servidor!!!*/
})