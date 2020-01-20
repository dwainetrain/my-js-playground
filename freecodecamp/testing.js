// //Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop){
//     // Only change code below this line
//     let firstNameArr = [];
//     for (let i=0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             firstNameArr.push(contacts[i].firstName);
//             if (contacts[i][prop]) {
//                 return contacts[i][prop];
//             } else {
//                 return 'No such property';
//             };
//         };
//     };

//     if (firstNameArr.length === 0) {
//         return 'No such contact';
//     }

// // Only change code above this line
// }

// // help solution
// // mine is close, but I didn't know a way to have it not shoot off
// // four, which I was close to..., it's about return as an exit for the loop
// // that's all you were'nt getting
// function lookUpProfile2(name, prop) {
//     for (var i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         if (prop in contacts[i]) {
//           return contacts[i][prop];
//         } else return "No such property";
//       }
//     }
//     return "No such contact";
//   }

// // Change these values to test your function
// console.log(lookUpProfile2("Akira", "likes"));
// console.log(lookUpProfile2("Jabba", "likes"));
// console.log(lookUpProfile2("Sherlock", "dislikes"));

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
//   };

//   function makeList(arr) {
//     "use strict";
//     // change code below this line
//     const resultDisplayArray = [];
//     for(let i = 0; i < arr.length; i++) {
//         console.log(i);
//         resultDisplayArray.push(`<li class='text-warning'>${arr[i]}</li>`);
//     };
//     // change code above this line
//     return resultDisplayArray;
//   }
//   /**
//    * makeList(result.failure) should return:
//    * [ `<li class="text-warning">no-var</li>`,
//    *   `<li class="text-warning">var-on-top</li>`,
//    *   `<li class="text-warning">linebreak</li>` ]
//    **/
//   const resultDisplayArray = makeList(result.failure);
//   console.log(resultDisplayArray);

// const createPerson = (name, age, gender) => 
//     "use strict";
//     ({name, age, gender});
//     // change code above this line

//   console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
  
//   const getMousePosition = (x, y) => ({ x, y });
//   console.log(getMousePosition(6,7));

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // change code below this line
//       newArr.push([...arr]);
//       // change code above this line
//       num--;
//     }
//     return newArr;
//   }
  
//   // change code here to test different cases:
//   console.log(copyMachine([true, false, true], 2));

let users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

  function countOnline(usersObj) {
    // change code below this line
    let usersOnline = 0;
    for (let user in usersObj) {
      console.log(usersObj[user].online);
      if (usersObj[user].online) {
        usersOnline++;
      };
    }
    console.log(usersOnline);
    return usersOnline;
    // change code above this line
  }

  console.log(typeof users);
  countOnline(users);
  