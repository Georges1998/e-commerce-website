import React, { useState } from 'react';

import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import SHOP_DATA from './data-shop.js';

const ShopPage = () => {
    const [shopData,] = useState(SHOP_DATA);

    shopData.map((e) => console.log(e));

    return (
        <div>
            {shopData.map(({ id, ...other }) => (
                <CollectionPreview key={id} {...other} />
            ))}
        </div>
    )
}

export default ShopPage;