const loginContainer = document.querySelector("#login-container")
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.innerText = `Welcome ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginContainer.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginContainer.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit)
}else{
    paintGreetings(savedUsername);
}
