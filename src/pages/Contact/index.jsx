import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h3>Contact :</h3>
            <div className="contact__content">
                <div className="contact__info">
                    <h4>Envoyez moi un message :</h4>
                    <div className="contact__info__list">
                        <div className="contact__info__list__bullet">
                            <i className="fa-brands fa-linkedin"></i>     
                            <a href="https://www.linkedin.com/in/romain-jacquesson-450422168/">LinkedIn</a>
                        </div>
                        <div className="contact__info__list__bullet">
                            <i className="fa-solid fa-phone"></i>
                            <p>06 31 21 62 03</p>
                        </div>
                        <div className="contact__info__list__bullet">
                            <i className="fa-solid fa-envelope"></i>
                            <p>romain.jacquesson@gmail.com</p>
                        </div>
                        <div className="contact__info__list__bullet">
                            <i className="fa-solid fa-location-dot"></i>
                            <p id="ppp">Beauvais et ses alentours</p>
                        </div>
                    </div>
                </div>
                </div>
            <div className="copyright">
                {/* Contenu pour les droits d'auteur si nécessaire */}
            </div>
        </section>
    );
}

export default Contact;