console.log('it works!');

// Closure example
function multiplier(factor) {
    return bob => bob * factor
}

let twice = multiplier(2);
console.log(twice); // number => number * factor
console.log(twice(2)); // 4

// see here!
let h = a => a *3;
console.log(h(3)); // returns 9, the number you provide is the argument!

/* Let's talk about what's going on here. When declaring twice as a variable
with the value of a function. If you just call the function, it gives the 
return function (number => number * factor). If you again call the function
but as its value in twice variable, then it will apply the number where? So,
factor is remaining in the twice function, but how does it know to return a 
number?  

*/

/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can
build something like that now. Write a function min that takes two arguments and returns their minimum.
 
 console.log(min(0, 10));
 // → 0
 console.log(min(0, -10));
 // → -10

*/

function min(num1, num2) {
    if (num1 === num2) {
        return 'The numbers are equal.'
    } else if (num1 < num2) {
        return `${num1} is the smaller number`
    } else {
        return `${num2} is the smaller number`
    }
}

/*

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

*/

// base 0 is even
// One is false
// it works its way back, if it hits one, then it is odd, because it keeps substracting 2
// for instance, 12 (12-2(10-2(8-2(6-2(4-2)2-2(0))))) - Even
// 11 (11-2(9-2(7-2(5-2(3-2(1)))))) - Odd


function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
// → true ?
console.log(isEven(75));
// false ?
console.log(12, isEven(12));
console.log(11, isEven(11));
console.log(39876, isEven(3987));

let name = "dwaine"
name[3] = 'f';
console.log(name)
console.log(name[name.length-1]);

function countBs(string) {
    let counter = 0;
    for (let letter in string) {
        if (string[letter] === 'B') {
        counter++;       
        }
    }
    console.log(counter);
}

function countChars(string, character) {
    let counter = 0;
    string = string.toUpperCase();
    for (let letter in string) {
        if (string[letter] === character.toUpperCase()) {
        counter++;       
        }
    }
    console.log(counter);
}

let objectTest = {
    squirrel: 'Im not a squirrel today',
    events: ["work", "touched tree", "pizza", "running"]
};


console.log(objectTest.squirrel);
console.log(objectTest.wolf);

name[3] = 'f';
console.log(name)

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};