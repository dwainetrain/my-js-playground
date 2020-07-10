import React, { useState } from 'react';
import { Collapse, Nav as NavBS, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

const Nav = (props) => {

    // from reactstrap guide, using hooks to set state of responsive menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // Using map because it guarantees retrival order
    const linksMap = new Map([
        ['Home', '/home'],
        ['page 1', '/page1'],
        ['page 2', '/page2'],
        ['page 3', '/page3'],
    ])
    
    // store the links, pull in active page from App state
    const linksList = [...linksMap]
                    .map(link => (    
                    <NavItem className={props.active === link[1] ? 'active' : null} key={link[1]}>
                        <NavLink href={link[1]}>{link[0]}</NavLink>
                    </NavItem>
                    ));

    return(
        // the npm version of bootstrap uses version 4.
        // To get things looking the same as the bootstrap 3 version, I needed to restructure the html 
        // as a bonus, this added a collapsing hamburger menu. Mainly copied from reactstrap docs.
        <Navbar color="light" light expand="md">
            
            <NavbarBrand href="">WebSiteName</NavbarBrand>
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <NavBS className="mr-auto" navbar>
                    {linksList}
                </NavBS>
            </Collapse>
            
        </Navbar>
        )
    }    

export default Nav;