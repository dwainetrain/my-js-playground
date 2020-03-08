import React from 'react';
import {choice, remove} from "./helpers";
import foods from "./foods"
class Hello extends React.Component {
  render(){
    let fruit = choice(foods)
    let updateFruits = remove(foods, fruit)
    return (
      <div>
        <p>I'd like a {fruit}, please.</p>
        <p>Here you go: {fruit}</p>
        <p>There are {updateFruits} left.</p>
      </div>
    )
  }
}

export default Hello;