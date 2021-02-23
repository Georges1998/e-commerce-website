
import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart-actions';
import './checkout-items.scss';

const CheckoutItem = ({ cartItem: { id, name, imageUrl, price, quantity }, removeItem }) => (
    <div className='checkout-item'>
        <div className='checkout-item__image'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='checkout-item__name'>{name}</span>
        <span className='checkout-item__quantity'>{quantity}</span>
        <span className='checkout-item__price'>{price}</span>
        <div className='checkout-item__remove-button' onClick={() => removeItem({ id, name, imageUrl, price, quantity })}>&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);