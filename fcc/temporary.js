//Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n-1);
        arr.unshift(n);
        return arr;
    };
}
// console.log(countdown(5)); // [5, 4, 3, 2, 1]
// console.log(countdown(10)); // [5, 4, 3, 2, 1]
// console.log(countdown(-10)); // [5, 4, 3, 2, 1]

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else if (endNum > startNum) {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
  };

console.log(rangeOfNumbers(4, 4))