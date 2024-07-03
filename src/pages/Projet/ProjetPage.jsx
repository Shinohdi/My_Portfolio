import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import data from '../../data/data.json';
import './style/ProjetPage.css';

function ProjetPage() {
    const { titleId } = useParams();
    const projet = data.find((pro) => pro.titleId === titleId);
    const IMG = (imgName) => {
        return require(`../../images/${imgName}`);
    };

    switch (projet.type) {
        case 'game':
            const urlVideo = projet.video;
            return (
                <div className="page">
                    <div className="page__video">
                        <h2>- {projet.title} -</h2>
                        <ReactPlayer
                            url={urlVideo}
                            controls
                            width={1200}
                            height={600}
                            className="page__video"
                        />
                    </div>
                    <div className="page__info">
                        <h2>- Informations -</h2>
                        <div className="page__info--desc">
                            <h3>- Description</h3>
                            <p>{projet.description}</p>
                        </div>
                        <div className="page__info--details">
                            <h3>- Détails</h3>
                            <p>
                                <strong>Moteur de jeu :</strong>{' '}
                                {projet.spec.engine}
                            </p>
                            <p>
                                <strong>Durée :</strong> {projet.spec.duration}
                            </p>
                        </div>
                        <div className="page__info--team">
                            <h3>- Équipe</h3>
                            <ul>
                                {projet.team.map((p) => (
                                    <li key={p.name}>
                                        <strong>{p.name}</strong> - {p.role}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="page__learn">
                        <h2>- Compétences acquises -</h2>
                        <ul className="page__learn--skills">
                            {projet.skills.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                    </div>
                    {projet.gameURL ? (
                        <div className="page__game">
                            <h2>- Jeu -</h2>
                            <a href={projet.gameURL}>
                                Jeu à télécharger sur itch.io
                            </a>
                        </div>
                    ) : null}
                </div>
            );
        case 'web':
            return <div></div>;
        default:
            break;
    }
}

export default ProjetPage;
