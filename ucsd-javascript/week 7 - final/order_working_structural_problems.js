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

    for(header in data) {

        h2 = document.createElement('h2');
        h2.innerHTML = header;
        container.appendChild(h2);
        figure = document.createElement('figure');
        container.appendChild(figure);
        
        // there's still some structural problems,
        // just how much time do you want to spend on fixing them?

        if(typeof data[header] === 'object'){
            // YOU'RE SOOOOO CLOSE TO GETTING GOOD STRUCTURE!!!!
            // This is your backed up copy in case the structure gets away from you
            for(j in data[header]) { 
                figcaption = document.createElement('figcaption');
                figcaption.innerHTML = j;
                container.appendChild(figcaption);
                if(typeof data[header][j] === 'object'){
                    for(k in data[header][j]) {
                        
                        if(typeof data[header][j][k] === 'object'){
                           
                            figure = document.createElement('figure');
                            figcaption = document.createElement('figcaption');
                            figcaption.innerHTML = k;
                            figure.appendChild(figcaption);
                            container.appendChild(figure);
                            ul = document.createElement('ul');
                            for(l in data[header][j][k]) {
                                
                                li = document.createElement('li');
                                li.innerHTML = `${l}, Price: ${data[header][j][k][l]}`;
                                ul.appendChild(li)
                                figure.appendChild(ul);
                                
                            }} else {
                                // This ul creates an overnesting ul problem, where each li is wrapped by a ul
                                // This is where to start problem solving the issue
                                ul = document.createElement('ul');
                                li = document.createElement('li');
                                li.innerHTML = `${k}, Price: ${data[header][j][k]}`;
                                ul.appendChild(li);
                                container.appendChild(ul);
                            }
                    }
                } else {
                    // This ul creates an overnesting ul problem, where each li is wrapped by a ul
                    ul = document.createElement('ul');
                    li = document.createElement('li');
                    li.innerHTML = `${j}, Price: ${data[header][j]}`;
                    ul.appendChild(li);
                    container.appendChild(ul);
                }
            }
        } 
    }
    document.body.appendChild(container)
}
