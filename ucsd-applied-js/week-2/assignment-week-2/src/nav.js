import React from 'react';
import NavList from './navlist'

const Nav = React.createElement(
    'nav',
    { className: "navbar navbar-default"},
    React.createElement(
        'div',
        {className: 'container-fluid'},
        React.createElement(
            'div',
            {className: 'navbar-header'},
            React.createElement(
                'a',
                {className: 'navbar-brand', href: '#'},
                'WebSiteName'
            )
        ),
        NavList
    )
)

export default Nav;