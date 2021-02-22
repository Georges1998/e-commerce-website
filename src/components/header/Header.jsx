
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/shoe.svg';
import { auth } from '../../firebase/firebase-service';
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import './header.scss';

const Header = ({ currentUser, ...props }) => {
    return (
        <div className='header'>
            <Link className='header__logo-container' to='/'>
                <div className='header__logo'>
                    <Logo className='logo logo1' />
                    <h1>SHOE LA LA</h1>
                    <Logo className='logo' />
                </div>
            </Link>
            <div className='header__options'>
                <Link className='header__options__option' to='/shop'>
                    SHOP
            </Link>
                <Link className='header__options__option' to='/shop'>
                    CONTACT
            </Link>
                {
                    currentUser ?
                        <div className='header__options__option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='header__options__option' to='/login'>LOG IN</Link>
                }
            <CartIcon />
            </div>
            <CartDropdown />
        </div >)
};
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);