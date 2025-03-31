let serialize = target => 
    Array.from(target.elements).reduce((acc, el) => {
        if(!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    }, {});

class User {
    static #url = 'https://jsonplaceholder.typicode.com/users'; 
    static #users = [];
    static #ul = document.createElement('ul');
    static #form = document.createElement('form');
    static #initialValues = {
        name: '',
        email: '',
    }

    constructor(data) {
        this.name = data.name;
        this.email = data.email;
    }

    static async getAll() {
        try {
            const response = await fetch(this.#url);
            if(!response.ok) throw response;
            this.#users = await response.json();
            return this.#users;
        } catch (error) {
            console.log('Error', error);
        }
    }

    static renderUser(u) {
        let li = document.createElement('li');
        li.innerText = u.name;
        return li;
    }

    static render() {
        let users = this.#users;
        users.forEach(u => this.#ul.appendChild(this.renderUser(u)));

        return this.#ul;
    }

    static onSubmit(event) {
        event.preventDefault();
        let data = serialize(event.target);
        let user = new User(data);
        const errors = user.validate();
        if(Object.keys(errors).length > 0) {
            this.#form.innerHTML = this.formHTML({ data, errors });
            return;
        } else {
            user.save();
        }
    }

    save() {
        return User.save(this);
    }

    static async save(user) {
        try {
            const response = await fetch(this.#url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(user),
            })
            const data = await response.json();
            this.#users.unshift(data);
            this.#ul.prepend(this.renderUser(data));
        } catch (error) {
            console.log('Error', e);
        }
    }

    validate() {
        let errors = {};
        if(!this.name) {
            errors.name = 'Nombre es obligatorio';
        }
        if(!this.email) {
            errors.email = 'Email es obligatorio';
        }
        return errors;
    }

    static formHTML({ data, errors }) {
        return `
        <form>
            <div>
                <label>Nombre:</label>
                <input name="name" value="${data.name}" />
                ${errors.name || ''}
            </div>
            <div>
                <label>Correo:</label>
                <input name="email" value="${data.email}" />
                ${errors.email || ''}
            </div>
            <input type="submit" value="Enviar" />
        </form>
        `
    }

    static renderForm() {
        this.#form.onsubmit = this.onSubmit.bind(this);
        this.#form.innerHTML = this.formHTML({
            data: this.#initialValues,
            errors: {},
        });

        return this.#form;
    }
}

async function main() {
    const users = await User.getAll();
    const template = User.render(); 
    const form = User.renderForm();
    document.body.insertAdjacentElement("afterbegin", template);
    document.body.insertAdjacentElement("afterbegin", form);
}

main();