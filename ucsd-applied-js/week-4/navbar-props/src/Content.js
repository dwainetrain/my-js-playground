import React from 'react';
import { Container } from "reactstrap";

function Content({title, content}) {

        return(
            <Container fluid>
                <h3>{title}</h3>
                <p>{content}</p>
            </Container>
        )
}

export default Content;