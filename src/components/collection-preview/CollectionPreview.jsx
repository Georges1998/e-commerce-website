import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';
import { withRouter } from 'react-router-dom';
import './collection-preview.scss';

const CollectionPreview = ({ history, match, title, items, routeName }) => (
    <div className='collection-preview' >
        <h1 className='collection-preview__title' onClick={() => history.push(`/shop/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className='collection-preview__preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default withRouter(CollectionPreview);