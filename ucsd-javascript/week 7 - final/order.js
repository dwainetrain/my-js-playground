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
            let h2;

            for(i in data) {
                h2 = document.createElement('h2');
                h2.innerHTML = i;
                console.log(h2)
                document.body.appendChild(h2); // head level
                if(typeof data[i] === 'object'){
                    for(j in data[i]) {
                        // okay, you need to work your way down the structure to get
                        // valid html, so plan it out first and make sure it stays dynamic
                        //document.write(`<h3>${j}</h3>`) // subhead level 1
                        if(typeof data[i][j] === 'object'){
                            for(k in data[i][j]) { 
                                if(typeof data[i][j][k] === 'object'){ // subhead level 2
                                    //document.write(`<li>${k}</li>`) // item level 1
                                    for(l in data[i][j][k]) {
                                        //document.write(`<ul><li>${l}, Cost: ${data[i][j][k][l]}</li></ul>`) // item level 2
                                    }} else { // subhead level 2
                                        //document.write(`<li>${k}, Cost: ${data[i][j][k]}</li>`)
                                    }
                            }
                        } else {
                            //document.write(`${j}, Cost: ${data[i][j]}</br>` )
                        } //subhead level 1
                    }
                } 
            }
    }
