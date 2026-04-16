// State
const names = ["Keith", "Dan", "Alex", "Simon", "Paul"];

// Grab DOM elements
const displayContainer = document.getElementById('container');

function renderState() {
    displayContainer.innerHTML = "";
    names.forEach((name) => {
        let item = document.createElement("li");
        item.textContent = name;
        displayContainer.appendChild(item);
    })
}

renderState();