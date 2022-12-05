'use strict'

class User{
    #id;
    #name;
    #userName; 
    #email;

    constructor(id, name, userName, email){
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }
}

export { User };