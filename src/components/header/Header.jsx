
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = () => (
    <div className='header'>
        <Link className='header__logo-container' to='/'>
            <Logo className='header__logo' />
        </Link>
        <div className='header__options'>
            <Link className='header__options__option' to='/shop'>
                SHOP
                </Link>
            <Link className='header__options__option' to='/shop'>
                CONTACT
                </Link>
        </div>
    </div >
);

export default Header;