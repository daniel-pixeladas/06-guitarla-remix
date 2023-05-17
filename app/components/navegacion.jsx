import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from '@remix-run/react';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

// import imagen from '../../public/assets/img/carrito.png'

function Navegacion() {
    const location = useLocation();
    return (
        <nav className="navegacion">
            <Link to='/'
                className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
            <Link to='/nosotros'
                className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link>
            <Link to='/guitarras'
                className={location.pathname === '/guitarras' ? 'active' : ''}>Guitarras</Link>
            <Link to='/blog'
                className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
            <Link to='/carrito'
                className={location.pathname === '/carrito' ? 'active' : ''}>
                <FontAwesomeIcon icon={faShoppingBasket} />
            </Link>
        </nav>
    )
}

export default Navegacion