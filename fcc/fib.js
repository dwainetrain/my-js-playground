// this is overly complicated, but yet it works
// I hope to simplify this mess in the future
// yet, I'm intrigued by how this works
// because it's not an explicit comparison
// It actually creates a matrix first and then
// uses the matrix to calculate the result
// so, don't discredit this skill!

// and comparing this to the other solutions, this one doesn't seem overly complicated...
function sumPrimes(num) {
    // create the range of numbers to test
    let range = [];
    for (let i = 2; i <= num; i++) {
        range.push(i);
    }

    // create a matrix of numbers, any solution that's a zero is a divisor, if there's only one divisor
    // then that number is a prime. eleminate all other numbers so you only have an array of arrays of zeros
    let zeroRange = range.map( number => range.map(divider => number%divider).filter(item => item < 1) )

    // find arrays with only a single zero, match its index to the range index
    // and then you have your prime.
    let primeArr = [];
    for (let i in zeroRange) {
        if (zeroRange[i].length <= 1) {
            primeArr.push(range[i]);
        }
    }

    console.log(primeArr);
    return primeArr.reduce((result, item) => result + item, 0);
  }
  
  console.log( sumPrimes(100000) );

 // 1(1/1), 2(1/2), 3(1/3), 4(2/2), 5(1/5), 6(2/3), 7(1/7), 8(2/2/2), 9(3/3), 10(2/5)
// initialize prime array with 1, create a number, if that number, prime array shouldn't contain 1!
// but if created number isn't divisible by another number in the prime array, it itself is prime
// create number, check against each number in prime array



// function oddOneOut(str) {
//     // code me
//     let splitStr = str.split('');
//     let dict = [];
//     return splitStr.map(item => {
//       if (!splitStr.includes(item) ) {
//         dict.push[item];
//       } else {

//       }
//     });
//  }

//  console.log( oddOneOut('Hello World') );

// // function sumFibs(num) {
// //     // okay, just a loop
// //     function fibSeq(num) {
// //         let fibColl = [];
// //         let a = 1, b = 0, temp;

// //         while (num >= 0) {
// //             temp = a;
// //             a = a + b;
// //             fibColl.push(b);
// //             b = temp;
// //             num--;
// //         }
// //         return fibColl;

// //     }

// //     let fibArr = fibSeq(num);

    
// //     if (fibArr.length <= 1 ) {
// //             return fibArr;
// //         } else {
// //             return fibArr.filter(item => item <= num && item%2 > 0)
// //                         .reduce((result, item) => item + result);
// //             } 

// //    };

// // console.log( sumFibs(1) ); // reduce error
// // console.log( sumFibs(1000) );// works
// // console.log( sumFibs(4000000) ); // works with loop, would blow stack with recursion
// // console.log( sumFibs(4) ); // works
// // console.log( sumFibs(75024) );
// // console.log( sumFibs(75025) );
// // console.log( sumFibs(10) );