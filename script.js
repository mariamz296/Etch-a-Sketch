const grid = document.getElementById("grid-container");
let size = 20;


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

        square.addEventListener("mouseover", function() {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            this.style.backgroundColor = randomColor;
        });
        
        grid.appendChild(square);
    }
}

createGrid(size);
