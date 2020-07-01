import React from 'react';

function NavList() {
    return React.createElement(
        'ul',
        {className: "nav navbar-nav"},
        React.createElement(
            'li',
            {className: 'active'},
            React.createElement(
                'a',
                {href: '#'},
                'Home'
            )
        ),
        React.createElement(
            'li',
            {},
            React.createElement(
                'a',
                {href: '#'},
                'Page 1'
            )
        ),
        React.createElement(
            'li',
            {},
            React.createElement(
                'a',
                {href: '#'},
                'Page 2'
            )
        ),
        React.createElement(
            'li',
            {},
            React.createElement(
                'a',
                {href: '#'},
                'Page 3'
            )
        )
    )
}

export default NavList();
