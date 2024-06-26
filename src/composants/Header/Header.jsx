import { NavLink } from 'react-router-dom';
import './style/Header.css';
import CV from '../../data/CV_AMRI_Mahdi.pdf';

function Header() {
    return (
        <nav className="header">
            <div className="header__name">
                <NavLink to={'/My_Portfolio/'} className="header__name--title">
                    <h1>Mahdi AMRI</h1>
                </NavLink>
                <p className="header__name--subtitle">Développeur</p>
            </div>
            <div className="header__cv">
                <a href={CV} download="CV_Mahdi_AMRI.pdf">
                    Mon CV
                </a>
            </div>
        </nav>
    );
}

export default Header;
