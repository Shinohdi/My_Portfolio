import { NavLink } from 'react-router-dom';
import './style/Header.css';
import CV from '../../data/CV_AMRI_Mahdi.pdf';

function Header() {
    return (
        <nav className="header">
            <div className="header__name">
                <NavLink to={'/'} className="header__name--title">
                    <h1>Mahdi AMRI</h1>
                </NavLink>
                <p className="header__name--subtitle">
                    Game Developer | Web Developer
                </p>
            </div>
            <div className="header__buttons">
                <a
                    href="https://www.linkedin.com/in/amahdi/"
                    className="header__buttons--linkedin link"
                >
                    Linkedin
                </a>
                <a
                    href={CV}
                    download="CV_Mahdi_AMRI.pdf"
                    className="header__buttons--cv link"
                >
                    Mon CV
                </a>
            </div>
        </nav>
    );
}

export default Header;
