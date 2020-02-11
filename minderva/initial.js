'use strict';

// Okay, now we need to split up logic
// So there are different functions within the program
// One to start the test
// One to add to entries
// One to delete entries
// level of knowledge of card

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/* Cards Object */
let cards = {
    1 : {'question': 'What is New Mexico\'s Capital?', 'answer':'Santa Fe'},
    2 : {'question': 'What is Colorado\'s Capital?', 'answer': 'Denver'},
    3 : {'question': 'What is Wyoming\'s Capital?', 'answer': 'Chyenne'}
}

// This uses promises to pause node between prompts
function questionPrompt(q) {
        
        return new Promise((resolve, reject) => {
        rl.question(q, (answer) => {
            console.log(`You answered: ${answer}`)
            resolve()
        })
        })

    }

// use async to go through all cards in collection
const main = async () => {
    for (let card of Object.keys(cards)) {
        await questionPrompt(cards[card]['question'])
    };
  rl.close();
}

main()



