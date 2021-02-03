const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#reset");
let rows = document.getElementsByClassName("rows");
let squares = document.getElementsByClassName("squares");


//Makes a size x size grid of divs
function makeGrid(size) {
    makeRows(size);
    makeSquares(size);
}

//Creates numRows divs and appends it to the grid div
function makeRows(numRows) {
    for (let i = 0; i < numRows; i++) {
        let row = document.createElement("div");
        grid.appendChild(row).className = "rows";
    }
}

//Creates squares that change color on mouseover
function makeSquares(numSquares) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < numSquares; j++) {
            let square = document.createElement("div");
            square.addEventListener("mouseover", (e) => {
                const rndCol = "#" + ((1<<24)*Math.random() | 0).toString(16);
                e.target.style.backgroundColor = rndCol;
            });
            rows[j].appendChild(square).className = "square";
        }
    }
}

//Prompts user for size of new grid and makes a new grid
function reset() {
    //validates Input
    //Revisit here if I want to change grid size
/*     let newSize = (prompt("What size should the grid be?"));
    if (newSize !== undefined) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
            alert("Enter a number between 1 and 100")
            reset();
        }
    } */ 
        //creates an array from a nodelist
        const gridArray = Array.from(grid.childNodes);
        gridArray.forEach((element) => {
            grid.removeChild(element);
        });
        makeGrid(16);
    
}

resetBtn.addEventListener("click", reset)
makeGrid(16);


