import React from 'react';
import './App.css';
import Nav from './nav'
import Content from './content'

function App() {
  return React.createElement( React.Fragment, {},
    [Nav, Content()]
  );
}

export default App;