// Initilize Canvas and Context
const canvas = document.getElementById('tutorial');
const ctx = canvas.getContext('2d');

// Initilize and Set Canvas Size
const CANVAS_WIDTH = '500';
const CANVAS_HEIGHT = '200';

// Initialize drawing options
const DRAW_INCREMENT = 10;

canvas.setAttribute('width', CANVAS_WIDTH);
canvas.setAttribute('height', CANVAS_HEIGHT);

// Randomize Starting Position
let x = getRandomInteger(CANVAS_WIDTH);
let y = getRandomInteger(CANVAS_HEIGHT);

ctx.beginPath();
ctx.moveTo(x, y);

// Not entirely sure how this works yet, but it seems to give the right results...
function getRandomInteger(max) {
    return Math.floor(Math.random() * (max - 1));
};

// -----------------

document.addEventListener("keydown", moveSnake);

// Draw a line corresponding to pressed arrow key
function moveSnake(e) {

    if (e.keyCode == '38') {
        ctx.lineTo(x, y -= DRAW_INCREMENT);
         // Up
    } else if (e.keyCode == '40') {
        ctx.lineTo(x, y += DRAW_INCREMENT);
        // Down
    } else if (e.keyCode == '37') {
        ctx.lineTo(x -= DRAW_INCREMENT, y);
        // Left  
    } else if (e.keyCode == '39') {
        ctx.lineTo(x += DRAW_INCREMENT, y);
    }

    ctx.stroke();
}

const shakeButton = document.querySelector()
// Line width constant
// Multi-colored line
// Shake to clear