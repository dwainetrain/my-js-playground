/*
Menu Order Form - UCSD Ext. Javascript Course - Final
Code by Dwaine Best
*/

// Just a little test data to verify the robustness of the menu building function
const testData = { "menu": { "slice of pizza": "2.00", "pizza pie": "25.00", "toppings": { "pepperoni": ".25", "meatballs": ".35", "mushrooms": ".40", "olives": ".20", "vegan":{"brocolli": "3.00"} }, "sides": { "potato salad": "1.25", "hummus": "2.50", "caesar salad": "3.50", "garden salad": "2.25" }, "drinks": { "soda": { "small": "1.95", "medium": "2.20", "large": "2.50" }, "juice": "2.00", "water": "1.25" } }, "Kids menu":{"hamburger":"3.00"}}

const shortData = { "menu": { "slice of pizza": "2.00", "pizza pie": "25.00", "toppings": { "pepperoni": ".25", "meatballs": ".35", "mushrooms": ".40", "olives": ".20"} }}

const shorterData = { "menu": { "slice of pizza": "2.00", "pizza pie": "25.00"} } // works

const shortestData = { "menu": {"slice of pizza" : "2.00"}} //works

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

//////////////////////////// Works nice enough, but not structured how I would expect...
/* Build Webpage */
const menuBuild = (data) => {
//     depth = 0;
//    function header(data) { //working
//        for(i in data) {
//            if(typeof data[i] === 'object'){
//                 document.write(`<h3>${depth} ${i}</h3>`)
//                 depth++;
//                 header(data[i])
//            } else {
//                 document.write(`<p>${depth} ${i}</p>`)
//            }
//        }
//    }
///////////////////////
   function node(data) { //testing
    console.log(data)
    for(i in data) {
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        
        let li = document.createElement('li')
        let ul = document.createElement('ul')
        console.log("initial node i ", i)
        console.log("initial node data[i] ", data[i])
        h3.innerHTML = `header: ${i}`
        div.appendChild(h3)

        if(typeof data[i] === 'object'){        
            
            // body.appendChild(ul)
            console.log("This is node data i", data[i])
            ul.appendChild(item(data[i]))
            div.appendChild(ul)
        }

        document.body.appendChild(div)
        
    }
    }

    function item(data) {
        console.log("This is the item data", data)
        let ul = document.createElement('ul')
        
        
        for(i in data) {
            console.log("this is i in data in item: ", i)
            let li = document.createElement('li')
            if(typeof data[i] === 'object'){
                console.log("it's data i:", data[i])
                li.appendChild(node(data[i]))
            } //else {
            //     li.innerHTML = `${i}`
            //     console.log('You made it to item!', li)
            // }
            li.innerHTML = `${i}, price: ${data[i]}`
            ul.appendChild(li)
        }

        return ul
    }

   node(data)


//     ///////
//     function parseNodes(nodes) { // takes a nodes array and turns it into a <ol>
//         console.log(nodes)
//         var ol = document.createElement("OL");
//         for(i in nodes) {
//             console.log(nodes[i])
//             ol.appendChild(parseNode(nodes[i]));
//         }
//         return ol;
//     }
    
//     function parseNode(node) { // takes a node object and turns it into a <li>
//         var li = document.createElement("LI");
//         li.innerHTML = node.title;
//         li.className = node.class;
//         console.log(node.nodes)
//         if(node.nodes) li.appendChild(parseNodes(node.nodes));
//         return li;
//     }
//     /////////
//     document.body.appendChild(parseNodes(data))
   
}
