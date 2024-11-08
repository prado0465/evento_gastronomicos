import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/eventos">Eventos</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;