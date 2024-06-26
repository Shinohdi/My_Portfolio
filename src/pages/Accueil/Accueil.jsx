import './style/Accueil.css';
import MesProjets from '../../composants/MesProjets/MesProjets';
import Contact from '../../composants/Contact/Contact';

function Accueil() {
    return (
        <div className="home">
            <div className="home__about">
                <h2>À propos de moi</h2>
                <p>
                    Actuellement à la recherche d’un emploi dans la conception
                    de jeux vidéo. Âgé de 23 ans, je suis passionné de jeux
                    vidéo mais aussi de créer et comprendre comment fonctionne
                    leur système.
                </p>
            </div>
            <div className="home__myWorks">
                <h2>Mes projets</h2>
                <MesProjets />
            </div>
            <div className="home__contact">
                <h2>Contact</h2>
                <Contact />
            </div>
        </div>
    );
}

export default Accueil;
