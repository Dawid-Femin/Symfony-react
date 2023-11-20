import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='nav__logo'>LOGO</div>
                <div className='nav__menu'>
                    <ul className='nav__menu-items'>
                        <li className='nav__menu-item'><Link to="/">Home</Link></li>
                        <li className='nav__menu-item'><Link to="/about">About</Link></li>
                        <li className='nav__menu-item'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='nav__social'>SOCIAL</div>
            </div>
        </nav>
    );
}

export default Nav;
