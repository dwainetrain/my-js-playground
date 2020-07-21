import React from 'react';
import Weather from './Weather';
import logo from './logo.svg';
import './App.css';

function App() {


  // const weather = async () => {
  //   await fetch("https://mm214.com/demo.php")
  //   .then((response) => response.json())
  //   .then(data => {
  //     return (
  //      data
  //     )
  //   })
  // }

  // TODO: MDN error checking
  // fetch('flowers.jpg')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.blob();
  // })
  // .then(myBlob => {
  //   myImage.src = URL.createObjectURL(myBlob);
  // })
  // .catch(error => {
  //   console.error('There has been a problem with your fetch operation:', error);
  // });
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Weather />
      </header>
    </div>
  );
}

export default App;
