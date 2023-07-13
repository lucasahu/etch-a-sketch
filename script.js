// Helper Functions

// DOM Declaration
const main = document.querySelector('div.main');
const grid = document.querySelector('div.grid');
let gridbox = ''
//DOM Append

//DOM Methods

grid.className = 'grid';
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    let gridbox = document.createElement('div');
    gridbox.addEventListener('mouseover', () => {
        gridbox.style.backgroundColor = 'black';    
    });
    grid.insertAdjacentElement('beforeend', gridbox);
}

//DOM Event Listeners
