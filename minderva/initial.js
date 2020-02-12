'use strict';

// Version 0.01

/* Cards Object */
// Find some way to protect this number
let idCount = 3;

let cards = {

    0 : {'question': 'What is New Mexico\'s Capital?', 'answer':'Santa Fe'},
    1 : {'question': 'What is Colorado\'s Capital?', 'answer': 'Denver'},
    2 : {'question': 'What is Wyoming\'s Capital?', 'answer': 'Chyenne'},
}
/* End Card Object */

/* Add Card */
// returns the card id number from objects, to give a unique identifier
// ideally this will be a protected value
const cardId = function cardIdNumber() {
    return idCount;
};

// Add card logic
function addCard(q, a) {
    const id = cardId();
    cards[id] = {'question': q, 'answer': a};
    idCount += 1;
};
/* End add card logic */

/* Delete Card */
function deleteCard(id) {
    delete cards[id];
    console.log(cards);
}
/* End Delete Card*/

/* Edit Card */
function editCard() {
    let id = prompt('Which id?');
    let q = prompt('Enter an updated question');
    let a = prompt('Enter an updated answer');
    cards[id] = {'question': q, 'answer': a};
    console.log(cards);
}
/* End Edit Card */

/* Quiz */
function quiz() {
    for (let card of Object.keys(cards)) {
          prompt(cards[card]['question']);
          prompt(`The Answer is ${cards[card]['answer']}. Were you correct?`)
          // some method to keep track of right or wrong answers
        };
}
/* End Quiz */

/* OLD CODE */
/* WORKS - allow prompting in node REPL */
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// Question prompt logic
// This uses promises to pause node between prompts
// function questionPrompt(q) {
        
//         initializePrompt();
        
//         return new Promise((resolve, reject) => {
//         rl.question(q, (answer) => {
//             console.log(`You answered: ${answer}`)
//             resolve()
//         })
//         })

//     }

// // use async to go through all cards in collection
// const quiz = async () => {
//     for (let card of Object.keys(cards)) {
//         await questionPrompt(cards[card]['question'])
//     };
//   rl.close();
// }

// End of question prompt

// Function to add new question
// okay, how do you add a unique counter to the object?
// figure out the function and then add it as a method