//State
let todos = []; // Single source of truth

//Grab Elements
const todoInput = document.getElementById("todo");
const addTodoBtn = document.getElementById("addTodo");
const displayTodos = document.getElementById("display");

//Events
addTodoBtn.addEventListener("click", addTodo);

//Functions
function addTodo() {
    // take input, change the state according to user input, let render reflect it
    todos.push(todoInput.value); 
    renderUI();
    // have to push it i think.

}

// Render
function renderUI() {
    // take current state, and reflect it
    displayTodos.innerHTML = "";
    todos.forEach((todo) => {
        const item = document.createElement("p");
        item.textContent = todo;
        displayTodos.appendChild(item)
    });

    // when a list is added with a display, it must also have a deelted button next to it (later for when i get it)
} 