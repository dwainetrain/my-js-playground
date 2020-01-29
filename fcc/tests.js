function myReplace(str, before, after) {

  // find location
  let splitStr = str.split(" ")
  let location = splitStr.findIndex(item => item === before);

  // Check case of initial word
  function checkCase(arr, index, word) {
    let regexUpper = /[A-Z]/
    let regexLower = /[a-z]/
    if(arr[index][0].match(regexUpper)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
      }
    return word;
  }
  let editAfter = checkCase(splitStr, location, after);

  // initialize new str
  let newStr = [];
  // put all strings before location
  // add new word at location
  // continue word after location
  for(let i=0; i<location; i++) {
      newStr.push(splitStr[i]);
  }
  newStr.push(editAfter);
  for(let j=location+1; j<splitStr.length; j++) {
    newStr.push(splitStr[j])
  }
  
  console.log(newStr.join(" "))
  return newStr.join(" ");
}


/// Aspiration - Simple string manipulation///
/// I think you were too afraid to play with strings in this exercise
/// No need to create arrays, there are plenty of string methods
// for this kind of problem
function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substr(1)
  } else {
    after = after[0].toLowerCase() + after.substr(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall")
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("This has a spellngi error", "spellngi", "spelling")
myReplace("His name is Tom", "Tom", "john")
myReplace("Let us get back to more Coding", "Coding", "algorithms")

// ///// PIG LATING /////
// // This passes, but it's not very clean, and there's lots of repeated code
// // Anyway to turn this more functional?
// function translatePigLatin(str) {
//   let newStr = [];
//   if (str[0].match(/[aeiou]/)) {
//     for(i=0; i < str.length; i++) {
//       newStr.push(str[i]);
//     }
//     newStr.push("way");
  
//   } else if (str[0].match(/[^aeiou]/)) {
//     let splitAtVowel = str.split(/(?=[aeiou])/);
//     if (splitAtVowel[0].match(/[^aeiou]/)) {
//       for(i=1; i < splitAtVowel.length; i++) {
//         newStr.push(splitAtVowel[i]);
//       }
//       newStr.push(splitAtVowel[0]+'ay')
  
//     } //else {

//     // for(i=1; i < splitAtVowel.length; i++) {
//     //   newStr.push(splitAtVowel[i]);
//     // }
//     // newStr.push(splitAtVowel[0]+'ay')
//     // }
//   }

  
//   console.log(newStr.join(''));
//   return newStr.join('');
// }

// translatePigLatin("consonant"); 
// translatePigLatin("california"); // aliforniacay 
// translatePigLatin("paragraphs"); // aragraphspay
// translatePigLatin("glove"); // oveglay
// translatePigLatin("algorithm"); // algorithmway
// translatePigLatin("eight"); // eightway
// translatePigLatin("schwartz"); // artzschway
// translatePigLatin("rhythm"); // rhythmay



/////////// MY SOLUTION ////////////
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   // let splitUppercase = (str.replace(/(?=[A-Z])/g, ' ').trim()).split(/[_\s]/g);
//   // console.log('UC: ', splitUppercase.map(word => word.toLowerCase().trim() ));
//   let splitUppercase = str.split(/(?=[A-Z]|[\s])/g);
//   return splitUppercase
//           .map(word => word.trim())
//           .map(word => word.replace(/_/g, ''))
//           .filter(word => word !== '')
//           .map(word => word.toLowerCase())
//           .join('-')
//   }

// ////////// ASPIRTIONS ////////////
// // I was very close, just needed to be more skilled at RegEx
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   // let splitUppercase = (str.replace(/(?=[A-Z])/g, ' ').trim()).split(/[_\s]/g);
//   // console.log('UC: ', splitUppercase.map(word => word.toLowerCase().trim() ));
//   console.log( str
//         .split(/\s|_|(?=[A-Z])/)
//         .join("-")
//         .toLowerCase()

//   );
//   }

// spinalCase('This Is Spinal Tap');
// spinalCase("AllThe-small Things");
// spinalCase("Teletubbies say Eh-oh");
// spinalCase("The_Andy_Griffith_Show");
// spinalCase("thisIsSpinalTap");

// /////////// OK, I'm proud of this one ///////////////
// // Basically it's using the length of a truth table to determine
// // if elements match, each element is checked against the source
// // if it's found matching, push a truth to the truth table
// // then at the end check the amount of truths to the amount of sources
// // if they match, then all sources are true
// // Someday, I'd like to figure this out with a more functional approach...but for now this is good
// function whatIsInAName(collection, source) {
//   // What's in a name?
//   const arr = [];
        
//         let truthTable = [];
//         for (const obj of collection) {
//           truthTable = [];
//           for (const item in source) {
  
//             if (obj.hasOwnProperty(item) && obj[item] === source[item]) {
//               truthTable.push(true);
//             }

//             if (truthTable.length === Object.values(source).length) {
//               arr.push(obj);
//             }
//           }
//         }
//   console.log(arr);
//   return arr;
// }

// //// And this is what I want to strive for! ///
// function whatIsInAName2(collection, source) {

//   console.log( collection.filter(o => Object.keys(source).every(k => o.hasOwnProperty(k) && o[k]==source[k])) );
// }
// //////

// whatIsInAName2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


// whatIsInAName2([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
// //////////////////////




// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//         // // convert object into array
       
//         // let collection0Arr = Object.keys(collection[0]).map(i => [i, collection[0][i]]);
//         // let collection1Arr = Object.keys(collection[1]).map(i => [i, collection[1][i]]);
//         // let collection2Arr = Object.keys(collection[2]).map(i => [i, collection[2][i]]);
//         // console.log(collection0Arr);
//         // console.log(collection1Arr);
//         // console.log(collection2Arr);
        
//         // converts each obj in collection into arrays
//         ////////// BELOW WORKS BEFORE FILTER FUNCTION - DON"T CHANGE! //////////
//         // let sourceArr = Object.keys(source).map(i => [i, source[i]]);
//         // console.log(...sourceArr)
//         // for (let obj in collection) {
//         //   console.log('collection returns: ' + JSON.stringify(Object.keys(collection[obj]).map(i => [i, collection[obj][i]])));

//         //   console.log(
//         //       JSON.stringify(Object.keys(collection[obj]).map(i => [i, collection[obj][i]])).includes(JSON.stringify(...sourceArr))
//         //   );
//         // }
//         /////////////// DON"T CHANGE ABOVE - USE TO BUILD FILTER //////////////

      
//         //   // okay, first gotcha is that it loads the object not the index of the object when filter passes over
//         // console.log(
//         //   collection.filter(obj =>
//         //   JSON.stringify(Object.keys(obj).map(i => [i, obj[i]])).includes(JSON.stringify(...sourceArr))
//         //   )

//         // );

//         // Well, closer, but they want even more matching,
//         let truthTable = [];
//         for (let obj of collection) {
//           truthTable = [];
//           for (let item in source) {
//             console.log(obj, item);
//             console.log(obj[item], source[item]);
//             if (obj.hasOwnProperty(item) && obj[item] === source[item]) {
//               truthTable.push(true);
//               console.log(truthTable);
//             }
//             console.log(Object.values(source).length);
//             if (truthTable.length === Object.values(source).length) {
//               arr.push(obj);
//               console.log(arr);
//             }
//           }
//         }

//         // return collection.filter(obj =>
//         //   JSON.stringify(Object.keys(obj).map(i => [i, obj[i]])).includes(JSON.stringify(...sourceArr)));

        
//         // ok, reduce idea, use it to go through each of the values and return true or false
//         // CLOSER STILL
//         // console.log(
          
//         //   collection.reduce(function (acc, val, index) {
//         //       // return Object.keys(collection[index]).map(i => [i, collection[index][i]]);
//         //       return Object.keys(collection[index]).map(i => [i, collection[index][i]]);
//         //   } , [])
        
//         // );

//   return arr;
// }

// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   // Only change code below this line
  
//   // This works, but I'm not entirely sure why, it seems to create an object to make this work even though it shouldn't
//   // console.log(
    
//   //   collection
//   //   .filter(obj => JSON.stringify(
//   //     (Object.assign(
//   //       JSON.parse(
//   //         JSON.stringify(obj)
//   //       ), source))
//   //   ) === JSON.stringify(obj)
//   // )
//   // );

//         // Now we're onto something. Object entries returns the object as an array
//         // which has many more useful methods to use
//         // for (let i in collection) {
//         //     console.log( Object.entries(collection[i]));
//         //     console.log(Object.entries(source));
//         //     console.log(JSON.stringify(Object.entries(collection[i])).includes(JSON.stringify(Object.entries(source)[0])))
//         // }
//       // you could create your own function that takes any value and tests it against
//       // the bigger object

//         // This is so close, but how the heck do I compare the source entries individually?
//         // let sourceEntries = Object.entries(source);
//         // let collectionEntry = Object.entries(collection[2]);
        
//         // console.log('Source Entries: ' + sourceEntries);
//         // console.log('Collection Entry: ' + collectionEntry);
        
//         // so filter expects a true or false value and builds the array based on true values

//         // // convert object into array
//         let sourceArr = Object.keys(source).map(i => [i, source[i]]);
//         // console.log(sourceArr);

//         // ok, reduce idea, use it to go through each of the values and return true or false
//         // CLOSER STILL
//         console.log(
          
//           collection.reduce(function (acc, val, index) {
//               return Object.keys(collection[index]).map(i => [i, collection[index][i]]);
//           } , [])
        
//         );

//         // 
//         // for (i of sourceArr) {
//         //   console.log(i);
//         // }
//         // let collectionArr = Object.keys(collection).map(i => [i, collection[i]]);
//         // console.log(collectionArr);
//         // console.log( collection.filter( i => {
                  
//         //                  if( JSON.stringify(
//         //                     Object.entries(i))
//         //                     .includes(
//         //                       JSON.stringify(
//         //                        Object.entries(source)))) { //ridiculous!
//         //                          return true;
//         //                        }
                                
//         //       })
//         // );
      
//         // Only change code above this line
//   //       return arr;
//   //     }

//   //     console.log([[1,2,3], [4,5,6]].includes([4,5,6]));

//   //     function testValueInObject(target, test) {
//   //         for (let i in target) {
//   //             console.log(i);
//   //         }
        

//   //     }

//   //     testTarget1 = {a:1, b:2, c:3};
//   //     testTest1 = {b:2};

//   //     console.log(testValueInObject(testTarget1, testTest1));

//   //     let newArr = collection.filter(obj => 
//   //       JSON.stringify(obj) === JSON.stringify(source)
//   //     )

//   //     console.log(newArr);

//   // // Only change code above this line
//   return arr;
// }




// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   // Only change code below this line
//   // This is the literal result, how do I get these
//   // values from the source?

//   // you'll have to rethink this, because sometimes it gives you
//   // a range of values to test against the initial array of objects
//   // but you are close here, you just need to try abstact it more

//   //so you need to split out the objects and compare original object to target object, if it matches
//   // const sourceArr = [source];
//   // console.log(sourceArr);
//   const sourceKeys = Object.keys(source);
//   console.log(source.entries)
//   // const [sourceValues] = Object.values(source);
//   // console.log(sourceKeys);
//   // console.log(sourceValues);
//   // // 'Capulet' === collection.last.'Capulet'
//   // console.log(collection.filter(i => sourceArr.includes(i)));

//   console.log(...collection)
//   const sourceJSON = JSON.stringify(source);
//   console.log(sourceJSON)
//   const collectionJSON = JSON.stringify(collection);
//   console.log(collectionJSON);
//   const collectionJSONParse = JSON.parse(collectionJSON);
//   console.log(collectionJSONParse);
//   for (const obj of collection) {
//       console.log(obj);
//   }

//   // well okay, this tells me if the values match...one.at.a.time
//   // I'm thinking of elaborate ways to hold truth tables, but is there
//   // a simplier method?
//   // for (const obj of collection) {
//   //   // console.log(sourceKeys[key]);
//   //   for (const key of sourceKeys) {
//   //     if (obj.hasOwnProperty(key)) {

//   //     };
//   //   }
    
//   // }


//   // Only change code above this line
//   return arr;
// }
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// should return
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

// // Neat! 
// function destroyer(arr, ...rest) {
//     // Remove all the values
//     return arr.filter(i => !rest.includes(i))
//   }
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// // This works, but I wonder if there's a way to create it without repeating
// // the logic...
// function diffArray(arr1, arr2) {
//   // var newArr = [];

//   // let args = [...arguments]
//   // //console.log(args);
//   // args.forEach(i => console.log(i))

//   // for (let i = 0; i < arr2.length; i++) {
//   //   if (arr1.indexOf(arr2[i]) === -1) {
//   //     newArr.push(arr2[i]);
//   //   };
//   // }

  

//   // for (let i = 0; i < arr1.length; i++) {
//   //   if (arr2.indexOf(arr1[i]) === -1) {
//   //     newArr.push(arr1[i]);
//   //   };
//   // }

//   // return newArr;

//   // Love this solution!
//   console.log( arr1
//         .concat(arr2)
//         .filter(item => !arr1.includes(item) || !arr2.includes(item))
//   );
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub", "large thicket"]);


// const squareList = (arr) => {
//   // only change code below this line
//   return arr
//           .map(i => Math.abs(parseInt(i)))
//           .map(j => j * j)
//   // only change code above this line
// };

// // test your code
// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);


// the global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// function getRating(watchList){
//   // Add your code below this line
//   // average imdb rating of movies by nolan
//   let averageRating;
//   let nolanArr = watchList
//                   .filter(i => i.Director === "Christopher Nolan" )
//                   .map(i => parseFloat(i.imdbRating))
//   averageRating = nolanArr
//                   .reduce((total, currVal) => total + currVal)/nolanArr.length
//   // Add your code above this line
//   return averageRating;
// }
// console.log(getRating(watchList));


// // the global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Add your code below this line

// var filteredList;
// filteredList = watchList
//     .filter(i => i.imdbRating >= 8.0)
//     .map(i => ({title: i.Title, rating: i.imdbRating}));

// // Add your code above this line

// console.log(filteredList);

// // the global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Add your code below this line

// let ratings = [];
// // for(var i=0; i < watchList.length; i++){
// //   ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// // }
// // ratings = watchList.map(movie => {
// //   let movObj = {};
// //   movObj[movie.Title] = movie.imdbRating;
// //   return movObj;
// // }
// //   );
// ratings = watchList.map(movie => ({title: movie.Title, rating: movie.imdbRating}));
// console.log(ratings);


// // Add your code above this line

// console.log(JSON.stringify(ratings));

// // the global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// /* This function should add a book to the list and return the list */
// // New parameters should come before bookName

// // Add your code below this line
// function add (bookList, bookName) {
//     let bookArr = bookList.map( i => i);
//     bookArr.push(bookName);
//     return bookArr;

//     // Add your code above this line
// }

// /* This function should remove a book from the list and return the list */
// // New parameters should come before the bookName one

// // Add your code below this line
// function remove (bookList, bookName) {
//     let bookArr = bookList.map( i => i);
//   let book_index = bookArr.indexOf(bookName);
//   if (book_index >= 0) {

//     bookArr.splice(book_index, 1);
//     return bookArr;

//     // Add your code above this line
//     }
// }

// let newBookList = add(bookList, 'A Brief History of Time');
// let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log("newest: ", newestBookList);
// console.log(bookList);


// tabs is an array of titles of each site open within the window
// var Window = function(tabs) {
//     this.tabs = tabs; // we keep a record of the array inside the object
//   };
  
//   // When you join two windows into one window
//   Window.prototype.join = function (otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
//   };
  
//   // When you open a new tab at the end
//   Window.prototype.tabOpen = function (tab) {
//     this.tabs.push('new tab'); // let's open a new tab for now
//     return this;
//   };
  
//   // When you close a tab
//   Window.prototype.tabClose = function (index) {
  
//     // Only change code below this line
//     var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
//     console.log(tabsBeforeIndex);
//     var tabsAfterIndex = this.tabs.splice(index - 1); // get the tabs after the tab
//     console.log(tabsAfterIndex);
  
//     this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  
//     // Only change code above this line
  
//     return this;
//    };
  
//   // Let's create three browser windows
//   var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
//   var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
//   var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites
  
//   // Now perform the tab opening, closing, and other operations
//   var finalTabs = socialWindow
//                       .tabOpen() // Open a new tab for cat memes
//                       .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//                       .join(workWindow.tabClose(1).tabOpen());
//   console.log(finalTabs.tabs);
  
  

// function mutation(arr) {
//     // change to uppercase
//     arr = arr.map(item => item.toUpperCase());
//     // destructure into seperate arrays
//     const [arrA, arrB] = arr;
//     // filter over arrays to see if one array is in another
//     const testArr = [...arrB].filter(element => [...arrA].includes(element));
//     // if the length of the original matches
//     // then true
//     // And this is not the best solution, but...
//     // it seems to work with duplicate letters, etc.
//     return (testArr.length === arrB.length);
//   }
  
//   mutation(["hello", "hey"]);
//   console.log(mutation(["hello", "Hello"]));
  
// function mutation(arr) {
//     // change to uppercase
//     // destructure into seperate arrays
//     const [arrA, arrB] = arr;
//     // filter over arrays to see if one array is in another
//     const testArr = [...arrB].every(element => [...arrA].includes(element));
//     // if the length of the original matches
//     // then true
//     // And this is not the best solution, but...
//     // it seems to work with duplicate letters, etc.
//     return (testArr.length === arrB.length);
//   }
  
//   mutation(["hello", "hey"]);
//   console.log(mutation(["hello", "Hello"]));