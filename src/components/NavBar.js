import './NavBar.css';
import logoqpv from '../logo-qpv.png';

function NavBar () {
    return (
        <div className='navbar'>
            <header className="NavBar-header">
                <div className="NavBarLogo">
                    <img src={logoqpv} alt="Imagen Logo"/>
                </div>
                <ul className="NavBarUl">
                    <li>Inicio</li>
                    <li>Películas</li>
                    <li>Series</li>
                    <li>Que podemos ver?</li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar;