function Projet({ title, cover, description }) {
    const IMG = (imgName) => {
        return require(`../../images/${imgName}`);
    };
    return (
        <>
            <img src={IMG(cover)} alt={`${title} cover`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    );
}

export default Projet;
