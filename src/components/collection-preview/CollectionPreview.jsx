import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='collection-preview__title'>{title.toUpperCase()}</h1>
        <div className='collection-preview__preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;