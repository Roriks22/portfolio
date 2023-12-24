import React from 'react';
import logoHtml from '../../assets/images/logo_html.png';
import logoCss from '../../assets/images/logo_css.png';
import logoJavascript from '../../assets/images/logo_javascript.jpg';
import logoSeo from '../../assets/images/logo_seo.png';
import logoReact from '../../assets/images/logo_react.png';
import logoSass from '../../assets/images/logo_sass.png';
import logoNodejs from '../../assets/images/logo_nodejs.png';
import logoExpressJs from '../../assets/images/logo_express.png';
import logoMongoDB from '../../assets/images/logo_mongodb.png';

const Competences = () => {
    return (
        <div id='competences'>
            <h2>Technologies</h2>
                <h3>Les langages Frontend et Backend que je suis capable d'utiliser.</h3>
                <div className='logo_langage'>
                    <img src={logoHtml} alt='Logo_HTML' />    
                    <img src={logoCss} alt='Logo_CSS' />
                    <img src={logoJavascript} alt='Logo_JavaScript' />
                    <img src={logoSeo} alt='Logo_SEO' />
                    <img src={logoReact} alt='Logo_React' />
                    <img src={logoSass} alt='Logo_SASS' />
                    <img src={logoNodejs} alt='Logo_NodeJS' />
                    <img src={logoExpressJs} alt='Logo_ExpressJS' />
                    <img src={logoMongoDB} alt='Logo_MongoDB' />
                </div>
            
        </div>
    );
};

export default Competences;