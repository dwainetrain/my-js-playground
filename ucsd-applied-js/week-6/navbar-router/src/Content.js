import React from 'react';

function Content({title, content}) {

        return(
            <div className="container">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
}

export default Content;