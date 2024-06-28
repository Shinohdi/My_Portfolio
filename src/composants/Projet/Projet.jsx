import ImageProjet from '../ImageProjet/ImageProjet';

function Projet({ projet }) {
    const IMG = (imgName) => {
        return require(`../../images/${imgName}`);
    };
    return (
        <>
            <ImageProjet
                cover={IMG(projet.cover)}
                spec={projet.spec}
                title={projet.title}
            />
            <h3 className="projets__projet--title">
                {projet.title} {`(${projet.year})`}
            </h3>
            <p className="projets__projet--description">{projet.description}</p>
        </>
    );
}

export default Projet;
