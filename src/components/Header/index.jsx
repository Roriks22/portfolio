import React from 'react';

const Header = () => {
    
    return (
        <header>
            <h1 className="header_name">Portfolio</h1>
            <div className="header_list">
                <a href="#home">Accueil</a>
                <a href="#apropos">A propos</a>
                <a href="#competences">Competences</a>
                <a href="#portfolio">Mes projets</a>
                <a href="#contact">Me contacter</a>
            </div>
        </header>
    )
}

export default Header;