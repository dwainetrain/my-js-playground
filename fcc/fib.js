function sumPrimes(num) {
    let range = [];
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }

    // this approach is not working, you need to work in some other direction
    // So, you're taking a range of numbers
    // check if that number is divisible by the numbers before it
    // other than itself and 1. 


    let zeroRange = range.map(number => range.map(divider => number%divider).filter(item => item < 1) )

    console.log(zeroRange);
    console.log( zeroRange.filter(arr => arr.length <= 2).map((arr, _, i) => arr[i]) );

    let primeArr = []
    for (let i in zeroRange) {
        primeArr.push(range[i]);
    }


    return primeArr;
  }
  
  console.log( sumPrimes(10) );

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