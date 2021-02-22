
import React from 'react';

import './checkout-items.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='checkout-item__image'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='checkout-item__name'>{name}</span>
        <span className='checkout-item__quantity'>{quantity}</span>
        <span className='checkout-item__price'>{price}</span>
        <div className='checkout-item__remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;