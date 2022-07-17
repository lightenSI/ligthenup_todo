const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
   event.preventDefault();
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(username);
}

function paintGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
   todoForm.classList.remove(HIDDEN_CLASSNAME);
   todoList.classList.remove(HIDDEN_CLASSNAME);
}

