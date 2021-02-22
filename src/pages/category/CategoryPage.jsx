
import React, { useState } from 'react';

import DIRECTORY_DATA from './data-shop';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './category.scss';

const CategoryPage = ({ match }) => {
    const pageType = match.params.category;
    const [directoryData,] = useState(DIRECTORY_DATA);

    const x = directoryData.filter(item => item.routeName === pageType);
    const product = x.map(({ items }) => {
        return items
    });

    return (
        <div className='category-page'>
            <h1 className='category-page__title'>{pageType.toUpperCase()}</h1>
            <div className='category-page__preview'>
                {
                    product[0].map(({ id, ...item }) => (
                        <CollectionItem key={id} item={item} />))
                }
            </div>
        </div>
    );
};

export default CategoryPage;