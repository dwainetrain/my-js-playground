/*
It's gonna be a mess!
*/

// Just a little test data to verify the elasticity of the menu building function
const testData = { "menu": { "slice of pizza": "2.00", "pizza pie": "25.00", "toppings": { "pepperoni": ".25", "meatballs": ".35", "mushrooms": ".40", "olives": ".20", "vegan":{"brocolli": "3.00"} }, "sides": { "potato salad": "1.25", "hummus": "2.50", "caesar salad": "3.50", "garden salad": "2.25" }, "drinks": { "soda": { "small": "1.95", "medium": "2.20", "large": "2.50" }, "juice": "2.00", "water": "1.25" } }, "Kids menu":{"hamburger":"3.00"}}

/* Data Retieval */
const newReq = new XMLHttpRequest();
newReq.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    menuBuild(testData);
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

    // now that I have the basics working, time to put in the work
    // of creating valid html, and outfitting with a form
    // which means using the DOM
    let container = document.createElement('div')
    let h2;
    let figcaption;
    let figure;
    let li;
    let ul;

    /*
    Use css to capitalize
    // Just style this in the CSS to be pretty...do a little designing first and then go all out
    <h1>menu</h1>
        <figure>
            <figcaption>sides</figcaption> 
            <ul>
                <li value="2.00"> Potatoe Salad.........Price: $2.00...........Quantity:
                <input type="number" /></li> pull value from json
                <li>Fries</li>
                <li>Moz Balls</li>
            </ul>
        </figure>

    */

    for(i in data) {

        h2 = document.createElement('h2');
        h2.innerHTML = i;
        console.log(h2)
        container.appendChild(h2); // head level
        figure = document.createElement('figure');
        container.appendChild(figure);
        
        if(typeof data[i] === 'object'){
            
            for(j in data[i]) { // subhead level 1
                // okay, you need to work your way down the structure to get
                // valid html, so plan it out first and make sure it stays dynamic
                figcaption = document.createElement('figcaption');
                figcaption.innerHTML = j;
                container.appendChild(figcaption);
                if(typeof data[i][j] === 'object'){
                    for(k in data[i][j]) {
                        
                        if(typeof data[i][j][k] === 'object'){
                            // subhead level 2
                            figure = document.createElement('figure');
                            figcaption = document.createElement('figcaption');
                            figcaption.innerHTML = k;
                            figure.appendChild(figcaption);
                            container.appendChild(figure);
                            ul = document.createElement('ul');
                            for(l in data[i][j][k]) {
                                
                                li = document.createElement('li');
                                li.innerHTML = l;
                                ul.appendChild(li)
                                figure.appendChild(ul);
                                //document.write(`<ul><li>${l}, Cost: ${data[i][j][k][l]}</li></ul>`) // item level 2
                            }} else { // subhead level 2
                                ul = document.createElement('ul');
                                console.log(figcaption)
                                // figure = document.createElement('figure');
                                li = document.createElement('li'); //figcaption
                                li.innerHTML = k;
                                ul.appendChild(li);
                                container.appendChild(ul);
                                // ul = document.createElement('ul');
                                //document.write(`<li>${k}, Cost: ${data[i][j][k]}</li>`)
                            }
                    }
                } else {
                    ul = document.createElement('ul');
                    li = document.createElement('li'); //figcaption
                    li.innerHTML = j;
                    ul.appendChild(li);
                    container.appendChild(ul);
                    //document.write(`${j}, Cost: ${data[i][j]}</br>` )
                } //subhead level 1
            }
        } 
    }
    document.body.appendChild(container)
}
