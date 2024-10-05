// etch-a-sketch header
let header = document.getElementById("header");
header.innerHTML = "<span>Etch-a-Sketch!</span>"
let text = document.querySelector("span")
text.style.cssText = "margin: auto"

// variables
let grid = document.querySelector("#grid");
let gridC = document.querySelector("#gridC");
let play = document.querySelector("#play");

// the game!
play.addEventListener("click", (e) => {
    // reset sketch pad
    grid.querySelectorAll(".row").forEach(div => div.remove());
    gridC.querySelectorAll(".column").forEach(div => div.remove());

    // game
    let size = getSize();
    theGrid(size);
    play.textContent = "Reset";
});


// functions:
function theGrid(n){
    grid.style.maxWidth = n * 10 + 'px';
    gridC.style.maxHeight = n * 10 + 'px';
    for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
    gridC.innerHTML += '<div class="column"></div>';}
    grid.innerHTML += '<div class="row"></div>';
}}


function getSize(){
    let n = prompt("Please enter number between 1 & 50 for size of sketch pad:");
    var size = parseInt(n);
    if (size < 1 ||
            size > 50){
            getSize()
        }
        return size
}