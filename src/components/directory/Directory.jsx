import React, { useState } from 'react'
import MenuItem from '../../components/menu-item/MenuItem'

import './directory.scss'

import DIRECTORY_DATA from './data-directory.js';

const Directory = () => {
    const [directoryData,] = useState(DIRECTORY_DATA);

    return (
        <div className='directory-menu'>
            {directoryData.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
}
export default Directory