import { createElement} from 'react';

export default function Content() { 
    return createElement(
        'div',
        {className: 'containter'},
        createElement(
            'h3',
            {},
            'Basic Navbar Example'
        ),
        createElement(
            'p',
            {},
            'A navigation bar is a navigation header that is placed at the top of the page.'
        )
    )

    }