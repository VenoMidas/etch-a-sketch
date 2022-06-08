const gridContainer = document.querySelector('.gridContainer');

const gridReset = document.querySelector('.gridReset');
gridReset.addEventListener('click', () => {
    let gridSize = prompt("Enter grid size", "example, enter 9 for a 9x9 grid");
    let gridSquared = gridSize*gridSize;}
);

for (i = 0; i < gridSquared; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridContainer.appendChild(gridItem);
}

const gridItem = document.createElement('div');
gridItem.classList.add('gridItem');

//gridContainer.appendChild(gridItem);