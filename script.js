let currentSize = 0;
let color = 'black';
// Helper Functions

function gridColor () {
    this.style.backgroundColor = color;
}

function changeColor (requestedColor) {
    color = requestedColor;
}

function clearGrid () {
    let fullGrid = grid.querySelectorAll('div');
    fullGrid.forEach((div) => div.remove());
    changeGridSize(currentSize);
}

function changeGridSize (number) {
    if (number == undefined) {
        number = currentSize
    }
    grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

    let size = number * number;

    for (let i = 0; i < size; i++) {
        let gridbox = document.createElement('div');
        gridbox.addEventListener('mouseover', gridColor);
        grid.insertAdjacentElement('beforeend', gridbox);
    }
    currentSize = number;
}

// DOM Declaration
const main = document.querySelector('div.main');
const grid = document.querySelector('div.grid');
const lowButton = document.querySelector('.lowgrid-button');
const midButton = document.querySelector('.midgrid-button');
const highButton = document.querySelector('.highgrid-button');
const resetButton = document.querySelector('.reset-button');
const eraserButton = document.querySelector('.eraser-button');
const redButton = document.querySelector('.red-button');
const blueButton = document.querySelector('.blue-button');
const greenButton = document.querySelector('.green-button');
const blackButton = document.querySelector('.black-button');
const rainbowButton = document.querySelector('.rainbow-button');

//DOM Append

//DOM Methods

grid.className = 'grid';

//DOM Event Listeners

document.addEventListener("DOMContentLoaded", () => changeGridSize(32));

resetButton.addEventListener('click', () => clearGrid());

eraserButton.addEventListener('click', () => changeColor('white'));

lowButton.addEventListener('click', () => clearGrid());
lowButton.addEventListener('click', () => changeGridSize(16));

midButton.addEventListener('click', () => clearGrid());
midButton.addEventListener('click', () => changeGridSize(32));

highButton.addEventListener('click', () => clearGrid());
highButton.addEventListener('click', () => changeGridSize(64));

redButton.addEventListener('click', () => changeColor('red'));

blueButton.addEventListener('click', () => changeColor('blue'));

greenButton.addEventListener('click', () => changeColor('green'));

blackButton.addEventListener('click', () => changeColor('black'));

rainbowButton.addEventListener('click', () => changeColor('rainbow'));
