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

function makeCounter() {
    counter = 0;
    return function () {
        return counter++;
    }
}

let count = makeCounter();

console.log(count());
console.log(count());
console.log(count());

let count2 = makeCounter();
console.log(count()+10);
console.log(count()+10);
console.log(count()+10);

console.log(count());
console.log(count());