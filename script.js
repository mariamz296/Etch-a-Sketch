const grid = document.getElementById("grid-container");
let size = 50;


function createGrid(size) {
    grid.innerHTML = "";
    const squareSize = 450 / size;
    let gridsize = size*size

    let i;
    for(i=0; i<gridsize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        grid.appendChild(square);
    }
}

createGrid(size);