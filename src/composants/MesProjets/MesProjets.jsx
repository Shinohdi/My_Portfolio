import ApercuProjet from '../Projet/ApercuProjet.jsx';
import data from '../../data/data.json';
import './style/MesProjets.css';

function MesProjets() {
    const projetsList = data;
    return (
        <div className="projets">
            {projetsList.map((projet) => (
                <div key={projet.id} className="projets__projet">
                    <ApercuProjet projet={projet} />
                </div>
            ))}
        </div>
    );
}

export default MesProjets;
