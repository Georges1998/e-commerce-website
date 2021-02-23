import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden, cartItems }) => {
    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
        setItemsCount(count);
    }, [cartItems]);


    return (<div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="cart-icon__icon" />
        <span className="cart-icon__count">{itemsCount}</span>
    </div>
    )

}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({ cart: { cartItems } }) => ({ cartItems })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);