/*
Menu Order Form - UCSD Ext. Javascript Course - Final
Code by Dwaine Best
*/

// Add a save order button and retrieve order button

// Just a little test data to verify the robustness of the menu building function
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
    // but this seemed to work  best for data structure
    // I tested it adding new items and it seems to work on any data up to this depth

    /*
    Also,
    I spent an exorbitant amount of time on structuring the html of this
    only to find out that figure and figcaption don't validate when nested. CURSES!!!
     Well, I'll save the valid html restructuring for Version 2.0
    */

    let container = document.createElement('div')
    let button = document.createElement('button')
    let h2;
    let figcaption;
    let figure;
    let figureTwo;
    let li;
    let ul;
    let ul2;

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
                                li.className="item" // 3rd level item // ie. soda
                                let price = data[header][subheadOne][subheadTwo][item]
                                // datasets to provide location data to order review
                                li.dataset.parent = subheadTwo
                                li.dataset.item = item
                                // add actual HTML to DOM element
                                li.innerHTML = `${subheadTwo}, ${item}, 
                                <span class="price" data-price="${price}">price: ${price},</span> 
                                <span class="quantity">Quantity: <input type="number" value="0" name="quantity" min="0"></span>`;
                                ul2.appendChild(li)
                                
                            }} else { // if clause 2
                               
                                li = document.createElement('li');
                                li.className="item" // 2nd level item // toppings and sides
                                let price = data[header][subheadOne][subheadTwo]
                                li.dataset.parent = subheadOne
                                li.dataset.item = subheadTwo
                                li.innerHTML = `${subheadTwo}, 
                                <span class="price" data-price="${price}">price: ${price},</span> 
                                <span class="quantity">Quantity: <input type="number" value="0" name="quantity" min="0"></span>`;

                                ul.appendChild(li);
                                figure.appendChild(ul);
                            }
                    }
                } else { // if clause 1
                    
                    li = document.createElement('li');
                    li.className="item" // 1st level item

                    let price = data[header][subheadOne]
                    li.dataset.parent = header
                    li.dataset.item = subheadOne

                    li.innerHTML = `${subheadOne},
                    <span class="price" data-price="${price}">price: ${price},</span> 
                    <span class="quantity">Quantity: <input type="number" value="0" name="quantity" min="0"></span>`;
                    
                    ul.appendChild(li);
                    
                }
            }
        } 
    }
    
    // Setup the save order button
    saveButton.setAttribute("name", "save-order")
    saveButton.innerHTML = "Save Order"
    container.appendChild(saveButton)

    // Setup the button
    button.setAttribute("name", "submit-order")
    button.innerHTML = "Print Order"
    container.appendChild(button)

    // Append Menu
    document.body.appendChild(container)

    // Handle Order Submit
    document.querySelector('savebBtton').addEventListener('click', e => {

        // get all items
        let items = document.querySelectorAll(".item");
        // convert to array for data manipulation
        items = Array.from(items)

        // Filter out all items that have 0 quantity
        let selections = items.filter(i => {
            let qty = i.querySelector("input[name='quantity']").value;
            return qty > 0
        })
            // map the selected items to an array that has parent node, price and quantity information
            .map(i => {
            let parent = i.dataset.parent
            let item = i.dataset.item
            let price = i.querySelector(".price").dataset.price
            let qty = i.querySelector("input[name='quantity']").value;
            return [parent, item, price, qty]
        })

        // create an object from selected items array
        let order = {};
        for(i in selections){
            order[i] = selections[i];
        }

        // Store order in local storage
        localStorage.setItem('customerOrder', JSON.stringify(order))

        // Retrieve from local stoage and display to customer
        getOrder = JSON.parse(localStorage.getItem('customerOrder'));

        // Create order review
        let div = document.createElement('div')
        let total = 0;
        for (i in getOrder) {
            let item = getOrder[i]
            let p = document.createElement('p')
            let itemTotal = times(item[2], item[3])
            p.innerHTML = `
            <strong>${item[0]}, ${item[1]}</strong>, 
            Price: $${item[2]} x ${item[3]} = $${itemTotal}`
            total = total + itemTotal;
            div.appendChild(p)
        }

        function times(a, b) {
            a = parseFloat(a);
            b = parseInt(b);
            return parseFloat( (a * b).toFixed(2) )
        }

        // create elements for order total
        let p = document.createElement('p')
        p.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}<br>
                        <strong>Thank You!</strong>`
        div.appendChild(p)

        // Try Again!
        let resetButton = document.createElement('button')
        resetButton.setAttribute("name", "order-again")
        resetButton.className = "reset-button"
        resetButton.innerHTML = "Submit Another Order"
        div.appendChild(resetButton)
        
        // Create Order Review
        container.innerHTML = `<h2>Your Order</h2>`
        container.appendChild(div)

        // Add reset button
        document.querySelector('.reset-button').addEventListener('click', e => {

            container.innerHTML = ""
            menuBuild(data)
        
        })

    })
}
