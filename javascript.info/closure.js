p5(sketch => {
    let system;
    
    const c = sketch.color('#DC3F74');
    
    sketch.setup = function() {
      sketch.createCanvas(640, 300);
      sketch.textAlign(sketch.CENTER);
      sketch.textFont('sans-serif');
      sketch.textStyle(sketch.BOLD);
    };
    
    sketch.draw = function() {
      sketch.translate(sketch.millis() / 10 % sketch.width, sketch.height / 2);
      sketch.background(viewof background.valueAsNumber);
      sketch.fill(c).textSize(100);
      sketch.text('p5.js', 0, 0);
    };
  
    sketch.mousePressed = function() {
       sketch.noLoop();
    };
  
    sketch.mouseReleased = function() {
       sketch.loop();
    }; 
)

// // function being called at a later time
// let name = 'John';

// function sayHi() {
//     console.log(`Hi, ${name}`);
// }

// name = 'Pete';

// sayHi();

// 
// function makeWorker() {
//     let name = 'Pete';

//     return function() {
//         console.log(name);
//     }
// }

// let name = 'John';

// let work = makeWorker();

// work();

// let phrase = 'Hello';

// function say(name) {
//     alert( `${phrase} ${name}`);
// }

// say('Dwaine');

// phrase bubbles up to find the declared variable...

// function makeCounter() {
//     counter = 0;
//     return function () {
//         return counter++;
//     }
// }

// let count = makeCounter();

// console.log(count());
// console.log(count());
// console.log(count());

// let count2 = makeCounter();
// console.log(count()+10);
// console.log(count()+10);
// console.log(count()+10);

// console.log(count());
// console.log(count());