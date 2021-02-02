//initialize canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const resolution = 6;
canvas.width = 600;
canvas.height = 600;

const rows = canvas.width/resolution;
const cols = canvas.height/resolution;
let world; //2d grid

//make 2d arr
function makeWorld(rows, cols){
  let arr = new Array(rows);
  for(let i = 0; i <arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

//fill world with 0 and 1
function populateWorld(){
    world = makeWorld(rows,cols);
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            world[i][j] = Math.floor(Math.random()*2);
        }
    }
}

populateWorld();
//finds the next generation
function nextBoard(world){
    //save a copy of the previous board to the next board
    let nextBoard = world.map(arr => [...arr]);
            for(let i = 0; i < rows; i++){
                for(let j = 0; j < cols; j++){
                    const cell = world[i][j];
                    let numNeighbors = getNeighbors(i,j);
                    //check game rules
                    if (cell === 1 && numNeighbors < 2) {
                        nextBoard[i][j] = 0;
                      } else if (cell === 1 && numNeighbors > 3) {
                        nextBoard[i][j] = 0;
                      } else if (cell === 0 && numNeighbors === 3) {
                        nextBoard[i][j] = 1;
                      }
                    }
                
            }
            return nextBoard;
        }

    
//helper to find neighbors of cell
function getNeighbors(x,y){
    let numNeighbors = 0;
    
    // [-1,1], [0,1], [1,1]
    // [-1,0], [0,0], [1,0]
    // [-1,-1], [0,-1], [1,-1]
    // adds surrounding cells to get number of neighbors
    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
            if(i === 0 && j === 0){
                continue;
            }
            //check edge cases
            const xCoord = x + i;
            const yCoord = y + j;
            if (xCoord >= 0 && yCoord >= 0 && xCoord < rows && yCoord < cols) {
                let neighbor = world[x+i][y+j];
                numNeighbors += neighbor;
            }
        }
    }
    return numNeighbors;
}

//draw the cells
function draw(){
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                const cell = world[i][j];
                
                ctx.beginPath();
                ctx.rect(i*resolution,j*resolution,resolution,resolution);
                ctx.fillStyle = cell ? "black" : "white";
                ctx.fill();
        }
    }
}

function update(){
    world = nextBoard(world);
    draw();
    requestAnimationFrame(update)
}

requestAnimationFrame(update);

document.getElementById("reset").addEventListener("click", function() {
  populateWorld();
});



