// //Only change code below this line
// function countdown(n){
//     if (n < 1) {
//         return [];
//     } else {
//         const arr = countdown(n-1);
//         arr.unshift(n);
//         return arr;
//     };
// }
// // console.log(countdown(5)); // [5, 4, 3, 2, 1]
// // console.log(countdown(10)); // [5, 4, 3, 2, 1]
// // console.log(countdown(-10)); // [5, 4, 3, 2, 1]

// function rangeOfNumbers(startNum, endNum) {
//     if (startNum === endNum) {
//         return [startNum];
//     } else if (endNum > startNum) {
//         const arr = rangeOfNumbers(startNum, endNum - 1);
//         arr.push(endNum);
//         return arr;
//     }
//   };

// console.log(rangeOfNumbers(4, 4))
/* Alter code below this line */
class Thermostat {
    constructor(fTemp) {
        this.fTemp = fTemp;
    }

    // getter
    get celsius() {
        let cTemp = (5/9) * (fTemp -32);
        return this._cTemp;
    }

    // setter
    set celsius(cTemp) {
        this._fTemp = () => {
            return (cTemp * 9.0)/5 + 32;
        }
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
