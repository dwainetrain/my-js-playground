// console.log('It works!');

// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const listItemOne = document.createElement('li');
listItemOne.textContent = 'One';

const listItemTwo = document.createElement('li');
listItemTwo.textContent = 'Two';

const listItemThree = document.createElement('li');
listItemThree.textContent = 'Three';

myList.insertAdjacentElement('afterbegin', listItemTwo);
myList.insertAdjacentElement('afterbegin', listItemOne);
myList.insertAdjacentElement('beforeend', listItemThree);

myDiv.appendChild(myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.setAttribute('src', 'https://picsum.photos/200');

// set the width to 250
myImg.setAttribute('width', '250');

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.setAttribute('alt', 'cute');

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
    <div>
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
        <p>Paragraph Three</p>
    </div>
    `;

const myFragment = document.createRange().createContextualFragment(myHTML);

myDiv.prepend(myFragment);

// add a class to the second paragraph called warning
const myParagraph  = document.getElementsByTagName('p').item(1);
myParagraph.classList.add('warning');
console.log(myParagraph);

// remove the first paragraph
const myParaToDelete = document.getElementsByTagName('p').item(0);
myParaToDelete.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
     const card = `  
        <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} inches tall and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
        </div>
        `
    
    return document.createRange().createContextualFragment(card);
}



// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
const cardOne = generatePlayerCard('Dwaine', 43, 65);
const cardTwo = generatePlayerCard('Margie', 38, 66);
const cardThree = generatePlayerCard('Shane', 32, 70);

// append those cards to the div
cardDiv.append(cardOne);
cardDiv.append(cardTwo);
cardDiv.append(cardThree);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
