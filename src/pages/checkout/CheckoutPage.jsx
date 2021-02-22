import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './checkout.scss';

const CheckoutPage = ({ cartItems }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const s = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
        setTotal(s);
    }, [cartItems]);

    return (
        <div className='checkout-page'>
            <div className='checkout-page__header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-page__block'>
                    <span>Description</span>
                </div>
                <div className='checkout-page__block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-page__block'>
                    <span>Price</span>
                </div>
                <div className='checkout-page__block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='checkout-page__total'>TOTAL: $ {total}</div>
        </div>
    );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CheckoutPage);