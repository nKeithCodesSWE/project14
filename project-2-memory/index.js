// State
let todos = [];

// Grab Elements
const todoInput = document.getElementById("todo-input");
const addTodo = document.getElementById("add-todo");
const displayTodos = document.getElementById("display");

// Events
addTodo.addEventListener("click", handleAddTodo);

// Functions
function handleAddTodo() {
    // get input, render it as a list
    todos.push(todoInput.value);

    renderUI();
}
// Render
function renderUI() {
    displayTodos.innerHTML = "";
    
    todos.forEach((todo) => {
        let item = document.createElement('li');
        item.textContent = todo;
        displayTodos.appendChild(item);
    })
}