'use strict';

// NEXT VERSION:
// - it should have a display function in cards object - k
// - it should have an idCount in cards object - k (note)
// - it should have an add card method in Cards object - k
// - it should have a delete card method in Cards object - k
// - it should have an edit card method in Cards object - k
// - it should have a quiz method in Cards object -k
// - it should provide answer validation
// - it should allow yes/no for remembering - ?

/* Cards Object */
// Find some way to protect this number
// research ways to make the information private

let flashCards = {

    // Unique ID
    _idCount: 3,

    // Card Collection
    // Should this be an array of objects?
    // What would I gain?
    // cards: {
    // 0 : {'question': 'What is New Mexico\'s Capital?', 'answer':'Santa Fe'},
    // 1 : {'question': 'What is Colorado\'s Capital?', 'answer': 'Denver'},
    // 2 : {'question': 'What is Wyoming\'s Capital?', 'answer': 'Chyenne'},
    // },

    cards: [
        {uid: 0, 'question': 'What is New Mexico\'s Capital?', 'answer':'Santa Fe'},
        {uid: 1, 'question': 'What is Colorado\'s Capital?', 'answer': 'Denver'},
        {uid: 2, 'question': 'What is Wyoming\'s Capital?', 'answer': 'Chyenne'},
        {uid: 7, 'question': 'What is Wyoming\'s Capital?', 'answer': 'Chyenne'},
    ],

    // Display card collection
    displayCards: function() {
        for (let card of this.cards) {
            console.log(card);
        }
    },

    // Get current Id
    currentId: function() {
        return this._idCount;
    },

    checkValidId: function() {
        if (index === -1) {
            return false
        }
    },

    // Apply current id to new card, create card, display cards
    addCard: function (q, a) {
        const id = this.currentId();
        this.cards.push({uid: id, 'question': q, 'answer': a});
        this._idCount += 1;
        this.displayCards();
    },

    // Delete Card
    deleteCard: function(id) {
        let index = this.cards.findIndex( ({uid}) => uid === id);
        if (index === -1) {
            return "This card id doesn't exist"
        }
        this.cards.splice(index, 1);
        this.displayCards();
    },

    // Edit Card
    editCard: function() {
        let id = prompt('Which id?');
        let q = prompt('Enter and updated question');
        let a = prompt('Enter an updated answer.');
        let index = this.cards.findIndex( ({uid}) => uid === id);
        if (index === -1) {
            return "This card id doesn't exist"
        }
        this.cards[index] = {'question': q, 'answer': a};
        this.displayCards();
    },

    quiz: function() {
        for (let card of Object.keys(this.cards)) {
            prompt(this.cards[card]['question']);
            prompt(`The answer is ${this.cards[card]['answer']}. Were you correct? `)
            // some method to keep track of right and wrong answers
            // display results at end of session
        }
    }
}