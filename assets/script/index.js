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
}

const IslamIkt = new Subscriber(12342, 'Islam Iktislyamov', 'islam.ikt', 'wnefnaa@gmail.com', ['islamiktis', 'islamAdAcc'], 
['Programing group', 'Young Artists MB', 'Free Movies'], true);


const postBtn = document.querySelector('.post-btn');
const postList = document.querySelector('.post-list');
const textInput = document.querySelector('.text-input');
const fileInput = document.querySelector('.file-upload');
const pfp = document.querySelector('.pfp-btn');
const postTime = document.querySelector('.time');
const body = document.querySelector('body');

const time = new Date;
const hour = time.getHours();
const min = time.getMinutes();

let count = 0

function openModal(){
    if(count === 0){
        const modal = document.createElement('div');
        modal.classList.add('modal');

        modal.innerHTML = `
        <ul>
            <li>
                Nmae: ${IslamIkt.name}
            </li>
            <li>
                User Name: ${IslamIkt.userName}
            </li>
            <li>
                Email: ${IslamIkt.email}
            </li>
            <li>
                Groups(3)
            </li>
            <li>
                Pages(2)
            </li>
        </ul>
        `;

        body.append(modal);
        count= count + 2;
    }
    else if(count === 1){
        modal.style.display = "none";
        count++;
    }
    else if(count === 2){
        modal.style.display = 'block'
        count--;
    }
}

pfp.addEventListener('click', () => {
    openModal();
})

function createTextPost(){
    const post = document.createElement('div');
    post.innerHTML = `
    <div class='post'>
        <div class="posr-header flexbox">
            <div class='pfp-small'></div>
            <p class='profile-name'>Islam Iktislyamov</p>
            <p class='time'>${hour}:${min}</p>
        </div>
        <div class='post-text'>
        <p>${textInput.value}</p>
        </div>
    </div>
    `;
    postList.append(post);
}

function createPicPost(){
    const post = document.createElement('div');
    post.innerHTML = `
    <div class='post'>
        <div class="posr-header flexbox">
            <div class='pfp-small'></div>
            <p class='profile-name'>Islam Iktislyamov</p>
            <p class='time'>${hour}:${min}</p>
        </div>
        <div class='post-text'>
        <img src="${fileInput.files[0].name}" width="500"> 
        </div>
    </div>
    `
    postList.append(post);
}

function createPost(){
    const post = document.createElement('div');
    post.innerHTML = `
    <div class='post'>
        <div class="posr-header flexbox">
            <div class='pfp-small'></div>
            <p class='profile-name'>Islam Iktislyamov</p>
            <p class='time'>${hour}:${min}</p>
        </div>
        <div class='post-text'>
        <p>${textInput.value}</p>
        <img src="${fileInput.files[0].name}" width="500"> 
        </div>
    </div>
    `
    postList.append(post);
}

postBtn.addEventListener('click', () => {
    if (textInput.value === ''){
        createPicPost();
        textInput.value = '';
        fileInput.value = ''
    }
    else if (fileInput.value === ''){
        createTextPost();
        textInput.value = '';
        fileInput.value = ''
    }
    else{
        createPost();
        textInput.value = '';
        fileInput.value = ''
    }
})