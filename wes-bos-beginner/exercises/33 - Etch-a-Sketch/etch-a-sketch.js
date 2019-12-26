// Go get something, listen for something, do something

// Initilize Canvas and Context and Shake Button
const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('button.shake');

// Initilize and Set Canvas Size
// Notice use of destructuring
const { width, height } = canvas;

// Initialize drawing options
const DRAW_INCREMENT = 15;
const LINE_WIDTH = 20;

// Randomize Starting Position
let x = getRandomInteger(width);
let y = getRandomInteger(height);

// Translate random float into whole number within bounds of canvas
function getRandomInteger(max) {
    return Math.floor(Math.random() * (max - 1));
};

// initilize the line
ctx.lineWidth = LINE_WIDTH;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Listen for arrow keys and call drawing
window.addEventListener("keydown", function(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw(e);
        return true; // to restore default...
        }
    });


// Draw a line corresponding to pressed arrow key
// Is this iteration you need to explicitly update 
// position and stroke style
function draw(e) {

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);

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

    hue += 5;
    ctx.stroke();
}

// Shake and clear canvas
shakeButton.addEventListener('click', clearCanvas);

function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height)
    canvas.addEventListener('animationend', function() {
        console.log('Shaking it!')
        canvas.classList.remove('shake');
    }, {once: true}); // keeps eventlisteners from piling up...
}

// stop at border? - not mentioned