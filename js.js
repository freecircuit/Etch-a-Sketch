// etch-a-sketch header
let header = document.getElementById("header");
header.innerHTML = "<span>Etch-a-Sketch!</span>"
let text = document.querySelector("span")
text.style.cssText = "margin: auto"


// variables
let grid = document.querySelector("#grid");
let gridC = document.querySelector("#gridC");
let play = document.querySelector("#play");
var row = grid.querySelectorAll(".row")
var column = gridC.querySelectorAll(".column")

// the game!
play.addEventListener("click", (e) => {
    // reset sketch pad
    grid.querySelectorAll(".row").forEach(div => div.remove());
    gridC.querySelectorAll(".column").forEach(div => div.remove());

    // game
    let size = getSize();
    theGrid(size);
    play.textContent = "Resize";



    grid.querySelectorAll(".row").forEach(div => div.addEventListener('mousemove', color));
    gridC.querySelectorAll(".column").forEach(div => div.addEventListener('mousemove', color));

});


// functions:
function theGrid(n){
    grid.style.maxWidth = n * 10 + 'px';
    gridC.style.maxHeight = n * 10 + 'px';
    for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
        const div = document.createElement("div");
        div.classList.add("column");
        gridC.appendChild(div);
}
const div = document.createElement("div");
div.classList.add("row");
grid.appendChild(div);
}}


function getSize(){
    let n = prompt("Please enter number between 1 & 100 for size of sketch pad:");
    var size = parseInt(n);
    if (size < 1 ||
        size > 100){
            getSize()
        }
        return size
}

function color(e){
    let colorDiv = e.target
    colorDiv.classList.add("newColor")
    colorDiv.style.backgroundColor = "rgb("+e.offsetX*20+","+e.offsetY*20+", 40)"

}