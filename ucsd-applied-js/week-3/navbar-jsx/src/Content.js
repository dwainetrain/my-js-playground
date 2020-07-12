import React from 'react';
import { Container } from "reactstrap";

class Content extends React.Component {
    render(){
        return(
            <Container fluid>
                <h3>Basic Navbar Example</h3>
                <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
            </Container>
        )
    }
}

export default Content;