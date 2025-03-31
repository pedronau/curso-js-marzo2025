/**
 * Lo 1º que vamos a necesitar es un listado de recursos que vamos a ir a buscar
 * a alguna API y un lugar que sea el encargado de gestionarlo todo
 * 
 * vamos a usar: jsonplaceholder.typicode.com/users
 */

class User {
    static #url = 'https://jsonplaceholder.typicode.com/users'; //#hace que sea privada
    static #users = [];

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
}

async function main() {
    const users = await User.getAll();
    console.log(users);
}

main();

