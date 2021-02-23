
import React, { useState } from 'react';

import DIRECTORY_DATA from './../shop/data-shop';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './category.scss';

const CategoryPage = ({ match }) => {
    const pageType = match.params.category;
    const [directoryData,] = useState(DIRECTORY_DATA);

    const product = directoryData.find(item => item.routeName === pageType);

    return (
        <div className='category-page'>
            <h1 className='category-page__title'>{product.title.toUpperCase()}</h1>
            <div className='category-page__sub-title'>
                <p>{product.description}</p>
            </div>
            <div className='category-page__preview'>
                {
                    product.items.map((item) => (
                        <CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    );
};

export default CategoryPage;