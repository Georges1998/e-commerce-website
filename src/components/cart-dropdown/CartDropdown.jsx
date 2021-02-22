import React from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import CustomButton from './../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem';

import './cart-dropdown.scss'
const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <Link className='header__options__option' to='/checkout'>
            <CustomButton>Go to Checkout</CustomButton>
        </Link>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown)