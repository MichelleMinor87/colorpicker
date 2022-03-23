/* Set Global Variables */
let picker = document.getElementById('picker');
let rowsNumber = document.getElementById('height');
let cellsNumber = document.getElementById('width');
let canvas = document.getElementById('canvas');
let form = document.getElementById('gridSize');

/* This is for the submit button */
form.addEventListener('submit', function(v) {
    canvas.innerHTML = '';

/* Prevent page refresh */
    v.preventDefault();
    makeGrid();
})

/* This allows for the color of square 
   to be changed when clicked */
canvas.addEventListener('click', function(v) {
if (v.target.nodeName === 'TD') {
    v.target.style.backgroundColor = picker.value;
}
})

/* Draw Grid */
function makeGrid() {
for(let b = 0; b < rowsNumber.value; b++) {
    const row = canvas.insertRow(0);
    for (let c = 0; c< cellsNumber.value; c++) {
        row.insertCell(0);
    }
}

}


