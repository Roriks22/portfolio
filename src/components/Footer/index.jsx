import React from 'react';
import logo from '../../assets/images/logo_dev_web.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="logo_DevWeb" />
            <p>© Romain Jacquesson</p>
        </footer>
    );
}

export default Footer;