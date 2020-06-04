/*
It's gonna be a mess!
*/

// Just a little test data to verify the elasticity of the menu building function
const testData = { "menu": { "slice of pizza": "2.00", "pizza pie": "25.00", "toppings": { "pepperoni": ".25", "meatballs": ".35", "mushrooms": ".40", "olives": ".20", "vegan":{"brocolli": "3.00"} }, "sides": { "potato salad": "1.25", "hummus": "2.50", "caesar salad": "3.50", "garden salad": "2.25" }, "drinks": { "soda": { "small": "1.95", "medium": "2.20", "large": "2.50" }, "juice": "2.00", "water": "1.25" } }, "Kids menu":{"hamburger":"3.00"}}

/* Data Retieval */
const newReq = new XMLHttpRequest();
newReq.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    menuBuild(data);
});

newReq.addEventListener("error", () => {
    document.write("Request Failed. Status: " + newReq.status);
});

newReq.open("GET", "https://mm214.com/menu.php");
newReq.send();

/* Build Webpage */
const menuBuild = (data) => {
    // Many affordances had to be made due to the structure of the JSON
    // I tried plenty of algorythmic ways to approach it
    // but this seemed to work the best and fit the overall data
    // I tested it adding new items and it seems to work at each level

    let container = document.createElement('div')
    let h2;
    let figcaption;
    let figure;
    let figureTwo;
    let li;
    let ul;
    let ul2;

    /*
    I spent an exorbitant amount of time on structuring the html
    only to find out that figure and figcaption don't validate when nested. CURSES!!!
     Well, I'll save the restructuring for Version 2.0
    */

    for(header in data) {
        // create needed elements
        h2 = document.createElement('h2');
        figure = document.createElement('figure');
        // insert data
        h2.innerHTML = header;
        // append nodes
        container.appendChild(h2);
        container.appendChild(figure); // main figure
        if(typeof data[header] === 'object'){
            for(subheadOne in data[header]) {
                // create needed elements
                figcaption = document.createElement('figcaption');
                ul = document.createElement('ul');
                ul2 = document.createElement('ul');
                // assign classes
                ul.className = "first level list"
                ul2.className="second level list"
                // insert data
                figcaption.innerHTML = subheadOne;
                // append nodes
                figure.appendChild(figcaption) // subheading first level attach to main figure
                figure.appendChild(ul)
                if(typeof data[header][subheadOne] === 'object'){ // if clouse 2
                    for(subheadTwo in data[header][subheadOne]) {
                        if(typeof data[header][subheadOne][subheadTwo] === 'object'){
                            // create needed elements
                            figureTwo = document.createElement('figure');
                            figcaption = document.createElement('figcaption');
                            // assign classes
                            figureTwo.className = "Figure Two";
                            // insert data
                            figcaption.innerHTML = subheadTwo;
                            // append nodes
                            figureTwo.appendChild(figcaption);
                            figureTwo.appendChild(ul2);
                            figure.appendChild(figureTwo);
                            for(item in data[header][subheadOne][subheadTwo]) {
                                
                                li = document.createElement('li');
                                li.className="I'm soda sizes"
                                li.innerHTML = `${item}, Price: ${data[header][subheadOne][subheadTwo][item]}`;
                                ul2.appendChild(li)
                                
                            }} else { // if clause 2
                               
                                li = document.createElement('li');
                                li.className="I'm general items, salad, meatballs, hummus, etc"
                                li.innerHTML = `${subheadTwo}, Price: ${data[header][subheadOne][subheadTwo]}`;
                                ul.appendChild(li);
                                figure.appendChild(ul);
                            }
                    }
                } else { // if clause 1
                    
                    li = document.createElement('li');
                    li.className="Very Top of Menu Item, ie slice of pizza"
                    li.innerHTML = `${subheadOne}, Price: ${data[header][subheadOne]}`;
                    ul.appendChild(li);
                    
                }
            }
        } 
    }

    document.body.appendChild(container)
}
