// State
let count = 0;

// Get Elements from DOM
const display = document.getElementById("display");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// Events
incrementBtn.addEventListener('click', addBtn)
decrementBtn.addEventListener('click', removeBtn)

// Functions
function addBtn() {
    // when clicked, we want the count to increase by one

    // change state, then re-render
    count = count + 1;
    renderUI();
}

function removeBtn() {
    // when clicked, we want the count to increase by one

    // change state, then re-render
    count = count - 1;
    renderUI();
}

// Render
function renderUI(){
    // Ui logic not system dom logic
    
    // use conditionals

    // counter stops at 0, no negative numbers
    if (count >= 0) {
        display.textContent = count;
    }
}