import React from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Nav() {
    return (
        <nav className='nav container'>
            <div className='nav__logo'>LOGO</div>
            <div className='nav__menu'>
                <ul className='nav__menu-items'>
                    <li className='nav__menu-item'><Link to="/">Home</Link></li>
                    <li className='nav__menu-item'><Link to="/about">About</Link></li>
                    <li className='nav__menu-item'><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className='nav__menu-socials'>
                    <li className='nav__menu-social'><Link to="/"><FacebookIcon/></Link></li>
                    <li className='nav__menu-social'><Link to="/about"><InstagramIcon/></Link></li>
                    <li className='nav__menu-social'><Link to="/contact"><TwitterIcon/></Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
