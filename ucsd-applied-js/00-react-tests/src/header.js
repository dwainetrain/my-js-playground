import React from 'react';
import Hello from './hello';
import Link from './link';

function Header() {
    return React.createElement(
        'div',
        { id: 'main'},
        [Hello, Link]
    )
}

export default Header();