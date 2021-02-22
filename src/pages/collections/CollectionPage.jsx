
import React from 'react';

import './collections.scss';

const CollectionPage = ({ match }) => {
    const pageType = match.params.category;

    return (
        <div className='collection-page'>
            <h1>{pageType.toUpperCase()}</h1>
        </div>
    );
};

export default CollectionPage;