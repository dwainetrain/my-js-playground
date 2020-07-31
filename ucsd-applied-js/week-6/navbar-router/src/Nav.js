import React from 'react';
import { Link, NavLink  } from 'react-router-dom';

const Nav = ({ links }) => {

    const linksList = [...links]
                    .map(link => (  
                    // structure of array ['home', '/home'] 
                    <li key={link[1]} >
                        <NavLink 
                        to={link[1]} 
                        activeClassName="active">
                            {link[0]} 
                        </NavLink>
                    </li>
                    ));
    return(

        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">WebSiteName</Link>
                </div>
                <ul className="nav navbar-nav">
                    {linksList}
                </ul>
            </div>
        </nav>
        )
    }    

export default Nav;