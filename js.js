let header = document.getElementById("header");
header.innerHTML = "<span>Etch-a-Sketch!</span>"
let text = document.querySelector("span")
text.style.cssText = "margin: auto"
let grid = document .querySelector("#grid");
let gridC = document .querySelector("#gridC");



function theGrid(n){
    grid.style.maxWidth = n * 10 + 'px';
    gridC.style.maxHeight = n * 10 + 'px';
    for(i=0; i < n; i++){
    for(j = 0; j < n; j++){
    gridC.innerHTML += '<div class="column"></div>';}
grid.innerHTML += '<div class="row"></div>';
}}

theGrid(20);