function sumFibs(num) {
    // okay, just a loop
    function fibSeq(num) {
        let fibColl = [];
        let a = 1, b = 0, temp;

        while (num >= 0) {
            temp = a;
            a = a + b;
            fibColl.push(b);
            b = temp;
            num--;
        }
        return fibColl;

    }

    let fibArr = fibSeq(num);

    
    if (fibArr.length <= 1 ) {
            return fibArr;
        } else {
            return fibArr.filter(item => item <= num && item%2 > 0)
                        .reduce((result, item) => item + result);
            } 

   };

console.log( sumFibs(1) ); // reduce error
console.log( sumFibs(1000) );// works
console.log( sumFibs(4000000) ); // works with loop, would blow stack with recursion
console.log( sumFibs(4) ); // works
console.log( sumFibs(75024) );
console.log( sumFibs(75025) );
console.log( sumFibs(10) );