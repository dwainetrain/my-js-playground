import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';
// import './App.css';

function App() {
  // had to learn a little about hooks to get state working in functioinal components
  // I'll try building out this idea more when we go deeper into state
  // right now, it's not very dynamic
  const [activePage] = useState('/home')

  return (  
    <div className="App">
      <Nav active={activePage} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
