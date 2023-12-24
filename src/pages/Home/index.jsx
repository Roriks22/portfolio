import Banner from '../../components/Banner/index';
import fd_devweb from '../../assets/images/DevWeb.jpg';

const Home = () => {
    return (
        // Utilisation de l'id pour gérer avec le style scss.
    <div id="home">
        <div id="banner_ChezVous">
        {/* Utilisation du composant Banner avec les props pour pouvoir mettre l'image, le text et le alt. */}
        <Banner
        imgSrc={fd_devweb}
        imgText="Romain Jacquesson - Développeur web fullstack."
        imgAlt="Fd devweb" />

            <div className="button">
                <a href="#contact" className="button__first">Contactez-moi !</a>
                <a href="#portfolio" className="button__second">Découvrir mes projets</a>
            </div>
            </div>
        </div>
    );
}

export default Home;
