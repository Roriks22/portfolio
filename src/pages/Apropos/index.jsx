import React from 'react';
import profil from '../../assets/images/photodeprofil.JPG';

const Apropos = () => {

    return (
        <section id="apropos">
            <div className="apropos_me">
                <h3>À propos :</h3>
                <p>
                Je m'appelle Romain Jacquesson, développeur fullStack ayant acquis de solides compétences grâce à la formation que j'ai réalisé chez OpenClassrooms en tant que Développeur Web. Au cours de cette formation j'ai acquis plusieurs connaissances sur diverses technologies tels que les langages HTML5, CSS3, SASS, JavaScript, React, NodeJS, ExpressJS, MongoDB. Grâce à ces nombreuses compétences acquises, je suis capable de créer des applications Web modernes et responsives, ainsi que gérer l'optimisation d'un site et de le rendre fluide et accessible à tous.</p>
                <img src={profil} alt="photo_de_profil" />
                <div className="apropos_me_button">
                    <a className="github_link" href="https://github.com/Roriks22" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github" style={{ color: '#000000' }}></i>GitHub
                    </a>
                    <a className="cv_link" href="https://cvromainjacquesson.files.wordpress.com/2024/01/cv_romain_jacquesson-2.pdf" target="_blank" rel='noopener noreferrer'>
                        Afficher mon CV 
                    </a>  
                </div>                
            </div>
        </section>
    );
}

export default Apropos;


