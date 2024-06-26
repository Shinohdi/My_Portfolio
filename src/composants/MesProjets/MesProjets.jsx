import Projet from '../Projet/Projet.jsx';
import data from '../../data/data.json';
import './style/MesProjets.css';

function MesProjets() {
    const projetsList = data;
    return (
        <div className="home__myWorks--projects">
            {projetsList.map((projet) => (
                <div key={projet.id} className="projet">
                    <Projet
                        title={projet.title}
                        cover={projet.cover}
                        description={projet.description}
                    />
                </div>
            ))}
        </div>
    );
}

export default MesProjets;
