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

const resizeButton = document.getElementById("resize-button");

resizeButton.addEventListener("click", ()=>{
    let newSize = prompt("Enter grid dimensions between 10-100");

    if (newSize === null)
        return;

    while(isNaN(newSize) || newSize < 10 || newSize > 100) {
        if (newSize < 10) {
            newSize = prompt("Number is too low. Please enter a number between 10-100");
        } else if (newSize > 100) {
            newSize = prompt("Number is too high. Please enter a number between 10-100")
        } else {
            newSize = prompt("Invalid input. Please enter a number between 10-100")
        }

        if (newSize === null) {
            return;
        }
    }
    
    createGrid(newSize);
});
