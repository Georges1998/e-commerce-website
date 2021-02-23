import React from 'react'
import CustomButton from './../custom-button/CustomButton'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';

import './collection-items.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
                className='collection-item__image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-item__collection-footer'>
                <span className='collection-item__collection-footer__name'>{name}</span>
                <span className='collection-item__collection-footer__price'>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} className='collection-item__customButton'>
                Add to Cart
            </CustomButton>
        </div>)
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);