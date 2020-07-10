import React from 'react';
import Nav from './Nav'
import Content from './Content'

function App() {
  return React.createElement( React.Fragment, {},
    [Nav, Content()]
  );
}

export default App;