import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden, cartItems }) =>
(<div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__count">{cartItems.length}</span>
</div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = state => ({ cart: { cartItems } }) => ({ cartItems })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);