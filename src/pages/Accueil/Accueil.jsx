import './style/Accueil.css';
import MesProjets from '../../composants/MesProjets/MesProjets';
import Contact from '../../composants/Contact/Contact';
import avatar from '../../images/avatar.png';

function Accueil() {
    return (
        <div className="home">
            <div className="home__about">
                <h2 className="home__about--title">- À propos de moi -</h2>
                <div className="home__about--desc">
                    <div className="avatar">
                        <img
                            src={avatar}
                            alt="Avatar en PixelArt me représentant"
                        />
                    </div>
                    <p className="text">
                        <strong>Bienvenue dans mon portfolio !</strong>
                        <br />
                        Depuis mon plus jeune âge, je suis passionnée par les
                        jeux vidéo. Cette passion m'a naturellement conduit à
                        suivre un cursus en Game Design à l'ICAN, où j'ai pu me
                        spécialiser dans le développement de jeux vidéo.
                        Souhaitant élargir mes compétences et explorer de
                        nouvelles opportunités, j'ai suivi une formation
                        d'intégrateur web sur Openclassrooms.
                    </p>
                </div>
            </div>
            <div className="home__myWorks">
                <h2 className="home__myWorks--title">- Mes projets -</h2>
                <MesProjets />
            </div>
            <div className="home__contact">
                <h2>- Contact -</h2>
                <p>Mon profil vous intéresse ? N'hésitez pas à me contacter.</p>
                <Contact />
                <p>
                    Ou sinon envoyez-moi directement un mail à mon adresse :
                    <a href="mailto:mahdi.amr@gmail.com">
                        {' '}
                        mahdi.amr20@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Accueil;
