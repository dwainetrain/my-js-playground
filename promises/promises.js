console.log('it works!');

fetch('https://jsonplaceholder.typicode.com/todos/').then(
    res => {res.json();
        console.log(res);
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})