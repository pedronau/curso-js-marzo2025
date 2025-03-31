/**lo que hemos hecho hasta ahora es crear una clase de usuario que nos permita poder gestionar el estado de los usuarios
 * que nos estamos trayendo de una API (vaya nos los hemos traido desde una API y los hemos guardado en una propiedad #users)
*/

/**ahora tenemos que crear un metodo que me vaya creando elementos y agregar los usuarios */

class User {
    static #url = 'https://jsonplaceholder.typicode.com/users'; //# hace que sea privada
    static #users = [];
    static #ul = document.createElement('ul');

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
}

async function main() {
    const users = await User.getAll();
    const template = User.render(); //deberia deolvernos un nodo (document.createElement('ul'))
    console.log(template);
}

main();

/**
 * no me estoy enterando de mucho ahora mismo
 */