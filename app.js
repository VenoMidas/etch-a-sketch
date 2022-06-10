const gridContainer = document.querySelector('.gridContainer');
let div;
let target;

function makeDivs (numOfDivs) {
    for (let divs = 0; divs < numOfDivs; divs++) {
        div = document.createElement('div');
        div.classList.add('gridItem');
        gridContainer.appendChild(div);
    }
};

function makeGrid (numOfColumns) {
    gridContainer.style.setProperty('--numOfColumns', numOfColumns);
    for (let columns = 0; columns < numOfColumns; columns++) {
        makeDivs(numOfColumns);
    }
};

function promptGridSize() {
    let number = prompt("Choose a grid size between 5 - 64!", 16);
        if (number >=5 && number <= 64) {
            makeGrid (number);
        } else {
            do {
                number = prompt("Invalid size, choose a number between 5 and 64!");
            }
            while(number < 5 || number > 64);
            makeGrid (number)
        }
};

function changeColor(target) {
    target.style.backgroundColor = 'black';
}

gridContainer.addEventListener("mouseover", e => {
    target = e.target;

    if (target.matches("div.gridItem")) {
        changeColor(target);
    }
});

const reset = document.querySelector('.gridReset');
reset.addEventListener('click', () => {
    window.location.reload();
});


promptGridSize();