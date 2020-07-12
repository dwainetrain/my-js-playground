import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

function App() {
  // had to learn a little about hooks to get state working in functioinal components
  // I'll try building out this idea more when we go deeper into state
  // right now, though it's not very dynamic, it serves its purpose
  const [activePage] = useState('/home')

  return (  
    <>
      <Nav active={activePage} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
