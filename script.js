// Helper Functions

function changeGridSize (number) {
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    let size = number * number;

    for (let i = 0; i < size; i++) {
        let gridbox = document.createElement('div');
        gridbox.addEventListener('mouseover', () => {
            gridbox.style.backgroundColor = 'black';    
        });
        grid.insertAdjacentElement('beforeend', gridbox);
    }
}

// DOM Declaration
const main = document.querySelector('div.main');
const grid = document.querySelector('div.grid');
const lowButton = document.querySelector('.lowgrid-button');
const midButton = document.querySelector('.midgrid-button');
const highButton = document.querySelector('.highgrid-button');
const resetButton = document.querySelector('.reset-button');
//DOM Append

//DOM Methods

grid.className = 'grid';

//DOM Event Listeners

document.addEventListener("DOMContentLoaded", () => changeGridSize(32))
  

resetButton.addEventListener('click', () => {
    console.log('reset')
})

lowButton.addEventListener('click', () => changeGridSize(16));

midButton.addEventListener('click', () => changeGridSize(32));

highButton.addEventListener('click', () => changeGridSize(64));
