import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

function App() {
  // this is the most elegant solution I could find for routing: 
  // Just use state. I hope this still demonstrates that I understand props.
  const [activePage, setActivePage] = useState('/home')

  // Site content and structure
  const site = {
    home:
    {
      title: "Home",
      link: "/home",
      content: "Welcome to our Homepage!",
    },
    pageOne: 
    {
      title: "Page 1",
      link: "/page-one",
      content: "We're in it for fun and profit!",
    },
    pageTwo: 
    {
      title: "Page 2",
      link: "/page-two",
      content: "You've picked the right page, if you picked page two!",
    },
    pageThree: 
    {
      title: "Page 3",
      link: "/page-three",
      content: "Third link in this elaborate maze",
    },
  }

  // Create Link Structure from site object
  const linksMap = new Map(Object.entries(site)
                          .map(page => [ page[1].title, page[1].link ]))

  // Pull page content based on state
  const currentPage = Object.keys(site).find(key => site[key].link === activePage)
  // destructure to keep varibles simple
  const {title, content} = site[currentPage]
 
  // Method to handle routing in nav
  // setting state based on what's clicked in by the navbar component
  const handleRouting = (page) => {
    setActivePage(page)
  }

  return (  
    <>
      <Nav active={activePage} links={linksMap} pageRouting={handleRouting}/>
      <Content title={title} content={content}/>
      <Footer />
    </>
  );
}

export default App;
