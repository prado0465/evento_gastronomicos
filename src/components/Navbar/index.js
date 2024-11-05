import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/cadastro-prato">Cadastro de Prato</Link></li>
                <li><Link to="/gastronomy-map">Mapa</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;