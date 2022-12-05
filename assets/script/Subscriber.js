'use strict'

import { User } from "./User.js"

class Subscriber extends User{
    #pages; 
    #groups; 
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize){
        super(id, name, userName, email);

        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get getName(){
        return this.name
    }
}

export {Subscriber};
