import "./Footer.css"
import React from 'react';
import { Container } from "reactstrap";

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
                <Container fluid>
                    <span class="text-muted">Here lies the footer</span>
                </Container>
            </footer>
        )
    }
}

export default Footer;