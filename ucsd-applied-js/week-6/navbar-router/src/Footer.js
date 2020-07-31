import "./Footer.css"
import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Here lies the footer</span>
                </div>
            </footer>
        )
    }
}

export default Footer;