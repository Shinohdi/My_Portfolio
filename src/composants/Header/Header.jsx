import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <NavLink to={'/My_Portfolio/'} className="nav_name">
                Mahdi AMRI
            </NavLink>
            <NavLink to={'/My_Portfolio/test'}>Test</NavLink>
        </nav>
    );
}

export default Header;
