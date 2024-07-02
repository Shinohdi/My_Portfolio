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
                        <img src={avatar} alt="space invader ennemi" />
                    </div>
                    <p className="text">
                        Actuellement à la recherche d’un emploi dans la
                        conception de jeux vidéo. Âgé de 24 ans, je suis
                        passionné de jeux vidéo mais aussi de créer et
                        comprendre comment fonctionne leur système.
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
                        mahdi.amr@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Accueil;
