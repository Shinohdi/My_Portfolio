import ImageProjet from '../ImageProjet/ImageProjet';
import { Link } from 'react-router-dom';

function ApercuProjet({ projet }) {
    const IMG = (imgName) => {
        return require(`../../images/${imgName}`);
    };
    return (
        <>
            <Link to={`/My_Portfolio/${projet.titleId}`}>
                <ImageProjet
                    cover={IMG(projet.cover)}
                    spec={projet.spec}
                    title={projet.title}
                    type={projet.type}
                />
            </Link>
            <h3 className="projets__projet--title">
                {projet.title} {`(${projet.year})`}
            </h3>
            <p className="projets__projet--description">{projet.resume}</p>
        </>
    );
}

export default ApercuProjet;
