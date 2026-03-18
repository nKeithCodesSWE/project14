// State
let count = 0;

// Grab DOM Elements
let addBtn = document.getElementById("incrementBtn");
let removeBtn = document.getElementById("decrementBtn");
let resetBtn = document.getElementById("resetBtn");
let display = document.getElementById("display");

// Functions for event
function increment() {
    // This increases state(count) by one
    count = count + 1;
    render();
}

function decrement() {
    // This decrease state(count) by one
    if (count != 0) {
        count = count - 1;
        render();
    }
}

function reset() {
    // This resets the state(count) back to original truth
    count = 0;
    render();
}

// Events for user action
addBtn.addEventListener("click", increment);
removeBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

// Render function for showing current state
function render() {
    // Make the display reflect current state, can only be equal to or over 0, no negatives
    if (count >= 0) {
        display.textContent = count;
    }
}

// Things I noticed, that i dont know how to fix or havent attepted because they arent the main problem:
// - All though i have made it so the count cannot go below zero, it still accounts for them , with visual representation, e.g if i start at 0, decrement 4 times, it will stay say zero, but i have press increment 5 times to see 1. Also the reset is very basic and not dynamic, i notcied but dont know how to fix it.