import { useState } from 'react';

function ImageProjet({ cover, spec, title, type }) {
    const [hidden, setHidden] = useState(true);

    return (
        <div
            className="projets__projet--img"
            onMouseEnter={() => setHidden(false)}
            onMouseLeave={() => setHidden(true)}
        >
            <img src={cover} alt={`${title} cover`} />
            <div
                className={
                    hidden
                        ? 'projets__projet--img-softDetails hide'
                        : 'projets__projet--img-softDetails display'
                }
            >
                <div className="spec">
                    <div className="spec-text">
                        <i className="fa-solid fa-people-group"></i>
                        <p>{spec.nbPeople}</p>
                    </div>
                    <div className="spec-text">
                        <i className="fa-solid fa-clock"></i>
                        <p>{spec.duration}</p>
                    </div>
                    <div className="spec-text">
                        <i className="fa-solid fa-gear"></i>
                        <p>{spec.engine}</p>
                    </div>
                </div>
                <p>Cliquez pour plus de détails</p>
            </div>
        </div>
    );
}

export default ImageProjet;
