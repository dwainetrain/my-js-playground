let canvasSize = 600;
let rectOneFill = 255;
let rectTwoFill = 255;
let rectThreeFill = 255;
let rectFourFill = 255;
const fillSpeed = 5;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(255);
}

function draw() {
    // draw quadrant lines
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    stroke(0);

    // Set quadrant to black if the mouse rolls over it
    // fade back to white if the mouse isn't rolled over it
    if (mouseX < width/2 && mouseY < height/2) {
      rectOneFill = 0;
      fill(rectOneFill);
      rect(0, 0, width/2, height/2);
    } else {
      rectOneFill += fillSpeed;
      fill(rectOneFill);
      rect(0, 0, width/2, height/2);
    };

    if (mouseX > width/2 && mouseY < height/2) {
      fill(rectTwoFill);
      rectTwoFill = 0;
      rect(width/2, 0, width/2, height/2);
    } else {
      fill(rectTwoFill);
      rectTwoFill += fillSpeed;
      rect(width/2, 0, width/2, height/2);
    };

    if (mouseX < width/2 && mouseY > height/2) {
      fill(rectThreeFill);
      rectThreeFill = 0;
      rect(0, height/2, width/2, height/2);
    } else {
      fill(rectThreeFill);
      rectThreeFill += fillSpeed;
      rect(0, height/2, width/2, height/2);
    };

    if (mouseX > width/2 && mouseY > height/2) {
      fill(rectFourFill);
      rectFourFill = 0;
      rect(width/2, height/2, width/2, height/2);
    } else {
      fill(rectFourFill);
      rectFourFill += fillSpeed;
      rect(width/2, height/2, width/2, height/2);
    };
    
}


// sketch which demonstrates a simple rollover effect
// at the moment I don't know how to detect edges on ellipsi
// so the bouding box instead triggers it
// x = 50;
// y = 50;
// w = 100;
// h = 100;
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(255);
//   stroke(0);
//   if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
//     fill(255, 234, 16);
//     } else {
//         fill(255);
//     }
//     ellipseMode(CORNER);
//   ellipse(x, y, w, h);
//}



// sketch that animates a square horizontally from left to location 100
// Rectangle starts at location x
// x = 0;

// function setup() {
//   createCanvas(200, 200);
// }
// function draw() {
//   background(255);
//   // Display object
//   fill(0);
//   rect(x, 100, 20, 20);
//   // Increment x
//   x = x + 1;
  
//   if (x > 100) {
//       x = 100;
//   }
// }

// sketch to make canvas redder depending on which side the mouse is hovering over
// let r = 0;
// let g = 0;
// let b = 0;

// function setup() {
//     createCanvas(400, 400);
// }

// function draw() {
//     background(r, g, b);
//     stroke(255);
//     line(width/2, 0, width/2, height);

//     if (mouseX > width/2) {
//         r = r + 1;
//     } else {
//         r = r - 1;
//     }

//     r = constrain(r, 0, 255)
// }
