// class Example extends Component { 
    
//     constructor(args) { 
//         super(args); 
//         this.state = {message: 'A message in state' }; 
//         }   
    
//     render() { return `Message: ${this.state.message}`; } 
// }

// const post = { id: 1, slug: `post-${this.id}`, title: 'First post' }; 
// console.log(post.slug); // post-1
'use strict';
const post = { 
    id: 1,
    postThis: `THIS: ${this}`,
    slug: `post-${this.id}`, 
    title: 'First post',
};

console.log(post.slug) // post-undefined, text expect post-1
console.log(post.postThis)

const post2 = { 
    id: 2,
    slug: function(){
        return `post-${this.id}`
    }, 
    title: 'First post',
};

console.log(post2.slug()) // post-2


const library =  {
    render: () => console.log('Rendered'),
    save: () => console.log('Saved'),
    update: () => console.log('Updated'),
    push: () => console.log('Pushed'), 
}; 
    
const { render, push: notify } = library; 
render(); // Logs Rendered, render = library.render();, pulls name from object
notify(); // Logs Pushed, notify = library.push();, assigns name
const manRender = library.render();
const manNotify = library.push();
manRender();
manNotify();

// const post = { 
//     id: 1, 
//     slug: function(){
//         // id = this.id;
//         return `post-${this.id}`
//     }, 
//     title: 'First post',
//     buildSlug() {
//         id = this.id;
//         return `post-${id}`
//     },
//     logId() {
//         console.log(this.id)
//     },
//     logSlug(){
//         console.log(this.slug)
//     }
// };

// post.logId(); // 1
// post.logSlug();
// console.log(post.slug()) // post-undefined



// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" is the "current object"
//       console.log(this.name);
//     }
  
//   };
  
//   user.sayHi(); // John

// function render() { this.id = post.id; console.log( this.id ); } render({ id: 1 }); // 1