import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {

  // Site content and structure
  const site = [
    {
      title: "Home",
      link: "/",
      content: "Welcome to our Homepage!",
    },
    {
      title: "Page 1",
      link: "/page-one",
      content: "We're in it for fun and profit!",
    },
    {
      title: "Page 2",
      link: "/page-two",
      content: "You've picked the right page, if you picked page two!",
    },
    {
      title: "Page 3",
      link: "/page-three",
      content: "Third link in this elaborate maze",
    },
  ]

  const [sitePages] = useState(site)

  // Create Link Structure from site state
  const linksMap = new Map(Object.entries(sitePages)
                          .map(page => [ page[1].title, page[1].link ]))

  return (  
    <>
      <Nav links={linksMap} />
      
      <Footer />
      
      <Switch>
        {sitePages.map(page =>
          <Route exact path={page.link} key={page.link}>
            <Content title={page.title} content={page.content}/>
          </Route>
        )}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
