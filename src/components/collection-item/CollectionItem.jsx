import React from 'react'
import CustomButton from './../custom-button/CustomButton'

import './collection-items.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div
            className='collection-item__image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-item__collection-footer'>
            <span className='collection-item__collection-footer__name'>{name}</span>
            <span className='collection-item__collection-footer__price'>{price}</span>
        </div>
        <CustomButton onClick={()=>console.log(name)} className='collection-item__customButton'>
            Go to Checkout
        </CustomButton>
    </div>
);

export default CollectionItem;