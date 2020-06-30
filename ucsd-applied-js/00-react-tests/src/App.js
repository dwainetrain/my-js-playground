import React, { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello'
import Link from './link'
import Header from './header';

function App() {
  return React.createElement(
    'div',
    { className: "WTF"},
    Header
  );
}

export default App;