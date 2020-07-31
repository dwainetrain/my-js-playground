import React, { useState } from 'react';
import { Collapse, Nav as NavBS, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

const Nav = ({pageRouting, links, active}) => {

    // from reactstrap guide, using hooks to set state of responsive menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // store the links, pull in active page from App props
    const linksList = [...links]
                    .map(link => (  
                    // structure of array ['home', '/home'] 
                    <NavItem  className={active === link[1] ? 'active' : ''} key={link[1]}>
                        <NavLink onClick={() => pageRouting(link[1])} href="#"> 
                            {link[0]} 
                        </NavLink>
                    </NavItem>
                    ));
    return(
        <Navbar color="light" light expand="md">
            
            <NavbarBrand href="/home">WebSiteName</NavbarBrand>
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